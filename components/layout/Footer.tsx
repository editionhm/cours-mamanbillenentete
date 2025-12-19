import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full py-8 bg-slate-50 border-t border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Logo & Copyright */}
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 block">
                            <Image
                                src="/images/logo.jpg"
                                alt="Logo Maman Bille-en-Tête"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p>© {new Date().getFullYear()} Maman Bille-en-Tête</p>
                    </div>

                    {/* Center: Social Icons */}
                    <div className="flex items-center justify-center gap-6">
                        <Link href="https://www.instagram.com/maman_billeentete/" target="_blank" className="p-2 bg-white rounded-full shadow-sm text-pink-600 hover:scale-110 transition-all">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.youtube.com/@MamanBille-en-tete" target="_blank" className="p-2 bg-white rounded-full shadow-sm text-red-600 hover:scale-110 transition-all">
                            <Youtube className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Right: Navigation */}
                    <nav className="flex gap-6">
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/about">
                            À Propos
                        </Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/rates">
                            Tarifs
                        </Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
