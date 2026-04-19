"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Youtube, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero / Header Section */}
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
                        Contactez-Maman Bille-en-Tête
                    </h1>
                    <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto font-serif">
                        Une question sur mes offres ? Besoin d'un devis personnalisé ?
                        Je vous réponds avec plaisir.
                    </p>
                </div>
            </section>

            <section className="container px-4 md:px-6 py-16 mx-auto">
                <div className="max-w-3xl mx-auto space-y-12">

                    {/* Main Email CTA Card */}
                    <Card className="border-none shadow-2xl ring-1 ring-slate-100 bg-white rounded-3xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                        <CardContent className="p-10 md:p-14 flex flex-col items-center text-center space-y-8">
                            <div className="p-6 bg-primary/10 rounded-sm mb-2 animate-in zoom-in duration-500">
                                <Mail className="h-16 w-16 text-primary" />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900">
                                    M'envoyer un email
                                </h2>
                                <div className="py-4">
                                    <span className="text-xl md:text-2xl font-bold text-slate-900 font-sans border-b-2 border-primary/30 pb-1">
                                        mamanbilleentete@gmail.com
                                    </span>
                                </div>
                                <p className="text-lg text-slate-600 font-serif font-medium max-w-lg mx-auto leading-relaxed">
                                    Le moyen le plus simple et le plus direct pour échanger sur le profil de votre enfant.
                                </p>
                            </div>

                            <Button asChild size="lg" className="h-[72px] px-14 text-xl font-bold tracking-wide rounded-sm gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-primary hover:bg-primary/90 text-white border-none ring-offset-2 hover:ring-4 ring-primary/30 flex items-center justify-center">
                                <a href="mailto:mamanbilleentete@gmail.com">
                                    <Mail className="h-7 w-7 animate-pulse" />
                                    <span>M'ÉCRIRE MAINTENANT</span>
                                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                                </a>
                            </Button>

                            <p className="text-sm text-slate-400 font-sans tracking-wide uppercase">
                                Réponse sous 48h ouvrées
                            </p>
                        </CardContent>
                    </Card>

                    {/* Secondary Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Location */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl p-6 flex items-center justify-center gap-4 hover:bg-slate-50 transition-colors group">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <div className="text-left">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider">Localisation</span>
                                <span className="text-lg font-serif text-slate-700">En Visio (France entière)</span>
                            </div>
                        </Card>

                        {/* Socials */}
                        <Card className="border-none shadow-lg bg-white rounded-2xl p-6 flex items-center justify-center gap-6">
                            <a
                                href="https://www.instagram.com/maman_billeentete/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-8 w-8" />
                            </a>
                            <a
                                href="https://www.youtube.com/@MamanBille-en-tete"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-8 w-8" />
                            </a>
                            <div className="text-left ml-2">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider">Réseaux</span>
                                <span className="text-lg font-serif text-slate-700">Suivez-moi</span>
                            </div>
                        </Card>
                    </div>

                </div>
            </section>
        </div>
    );
}

