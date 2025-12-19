import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, Laptop, Sparkles, User, Heart, BookOpen } from "lucide-react"
import { HeroCarousel } from "@/components/HeroCarousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-secondary/5 via-background to-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <span className="block w-full text-center text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-slate-500 animate-in fade-in slide-in-from-bottom-4 duration-700">
                L'excellence scolaire par la bienveillance
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 dark:text-slate-100 font-sans leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 italic relative inline-block">
                  Maman <br /> Bille-en-Tête
                </span>
              </h1>
              <p className="max-w-xl text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-serif text-center">
                Bienvenue dans un espace dédié à la réussite et à l'épanouissement scolaire de votre enfant.
                Nous allions <strong>rigueur académique</strong> et <strong>approche bienveillante</strong> pour révéler le potentiel de chaque élève.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all bg-white text-slate-900 border-2 border-slate-200 hover:border-pink-200 hover:bg-pink-50">
                  <Link href="/rates">
                    Découvrir nos offres
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none hover:opacity-90 ring-offset-2 focus:ring-2 ring-pink-200">
                  <Link href="/contact">
                    Contact
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Carousel */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full block animate-in fade-in slide-in-from-right-8 duration-1000">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* A Propos Section */}
      <section id="about" className="w-full py-16 bg-slate-50/50 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-2">À PROPOS</span>
            <h2 className="text-3xl font-bold tracking-widest uppercase md:text-4xl text-slate-900 font-sans">EXPERTISE</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Mon Parcours */}
            <Card className="border-none shadow-lg bg-white h-full rounded-2xl hover:shadow-xl transition-all duration-300 ring-1 ring-slate-100">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-8 pt-8 px-8">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-pink-600">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl font-sans text-slate-800">Mon parcours</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-6 space-y-6">
                <p className="text-xl font-medium text-slate-700 font-serif leading-relaxed">
                  Je suis enseignante certifiée en Lettres Modernes depuis 14 ans.
                </p>
                <ul className="space-y-4">
                  {[
                    "Enseignante en Collège et Lycée",
                    "Formatrice académique (PAF)",
                    "Membre de jurys de concours (CRPE, CAPES)",
                    "Expertise en pédagogie différenciée"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600 font-serif text-lg">
                      <div className="mt-1 p-1 bg-green-100 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mes Expertises - Removed Ateliers Maternelle */}
            {/* Mes Expertises - Split into 2 cards for balance */}
            <div className="grid gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden group bg-white ring-1 ring-slate-100">
                <CardHeader className="px-8 pt-8 pb-4">
                  <CardTitle className="text-2xl flex items-center gap-4 font-sans text-slate-800">
                    <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    Français & Littérature
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-slate-600 font-serif text-lg leading-relaxed text-left">
                    Spécialiste du niveau classe primaire jusqu'aux études supérieures.
                    Remise à niveau et perfectionnement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden group bg-white ring-1 ring-slate-100">
                <CardHeader className="px-8 pt-8 pb-4">
                  <CardTitle className="text-2xl flex items-center gap-4 font-sans text-slate-800">
                    <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    Concours & Examens
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-slate-600 font-serif text-lg leading-relaxed text-left">
                    Préparation intensive : Brevet, Bac de Français, CRPE, CAPES.
                    Méthodologie et gestion du stress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogie Section */}
      <section className="w-full pt-16 pb-8 bg-white relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-2 block">NOTRE APPROCHE</span>
            <h2 className="text-3xl font-bold tracking-widest uppercase md:text-4xl mb-10 font-sans text-slate-900">UNE PÉDAGOGIE SUR MESURE</h2>
            <blockquote className="relative p-8 text-xl md:text-2xl italic font-serif text-slate-700 leading-relaxed bg-slate-50 rounded-3xl border border-slate-100">
              "L'équipe de Maman Bille-en-Tête ne se contente pas de dispenser des cours, elle transmet une <span className="text-pink-600 font-semibold">méthode</span>, une <span className="text-pink-600 font-semibold">structure</span>, des outils et une disponibilité même hors cours."
            </blockquote>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Méthodologie & Structure", icon: Sparkles, color: "text-purple-500", desc: "Apprendre à apprendre. Nous donnons les clés pour s'organiser, mémoriser et réussir durablement." },
              { title: "Distanciel & Outils", icon: Laptop, color: "text-pink-500", desc: "Utilisation d'outils numériques modernes pour des cours interactifs et engageants, où que vous soyez." },
              { title: "Ateliers IEF & Familles", icon: User, color: "text-rose-500", desc: "Instruction En Famille : accompagnement complet des familles (supports, programmes, ateliers sur mesure)." }
            ].map((feature, i) => (
              <Card key={i} className="group bg-pink-50/30 border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="p-8 pb-4 flex flex-col items-center text-center">
                  <div className="mb-4 inline-block p-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold font-sans text-slate-800 uppercase tracking-wider">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-2">
                  <p className="text-slate-600 font-serif text-lg leading-relaxed text-center">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container relative px-4 md:px-6 mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-sans text-white">Prêt à révéler le potentiel de votre enfant ?</h2>
          <p className="max-w-2xl mx-auto text-white/90 md:text-2xl font-serif">
            Contactez-nous pour échanger sur vos besoins et définir ensemble le meilleur accompagnement.
          </p>

        </div>
      </section>
    </div>
  )
}
