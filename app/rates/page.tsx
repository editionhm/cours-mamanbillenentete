import Link from "next/link"
import { Check, ArrowRight, BookOpen, Users, Sparkles, Clock, Target, Rocket, Trophy, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Pricing Data based on user request
const individualRates = [
    {
        name: "Cours à l'unité",
        price: "35€",
        period: "/heure",
        description: "Pour un besoin ponctuel ou une urgence.",
        icon: Clock,
        features: [
            "Maternelle à Universitaire",
            "Sans engagement",
            "Bilan de fin de séance",
            "Support de cours inclus"
        ],
        action: "Sans engagement",
        highlight: false,
    },
    {
        name: "Forfait 5h",
        price: "150€",
        originalPrice: "175€",
        period: "soit 30€/h",
        description: "L'idéal pour réviser un chapitre ou préparer un examen.",
        icon: Target,
        features: [
            "Économisez 25€",
            "Valable 3 mois",
            "Planning flexible",
            "Supports de révision offerts"
        ],
        action: "Idéal pour réviser",
        highlight: false,
    },
    {
        name: "Forfait 10h",
        price: "290€",
        originalPrice: "350€",
        period: "soit 29€/h",
        description: "Un accompagnement régulier pour progresser sereinement.",
        icon: Rocket,
        features: [
            "Économisez 60€",
            "Valable 6 mois",
            "Suivi personnalisé approfondi",
            "Contact direct WhatsApp"
        ],
        action: "Le plus populaire",
        highlight: true, // Most popular usually
        badge: "Meilleure Offre"
    },
    {
        name: "Forfait 20h",
        price: "510€",
        originalPrice: "700€",
        period: "soit 25,50€/h",
        description: "La solution complète pour une réussite garantie.",
        icon: Trophy,
        features: [
            "Économisez 190€ !",
            "Valable 1 an",
            "Suivi complet et coaching",
            "Priorité sur le planning"
        ],
        action: "Suivi Premium",
        highlight: false,
    }
]

const groupRate = {
    name: "Classe de 4 élèves",
    price: "15€",
    period: "/h par élève",
    description: "Apprendre ensemble, s'entraider et progresser.",
    features: [
        "Petits groupes (4 max)",
        "Dynamique de groupe positive",
        "Exercices ludiques et interactifs",
        "Entraide & Motivation"
    ],
    action: "Places limitées"
}

export default function RatesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="container py-24 md:py-32 px-4 mx-auto space-y-20">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <Badge className="mb-4 px-4 py-1 text-sm bg-pink-100 text-pink-700 hover:bg-pink-200 border-none transition-all">
                        Tarifs 2025-2026
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-sans text-slate-900 uppercase">
                        NOS TARIFS <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">ADAPTÉS</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-2xl mx-auto">
                        De la Maternelle à l'Universitaire. <br />
                        Investissez dans la réussite avec des formules flexibles et accessibles.
                    </p>
                </div>

                {/* Individual Rates Section */}
                <div className="space-y-12">
                    <div className="flex flex-col items-center gap-4 justify-center text-center">
                        <div className="p-3 bg-pink-50 rounded-2xl">
                            <Sparkles className="w-8 h-8 text-pink-600" />
                        </div>
                        <h2 className="text-3xl font-bold font-sans text-slate-800 uppercase tracking-widest">
                            Cours Particuliers
                        </h2>
                        <p className="text-slate-500 font-serif">En ligne (Google Classroom)</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
                        {individualRates.map((offer) => (
                            <Card key={offer.name} className={`flex flex-col relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden border-slate-100 ${offer.highlight ? 'bg-slate-900 text-white shadow-xl scale-105 z-10 ring-4 ring-pink-500/20' : 'bg-white hover:border-pink-200'}`}>
                                {offer.highlight && (
                                    <>
                                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-pink-500 to-purple-600" />
                                        <div className="absolute top-4 right-4 animate-pulse">
                                            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none shadow-lg px-3 py-1">
                                                <ThumbsUp className="w-3 h-3 mr-1" />
                                                Bonne Opportunité
                                            </Badge>
                                        </div>
                                    </>
                                )}
                                <CardHeader className="p-8 pb-4 text-center">
                                    <div className={`mx-auto mb-4 p-3 rounded-2xl inline-block ${offer.highlight ? 'bg-white/10' : 'bg-slate-100'}`}>
                                        <offer.icon className={`w-8 h-8 ${offer.highlight ? 'text-white' : 'text-slate-700'}`} />
                                    </div>
                                    <CardTitle className={`text-xl font-bold font-sans ${offer.highlight ? 'text-white' : 'text-slate-800'}`}>
                                        {offer.name}
                                    </CardTitle>
                                    <CardDescription className={`text-sm font-serif mt-2 ${offer.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                                        {offer.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 p-8 pt-2">
                                    <div className="flex flex-col mb-8 items-center text-center">
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-4xl font-extrabold font-sans ${offer.highlight ? 'text-white' : 'text-pink-600'}`}>{offer.price}</span>
                                        </div>
                                        <div className="flex flex-col text-sm mt-1">
                                            {offer.originalPrice && (
                                                <span className={`${offer.highlight ? 'text-slate-400' : 'text-slate-400'} line-through`}>
                                                    au lieu de {offer.originalPrice}
                                                </span>
                                            )}
                                            <span className={`${offer.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                                                {offer.period}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {offer.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm">
                                                <div className={`p-1 rounded-full mt-0.5 shrink-0 ${offer.highlight ? 'bg-white/20' : 'bg-pink-50'}`}>
                                                    <Check className={`h-3 w-3 ${offer.highlight ? 'text-white' : 'text-pink-600'}`} />
                                                </div>
                                                <span className={`font-serif leading-tight text-left ${offer.highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-0">
                                    <div className={`w-full rounded-full py-2.5 text-center text-sm font-bold tracking-wide transition-all border ${offer.highlight
                                        ? "bg-white/10 text-white border-white/20"
                                        : "bg-slate-50 text-slate-600 border-slate-100"
                                        }`}>
                                        {offer.action}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Group Rate Section */}
                <div className="max-w-4xl mx-auto mt-20">
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none shadow-lg overflow-hidden rounded-3xl relative">
                        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Badge className="bg-purple-600 text-white border-none mb-2">Cours Collectifs</Badge>
                                    <h3 className="text-3xl font-bold font-sans text-slate-800 uppercase tracking-wide">
                                        {groupRate.name}
                                    </h3>
                                    <p className="text-lg text-slate-600 font-serif">
                                        {groupRate.description}
                                    </p>
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {groupRate.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-purple-600" />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center space-y-6">
                                <div>
                                    <span className="text-5xl font-extrabold text-purple-600 block mb-1">{groupRate.price}</span>
                                    <span className="text-slate-500 font-serif">{groupRate.period}</span>
                                </div>
                                <div className="w-full rounded-full py-3 text-center text-lg font-bold bg-purple-50 text-purple-700">
                                    {groupRate.action}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white space-y-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold font-sans mb-4">Une question sur nos tarifs ?</h3>
                        <p className="text-slate-300 font-serif text-lg mb-8 max-w-2xl mx-auto">
                            N'hésitez pas à nous contacter pour établir un devis personnalisé ou pour discuter de la formule la plus adaptée à votre enfant.
                        </p>
                        <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-8 h-14 text-lg">
                            <Link href="/contact">Me contacter</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
