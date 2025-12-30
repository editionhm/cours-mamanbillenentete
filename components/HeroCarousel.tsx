"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const carouselImages = [
    {
        src: "/images/citation.png",
        alt: "L'excellence scolaire",
        fit: "cover", // Special case for text image
    },
    {
        src: "/images/carousel-4.jpg",
        alt: "Livres et apprentissage",
        fit: "cover",
    },
    {
        src: "/images/carousel-1.png",
        alt: "Accompagnement scolaire personnalisé",
        fit: "cover",
    },
    {
        src: "/images/carousel-3.png",
        alt: "Réussite éducative",
        fit: "cover",
    },
]

export function HeroCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[500px] group relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-100 border-2 border-red-500">
            <Image
                src="/images/carousel-4.jpg"
                alt="Test Image"
                fill
                className="object-cover"
                priority
                unoptimized
            />
        </div>
    )
}
