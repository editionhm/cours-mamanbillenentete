import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle2, Heart, Lightbulb, Clock, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Accompagnement IEF",
  description: "Accompagnement bienveillant et structuré pour l'Instruction En Famille (IEF). Clarification de projet, préparation de dossiers et RAPO.",
}

export default function IEFPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Instruction en Famille
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
                Accompagnement IEF bienveillant et structuré
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-slate-700 font-serif leading-relaxed">
                <p>
                  Je suis maman IEF et coach spécialisée dans l'accompagnement des familles qui choisissent l'instruction en famille.
                </p>
                <p>
                  Ensemble, nous clarifions votre projet éducatif, structurons votre année et préparons sereinement vos dossiers et inspections afin que vous restiez centrés sur l'essentiel : <strong className="text-primary font-semibold">le plaisir d'apprendre</strong>.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6">
                <h3 className="text-xl font-bold text-slate-800 font-sans mb-4">Un accompagnement adapté à chaque étape</h3>
                <p className="text-slate-600 font-serif leading-relaxed">
                  Que vous soyez au début de votre réflexion, en train de constituer votre dossier ou face à un refus, je vous propose des formules adaptées à votre besoin.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[400px] lg:h-[550px] block animate-in fade-in slide-in-from-right-8 duration-1000 shadow-xl rounded-3xl overflow-hidden ring-1 ring-slate-100">
              <Image
                src="/images/ief-binders.png"
                alt="Classeurs IEF - Projet Éducatif, Projet Pédagogique, Ressources"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formules Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-slate-900 font-sans mb-4">Mes Formules d'Accompagnement</h2>
            <p className="text-xl text-slate-600 font-serif">Choisissez la formule qui vous correspond pour avancer sereinement.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
            
            {/* Formule 1 */}
            <Card className="flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl ring-1 ring-slate-100 bg-white">
              <CardHeader className="bg-secondary/20 pb-6 pt-8 rounded-t-2xl">
                <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Formule 1</span>
                <CardTitle className="text-2xl font-sans text-slate-800">Relecture du projet éducatif</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
                  30 €
                </div>
                <p className="text-sm text-slate-600 font-medium mt-2 bg-white/60 p-2 rounded-lg text-center">Objectif : améliorer votre projet en autonomie.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-8 px-6 pb-8">
                <ul className="space-y-4">
                  {[
                    "Relecture complète",
                    "Analyse des points forts et axes d’amélioration",
                    "Retour vocal détaillé"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-8">
                <Button asChild className="w-full h-12 rounded-xl text-md font-semibold bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact?sujet=Formule 1 IEF">Choisir cette formule</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Formule 2 */}
            <Card className="flex flex-col border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl ring-2 ring-primary/20 bg-white relative scale-100 lg:scale-105 z-10">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-md">
                Populaire
              </div>
              <CardHeader className="bg-primary/5 pb-6 pt-8 rounded-t-2xl">
                <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Formule 2</span>
                <CardTitle className="text-2xl font-sans text-slate-800">Accompagnement personnalisé</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
                  60 €
                </div>
                <p className="text-sm text-primary-foreground font-medium mt-2 bg-primary p-2 rounded-lg text-center">Objectif : structurer un dossier solide et cohérent.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-8 px-6 pb-8">
                <ul className="space-y-4">
                  {[
                    "1 visio ou appel d’1 heure",
                    "Analyse de votre situation",
                    "Proposition d’un plan adapté",
                    "Guidance sur les parties et contenus à rédiger",
                    "Disponibilité pour répondre à vos questions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-8">
                <Button asChild className="w-full h-12 rounded-xl text-md font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg">
                  <Link href="/contact?sujet=Formule 2 IEF">Choisir cette formule</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Formule 3 */}
            <Card className="flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl ring-1 ring-slate-100 bg-white">
              <CardHeader className="bg-secondary/20 pb-6 pt-8 rounded-t-2xl">
                <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">Formule 3</span>
                <CardTitle className="text-2xl font-sans text-slate-800">Accompagnement premium</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
                  120 €
                </div>
                <p className="text-sm text-slate-600 font-medium mt-2 bg-white/60 p-2 rounded-lg text-center">Objectif : un dossier complet, prêt à être envoyé.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-8 px-6 pb-8">
                <ul className="space-y-4">
                  {[
                    "2 visios ou appels",
                    "Accompagnement approfondi",
                    "Rédaction, relecture et restructuration du dossier",
                    "Travail de fond sur votre projet",
                    "Prise en charge des finitions",
                    "Disponibilité continue via WhatsApp"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-8">
                <Button asChild variant="outline" className="w-full h-12 rounded-xl text-md font-semibold border-2 border-primary/20 text-slate-800 hover:bg-primary/5 hover:text-primary">
                  <Link href="/contact?sujet=Formule 3 IEF">Choisir cette formule</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Formule 4 (RAPO) */}
            <Card className="flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl ring-1 ring-slate-100 bg-white md:col-span-1 lg:col-start-1 lg:col-span-1">
              <CardHeader className="bg-slate-50 pb-6 pt-8 rounded-t-2xl">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 block">Formule 4</span>
                <CardTitle className="text-2xl font-sans text-slate-800">Rédaction du RAPO</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
                  45 €
                </div>
                <p className="text-sm text-slate-600 font-medium mt-2 bg-white p-2 rounded-lg text-center">Objectif : défendre votre demande efficacement.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-8 px-6 pb-8">
                <ul className="space-y-4">
                  {[
                    "Rédaction complète du recours",
                    "Structuration claire et arguments adaptés"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                      <ShieldCheck className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-8">
                <Button asChild variant="outline" className="w-full h-12 rounded-xl text-md font-semibold">
                  <Link href="/contact?sujet=Formule 4 IEF RAPO">Choisir</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Formule 5 (RAPO + Projet) */}
            <Card className="flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl ring-1 ring-slate-100 bg-white md:col-span-2 lg:col-span-2">
              <CardHeader className="bg-slate-800 text-white pb-6 pt-8 rounded-t-2xl">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2 block">Formule 5</span>
                <CardTitle className="text-2xl font-sans text-white">RAPO + projet éducatif</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-white">
                  100 €
                </div>
                <p className="text-sm text-slate-200 font-medium mt-2 bg-slate-900 p-2 rounded-lg text-center">Objectif : un dossier renforcé et cohérent.</p>
              </CardHeader>
              <CardContent className="flex-1 pt-8 px-6 pb-8 bg-slate-50 rounded-b-2xl">
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="space-y-4">
                    {[
                      "Rédaction du RAPO",
                      "Correction et restructuration de votre projet éducatif"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {[
                      "Travail approfondi (notamment pour le motif 4)",
                      "Alignement total des arguments de recours"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-serif">
                        <ShieldCheck className="h-5 w-5 text-slate-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-8 bg-slate-50 rounded-b-2xl relative -mt-4 pt-0 border-none">
                <Button asChild className="w-full h-12 rounded-xl text-md font-semibold bg-slate-800 hover:bg-slate-900 text-white">
                  <Link href="/contact?sujet=Formule 5 IEF RAPO et Projet">Choisir cette formule complète</Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Pourquoi se faire accompagner */}
      <section className="w-full py-20 bg-secondary/30 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900 font-sans mb-6">
                Pourquoi se faire accompagner ?
              </h2>
              <p className="text-xl text-slate-700 font-serif mb-8 leading-relaxed">
                Les démarches IEF demandent rigueur et clarté. Être accompagné(e), c'est s'assurer d'avoir un dossier solide et de se concentrer sur l'essentiel.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Clock, text: "Gagner du temps précieux" },
                  { icon: ShieldCheck, text: "Éviter les erreurs classiques" },
                  { icon: Lightbulb, text: "Mieux comprendre les attentes de l'administration" },
                  { icon: Heart, text: "Augmenter vos chances d'acceptation" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm ring-1 ring-slate-100">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-serif font-medium text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl ring-1 ring-slate-100 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 -mr-8 -mt-8 bg-secondary/50 rounded-full opacity-50 blur-3xl"></div>
               <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 font-sans mb-4">Prêt(e) à vous lancer ?</h3>
                <p className="text-lg text-slate-600 font-serif mb-8">
                  Choisissez la formule qui vous correspond et avancez sereinement dans votre projet d'instruction en famille.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all bg-primary text-primary-foreground border-none hover:bg-primary/90 focus:ring-2 ring-primary/20 ring-offset-2">
                  <Link href="/contact">
                    Me contacter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
