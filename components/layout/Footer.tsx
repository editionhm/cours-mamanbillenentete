import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full py-6 bg-muted/30 border-t">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                    <div className="relative h-8 w-8 overflow-hidden rounded-md hidden md:block">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo Maman Bille-en-Tête"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p>&copy; {new Date().getFullYear()} Les cours de Maman Bille-en-Tête.</p>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com" target="_blank" className="hover:text-primary transition-colors">Instagram</Link>
                        <Link href="https://www.youtube.com" target="_blank" className="hover:text-primary transition-colors">YouTube</Link>
                    </div>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                    <Link className="text-sm hover:underline underline-offset-4" href="/about">
                        A Propos
                    </Link>
                    <Link className="text-sm hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
