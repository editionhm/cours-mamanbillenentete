'use server'

import { z } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with API Key (Get this from https://resend.com)
// Put 're_123456789' in your .env.local file as RESEND_API_KEY=re_...
const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
    firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
    email: z.string().email({ message: "Email invalide" }),
    subject: z.string().min(5, { message: "L'objet doit contenir au moins 5 caractères" }),
    message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export type ContactFormState = {
    success?: boolean;
    errors?: {
        [key: string]: string[];
    };
    message?: string;
};

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = ContactFormSchema.safeParse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Veuillez corriger les erreurs.",
        };
    }

    const { firstname, lastname, email, subject, message } = validatedFields.data;

    try {
        // ---------------------------------------------------------
        // REAL EMAIL LOGIC (Requires RESEND_API_KEY in .env)
        // ---------------------------------------------------------
        if (process.env.RESEND_API_KEY) {
            const data = await resend.emails.send({
                from: 'Contact Site <onboarding@resend.dev>', // Ou votre domaine vérifié
                to: ['omnigpt@gmail.com'], // REMPLACEZ PAR VOTRE EMAIL (ex: contact@maman...)
                subject: `[Contact] ${subject}`,
                replyTo: email,
                html: `
          <h1>Nouveau message de ${firstname} ${lastname}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Objet:</strong> ${subject}</p>
          <hr />
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
            });

            if (data.error) {
                console.error("Erreur Resend:", data.error);
                throw new Error("Erreur lors de l'envoi de l'email");
            }
        } else {
            // ---------------------------------------------------------
            // FALLBACK SIMULATION (If no API Key)
            // ---------------------------------------------------------
            console.log("⚠️ NO RESEND_API_KEY FOUND. SIMULATING EMAIL:");
            console.log(`De: ${firstname} ${lastname} (${email})`);
            console.log(`Msg: ${message}`);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        return {
            success: true,
            message: "Message envoyé avec succès !",
        };

    } catch (error) {
        console.error("Server Action Error:", error);
        return {
            success: false,
            message: "Une erreur est survenue lors de l'envoi.",
        };
    }
}
