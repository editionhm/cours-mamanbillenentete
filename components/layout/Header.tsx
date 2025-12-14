"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "A Propos", href: "/about" },
  { name: "Nos tarifs", href: "/rates" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src="/images/logo.jpg"
              alt="Logo Maman Bille-en-Tête"
              fill
              className="object-cover"
            />
          </div>
          <span>Les cours de Maman Bille-en-Tête<span className="text-primary text-2xl">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button asChild className="rounded-full px-6 font-medium shadow-sm hover:shadow-md transition-all">
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary">Accueil</Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary">A Propos</Link>
                <Link href="/rates" className="text-lg font-medium hover:text-primary">Nos tarifs</Link>
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
