import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24 space-y-12 max-w-4xl mx-auto px-4">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Maman Bille-en-Tête</h1>
                <p className="text-xl text-muted-foreground">
                    Enseignante, Formatrice et Coach scolaire. 14 ans d'expertise au service de votre réussite.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Mon Parcours</h2>
                    <div className="prose dark:prose-invert space-y-4 text-muted-foreground">
                        <p>
                            Je suis enseignante certifiée en <strong>Lettres Modernes depuis 14 ans</strong>. Mon parcours est riche et varié, me permettant de comprendre tous les rouages de l'Éducation Nationale.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Formatrice au PAF</strong> (Plan Académique de Formation).</li>
                            <li><strong>Formatrice et Correctrice</strong> pour les futurs enseignants (CRPE).</li>
                            <li><strong>Tutrice</strong> pour les stagiaires enseignants en lettres modernes et classiques.</li>
                            <li>Coach pour la préparation aux examens (DNB, CRPE, CAPES) depuis plus de 5 ans.</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold mt-8">Ma Méthodologie</h2>
                    <div className="prose dark:prose-invert space-y-4 text-muted-foreground">
                        <p>
                            Je base mon enseignement sur la <strong>rigueur</strong> et la clarté. Je m'appuie sur les exigences officielles et les <strong>rapports de jury</strong> pour préparer mes élèves.
                        </p>
                        <p>
                            Pour les plus jeunes, je propose des <strong>ateliers de manipulation</strong> pour rendre l'apprentissage concret. Pour tous, j'intègre le <strong>multimédia</strong> (podcasts, Canva, capsules vidéo) pour rendre les cours dynamiques et modernes.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-xl rotate-3 transition-transform hover:rotate-0 border-4 border-white dark:border-slate-800">
                        <Image
                            src="/images/profile-placeholder.png"
                            alt="Maman Bille-en-Tête Profile"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="bg-muted/50 p-6 rounded-xl border">
                        <h3 className="font-semibold mb-4">Mes Expertises</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="default" className="px-3 py-1">Lettres Modernes</Badge>
                            <Badge variant="default" className="px-3 py-1">Coaching CRPE/CAPES</Badge>
                            <Badge variant="secondary" className="px-3 py-1">Pédagogie Active</Badge>
                            <Badge variant="secondary" className="px-3 py-1">Préparation DNB/BAC</Badge>
                            <Badge variant="outline" className="px-3 py-1">Ateliers Maternelle</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
