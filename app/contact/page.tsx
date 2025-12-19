"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Mail, Instagram, Youtube, MapPin, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { sendEmail } from "@/app/actions/send-email"; // Connect to Server Action

// Client-side schema for immediate feedback
const formSchema = z.object({
    firstname: z.string().min(2, "Minimum 2 caractères"),
    lastname: z.string().min(2, "Minimum 2 caractères"),
    email: z.string().email("Email invalide"),
    subject: z.string().min(5, "Minimum 5 caractères"),
    message: z.string().min(10, "Minimum 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        startTransition(async () => {
            // Create FormData object for the server action
            const formData = new FormData();
            formData.append("firstname", data.firstname);
            formData.append("lastname", data.lastname);
            formData.append("email", data.email);
            formData.append("subject", data.subject);
            formData.append("message", data.message);

            const result = await sendEmail({} as any, formData);

            if (result.success) {
                alert(result.message); // Simple alert for now, can be upgraded to Toast
                reset();
            } else if (result.errors) {
                // Handle server errors if any (though client validation catches most)
                console.error(result.errors);
                alert("Erreur lors de l'envoi. Vérifiez les champs.");
            }
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero / Header Section for Contact */}
            <section className="relative w-full py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/contact-bg.png"
                        alt="Bureau Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-sans">
                        Contactez-Moi
                    </h1>
                    <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto font-serif">
                        Une question sur mes offres ? Besoin d'un devis personnalisé ? Je
                        vous réponds sous 24 heures.
                    </p>
                </div>
            </section>

            <section className="container px-4 md:px-6 py-12 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-start">
                    {/* LEFT COLUMN: Contact Form */}
                    <Card className="shadow-xl ring-1 ring-slate-100 border-none rounded-2xl bg-white order-2 lg:order-1">
                        <CardHeader className="p-8 pb-0">
                            <CardTitle className="text-2xl font-sans text-slate-800">
                                Envoyer un message
                            </CardTitle>
                            <CardDescription className="font-serif text-slate-600 text-base">
                                Remplissez ce formulaire pour envoyer un email directement à ma
                                boîte de réception.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="firstname"
                                            className="text-sm font-medium text-slate-700 font-sans"
                                        >
                                            Prénom
                                        </label>
                                        <Input
                                            id="firstname"
                                            className="rounded-xl h-11 bg-slate-50 border-slate-200"
                                            placeholder="Votre prénom"
                                            {...register("firstname")}
                                        />
                                        {errors.firstname && (
                                            <span className="text-xs text-red-500">
                                                {errors.firstname.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="lastname"
                                            className="text-sm font-medium text-slate-700 font-sans"
                                        >
                                            Nom
                                        </label>
                                        <Input
                                            id="lastname"
                                            className="rounded-xl h-11 bg-slate-50 border-slate-200"
                                            placeholder="Votre nom"
                                            {...register("lastname")}
                                        />
                                        {errors.lastname && (
                                            <span className="text-xs text-red-500">
                                                {errors.lastname.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-slate-700 font-sans"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        className="rounded-xl h-11 bg-slate-50 border-slate-200"
                                        placeholder="votre@email.com"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <span className="text-xs text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-slate-700 font-sans"
                                    >
                                        Objet
                                    </label>
                                    <Input
                                        id="subject"
                                        className="rounded-xl h-11 bg-slate-50 border-slate-200"
                                        placeholder="Soutien scolaire, préparation concours..."
                                        {...register("subject")}
                                    />
                                    {errors.subject && (
                                        <span className="text-xs text-red-500">
                                            {errors.subject.message}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-slate-700 font-sans"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        className="min-h-[150px] rounded-xl resize-none bg-slate-50 border-slate-200 focus-visible:ring-primary"
                                        placeholder="Détaillez votre demande ici..."
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <span className="text-xs text-red-500">
                                            {errors.message.message}
                                        </span>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-lg gap-2 rounded-full font-sans transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary/25"
                                    disabled={isPending}
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" /> Envoi en
                                            cours...
                                        </>
                                    ) : (
                                        <>
                                            Envoyer le message <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* RIGHT COLUMN: Contact Information */}
                    <div className="space-y-10 flex flex-col justify-center h-full py-8 order-1 lg:order-2 lg:pl-12 text-center lg:text-left">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-800">
                                Discutons de votre projet
                            </h2>
                            <p className="text-lg text-slate-600 font-serif leading-relaxed">
                                Que ce soit pour un suivi régulier, un stage intensif ou une
                                préparation aux concours, je suis disponible pour échanger sur
                                vos besoins spécifiques.
                            </p>
                        </div>

                        <div className="space-y-8 flex flex-col items-center lg:items-start">
                            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-700 group hover:text-primary transition-colors cursor-pointer">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-primary ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="font-sans font-bold text-sm uppercase tracking-wide text-slate-400">
                                        Email
                                    </span>
                                    <a
                                        href="mailto:contact@mamanbilleentete.fr"
                                        className="font-serif text-xl"
                                    >
                                        contact@mamanbilleentete.fr
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-700">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-secondary ring-1 ring-slate-100">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="font-sans font-bold text-sm uppercase tracking-wide text-slate-400">
                                        Localisation
                                    </span>
                                    <span className="font-serif text-xl">
                                        En Visio (France entière)
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-200 w-full">
                            <h3 className="text-center lg:text-left font-sans font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm">
                                Suivez-moi
                            </h3>
                            <div className="flex justify-center lg:justify-start gap-6">
                                <a
                                    href="https://www.instagram.com/maman_billeentete/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-full shadow-sm ring-1 ring-slate-100 hover:shadow-lg hover:scale-110 hover:text-pink-600 transition-all text-slate-600"
                                >
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@MamanBille-en-tete"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-full shadow-sm ring-1 ring-slate-100 hover:shadow-lg hover:scale-110 hover:text-red-600 transition-all text-slate-600"
                                >
                                    <Youtube className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
