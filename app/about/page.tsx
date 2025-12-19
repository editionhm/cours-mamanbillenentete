import { Badge } from "@/components/ui/badge"
import { GraduationCap, Sparkles, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50/50">
            <div className="container py-24 md:py-32 space-y-16 max-w-5xl mx-auto px-4">
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-widest font-sans text-slate-900 sm:text-5xl mb-6 uppercase">
                        À PROPOS DE <br />
                        Maman Bille-en-Tête
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-serif leading-relaxed">
                        Enseignante, Formatrice et Coach scolaire. <br />
                        <span className="text-primary font-semibold">14 ans d'expertise</span> au service de votre réussite.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-10">
                        <section className="space-y-6 bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-100">
                            <h2 className="text-2xl font-bold font-sans text-slate-800 flex flex-col items-center gap-4 uppercase tracking-wider text-center">
                                <span className="p-3 bg-primary/10 rounded-2xl text-primary mb-1">
                                    <GraduationCap className="h-8 w-8" />
                                </span>
                                Mon Parcours
                            </h2>
                            <div className="prose prose-slate dark:prose-invert space-y-4 text-slate-600 font-serif">
                                <p className="text-lg leading-relaxed text-justify">
                                    Je suis enseignante certifiée en <strong className="text-primary font-sans">Lettres Modernes depuis 14 ans</strong>. Mon parcours est riche et varié, me permettant de m'adapter et de répondre aux besoins de chaque apprenant.
                                </p>
                                <ul className="space-y-3 list-disc pl-5">
                                    {[
                                        "Formatrice au PAF (Plan Académique de Formation)",
                                        "Formatrice et Correctrice pour les futurs enseignants (CRPE)",
                                        "Tutrice pour les stagiaires enseignants",
                                        "Coach pour la préparation aux examens (DNB, CRPE, CAPES)"
                                    ].map((item, i) => (
                                        <li key={i} className="text-lg">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-6 bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-100">
                            <h2 className="text-2xl font-bold font-sans text-slate-800 flex flex-col items-center gap-4 uppercase tracking-wider text-center">
                                <span className="p-3 bg-secondary/10 rounded-2xl text-secondary mb-1">
                                    <Sparkles className="h-8 w-8" />
                                </span>
                                Ma Méthodologie
                            </h2>
                            <div className="prose prose-slate dark:prose-invert space-y-4 text-slate-600 font-serif">
                                <p className="text-lg leading-relaxed">
                                    Je base mon enseignement sur la <strong className="text-slate-800 font-sans">rigueur</strong> et la clarté. Je m'appuie sur les exigences officielles et les <strong>rapports de jury</strong> pour préparer mes élèves.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Pour les plus jeunes, je propose des <strong>approches concrètes</strong> pour rendre l'apprentissage vivant. Pour tous, j'intègre le <strong>multimédia</strong> (podcasts, Canva, capsules vidéo) pour rendre les cours dynamiques et modernes.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8 sticky top-24">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl rotate-2 transition-transform hover:rotate-0 border-[6px] border-white ring-1 ring-slate-100 dark:border-slate-800">
                            {/* Fallback pattern if image is missing, or actual image */}
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Maman Bille-en-Tête Profile"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-xl mb-6 font-sans text-slate-800 flex flex-col items-center gap-4 uppercase tracking-wide text-center">
                                <span className="p-3 bg-orange-50 rounded-2xl text-orange-500 mb-1">
                                    <Award className="h-8 w-8" />
                                </span>
                                DOMAINES D'EXPERTISE
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border-2 border-primary hover:bg-primary/20 hover:text-primary transition-colors">Lettres Modernes</Badge>
                                <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">Coaching CRPE/CAPES</Badge>
                                <Badge variant="outline" className="px-4 py-2 text-sm rounded-full border-slate-200 text-slate-600">Pédagogie Active</Badge>
                                <Badge variant="outline" className="px-4 py-2 text-sm rounded-full border-slate-200 text-slate-600">Préparation DNB/BAC</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
