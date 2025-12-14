import Link from "next/link"
import { Check, ArrowRight, BookOpen, GraduationCap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const schoolOffers = [
    {
        name: "Maternelle - Primaire",
        price: "Sur devis",
        description: "Ateliers de manipulation et bases fondamentales.",
        features: ["Lecture et Écriture", "Ateliers ludiques", "Méthode Montessori & Classique", "Suivi personnalisé"],
        action: "Me contacter",
    },
    {
        name: "Collège - Lycée",
        price: "35€",
        unit: "/h",
        description: "Soutien en Français et Méthodologie pure.",
        features: ["Préparation au Brevet des Collèges", "Préparation au Bac de Français", "Commentaire & Dissertation", "Grammaire & Orthographe"],
        action: "Réserver",
        highlight: true
    },
]

const examOffers = [
    {
        name: "Coaching CRPE & CAPES",
        price: "Forfaits",
        description: "Préparation intensive aux concours de l'enseignement.",
        features: ["Correction de dossiers", "Oraux blancs", "Méthodologie didactique", "Analyse de rapports de jury"],
        action: "Voir les forfaits",
        highlight: true
    },
    {
        name: "Coaching DNB & BAC",
        price: "Forfaits",
        description: "Stages intensifs de révision.",
        features: ["Fiches de révision", "Entraînement sur sujets types", "Gestion du stress", "Planning de révision"],
        action: "En savoir plus",
    },
]

export default function RatesPage() {
    return (
        <div className="container py-12 md:py-24 px-4 mx-auto space-y-20">

            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Mes Offres d'Accompagnement</h1>
                <p className="text-xl text-muted-foreground">
                    De la maternelle aux concours de l'enseignement. Une expertise ciblée pour chaque étape.
                </p>
            </div>

            {/* Section 1: Scolaire */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 justify-center">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold">Accompagnement Scolaire</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {schoolOffers.map((offer) => (
                        <Card key={offer.name} className={`flex flex-col relative transition-all hover:shadow-xl ${offer.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                            <CardHeader>
                                <CardTitle className="text-2xl">{offer.name}</CardTitle>
                                <CardDescription>{offer.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex items-baseline mb-6">
                                    <span className="text-3xl font-bold">{offer.price}</span>
                                    {offer.unit && <span className="text-muted-foreground ml-1">{offer.unit}</span>}
                                </div>
                                <ul className="space-y-3">
                                    {offer.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={offer.highlight ? "default" : "outline"}>
                                    {offer.action} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Section 2: Concours */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold">Coaching Concours & Examens</h2>
                </div>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    Une préparation basée sur les exigences réelles des concours et mon expérience de formatrice/correctrice.
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {examOffers.map((offer) => (
                        <Card key={offer.name} className={`flex flex-col relative transition-all hover:shadow-xl ${offer.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                            {offer.highlight && (
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gap-1 px-3 py-1">
                                    <Star className="h-3 w-3 fill-current" />
                                    Expertise
                                </Badge>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{offer.name}</CardTitle>
                                <CardDescription>{offer.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex items-baseline mb-6">
                                    <span className="text-3xl font-bold">{offer.price}</span>
                                </div>
                                <ul className="space-y-3">
                                    {offer.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={offer.highlight ? "default" : "outline"}>
                                    {offer.action} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}
