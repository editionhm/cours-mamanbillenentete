"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram, Youtube, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data: any) => {
        // Simulate form submission
        console.log("Form Data:", data);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
        alert("Message envoyé avec succès ! (Simulation)");
        reset();
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
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-Moi</h1>
                    <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Une question sur mes offres ? Besoin d'un devis personnalisé ?
                        Je vous réponds sous 24 heures.
                    </p>
                </div>
            </section>

            <section className="container px-4 md:px-6 py-12 mx-auto">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="border-none shadow-none bg-transparent">
                            <CardHeader className="px-0">
                                <CardTitle className="text-2xl">Mes Coordonnées</CardTitle>
                                <CardDescription className="text-base">
                                    N'hésitez pas à me contacter via le formulaire ou directement par email.
                                    Retrouvez aussi mes conseils gratuits sur les réseaux sociaux.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="px-0 space-y-6">

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Email</h3>
                                        <p className="text-lg font-medium">contact@maman-bille-en-tete.fr</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Localisation</h3>
                                        <p className="text-lg font-medium">En ligne (Visio) & Présentiel (sur demande)</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <Button asChild variant="outline" size="lg" className="flex-1 gap-2 h-14 text-base">
                                        <Link href="https://www.instagram.com" target="_blank">
                                            <Instagram className="h-5 w-5 text-pink-600" />
                                            Instagram
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="flex-1 gap-2 h-14 text-base">
                                        <Link href="https://www.youtube.com" target="_blank">
                                            <Youtube className="h-5 w-5 text-red-600" />
                                            YouTube
                                        </Link>
                                    </Button>
                                </div>

                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="shadow-lg border-muted">
                        <CardHeader>
                            <CardTitle>Envoyer un message</CardTitle>
                            <CardDescription>
                                Remplissez ce formulaire pour prendre contact.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                                        <Input id="firstname" placeholder="Votre prénom" {...register("firstname", { required: true })} />
                                        {errors.firstname && <span className="text-xs text-red-500">Requis</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                                        <Input id="lastname" placeholder="Votre nom" {...register("lastname", { required: true })} />
                                        {errors.lastname && <span className="text-xs text-red-500">Requis</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="votre@email.com" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    {errors.email && <span className="text-xs text-red-500">Email valide requis</span>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Objet</label>
                                    <Input id="subject" placeholder="Soutien scolaire, préparation concours..." {...register("subject", { required: true })} />
                                    {errors.subject && <span className="text-xs text-red-500">Requis</span>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" className="min-h-[150px]" placeholder="Détaillez votre demande..." {...register("message", { required: true })} />
                                    {errors.message && <span className="text-xs text-red-500">Requis</span>}
                                </div>

                                <Button type="submit" className="w-full h-12 text-base gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? "Envoi..." : (
                                        <>
                                            Envoyer le message <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
