"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Instagram, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/about" },
  { name: "Nos tarifs", href: "/rates" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white/50 backdrop-blur-sm border-transparent"}`}>
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Logo Maman Bille-en-Tête"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl tracking-tight text-slate-800 leading-none">
                Maman Bille-en-Tête
              </span>
              <span className="font-serif text-slate-500 font-medium italic text-sm leading-tight mt-0.5">
                Accompagnement Scolaire
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex gap-8 items-center justify-center flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-sans text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:text-slate-700 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA - Right */}
        <div className="hidden md:flex flex-1 justify-end gap-4">
          <Link href="https://www.instagram.com/maman_billeentete/" target="_blank" className="p-2 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full transition-all">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.youtube.com/@MamanBille-en-tete" target="_blank" className="p-2 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-full transition-all">
            <Youtube className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8 font-sans">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Separator />
                <Button asChild className="w-full rounded-full">
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
