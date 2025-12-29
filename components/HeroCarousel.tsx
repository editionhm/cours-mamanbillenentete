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
        <div className="w-full h-full min-h-[400px] lg:min-h-[500px] group relative">
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-100"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-full">
                    {carouselImages.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                            <div className="relative h-full w-full bg-slate-50">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    quality={100}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Navigation Arrows - Visible on hover or always on desktop */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CarouselPrevious className="relative left-0 translate-y-0 h-10 w-10 border-none bg-black/50 hover:bg-black text-white" />
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CarouselNext className="relative right-0 translate-y-0 h-10 w-10 border-none bg-black/50 hover:bg-black text-white" />
                </div>
            </Carousel>
        </div>
    )
}
