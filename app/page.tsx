import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, GraduationCap, ArrowRight, Laptop, BookOpen, Presentation, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Education Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium w-fit">
                Maman Bille-en-Tête
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                L'Excellence Scolaire par la Rigueur & la Méthodologie
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Enseignante Lettres Modernes (14 ans d'expérience), Formatrice PAF et Jury.
                Je vous accompagne de la Maternelle aux Concours (CRPE, CAPES).
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/rates">
                    Découvrir mes offres
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/about">
                    Qui suis-je ?
                  </Link>
                </Button>
              </div>
            </div>
            {/* Conceptual Image / Graphic */}
            {/* Carousel Section */}
            <div className="mx-auto w-full max-w-md lg:order-last flex flex-col items-center justify-center">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    "/images/carousel-1.png",
                    "/images/carousel-2.png",
                    "/images/carousel-3.png"
                  ].map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative aspect-video overflow-hidden rounded-xl border shadow-xl">
                          <Image
                            src={src}
                            alt={`Illustration ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Multimédia • Capsules Vidéo • Ateliers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Une Pédagogie Expert</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Je ne me contente pas de donner des cours. Je transmets une méthode, une structure et des outils modernes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expertise Concours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Correctrice CRPE et préparatrice CAPES. Je connais les attentes précises des jurys.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
              <CardHeader>
                <Presentation className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Rigueur & Méthode</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Une approche structurée pour construire des bases solides, du collège au lycée.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
              <CardHeader>
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Outils Modernes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utilisation de Canva, Podcasts et capsules vidéos pour dynamiser l'apprentissage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ateliers Maternelle</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manipulation et éveil pour les plus jeunes, inspirés par mon expérience de maman et pro.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Rejoignez "Maman Bille-en-Tête"</h2>
          <p className="max-w-[600px] mx-auto text-primary-foreground/90 md:text-lg">
            Que ce soit pour le soutien scolaire ou la réussite d'un concours, mettez toutes les chances de votre côté.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold">
              <Link href="/rates">
                Voir les formules
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-primary-foreground border-primary-foreground md:ml-4 hover:bg-primary-foreground hover:text-primary">
              <Link href="https://www.instagram.com" target="_blank">
                Me suivre sur Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
