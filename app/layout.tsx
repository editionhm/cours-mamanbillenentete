import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Maman Bille-en-Tête",
    default: "Maman Bille-en-Tête | Cours Particuliers, Coaching & Préparation Concours",
  },
  description: "Boostez la réussite de votre enfant avec Maman Bille-en-Tête. Cours de français, méthodologie et préparation aux concours (Brevet, Bac, CRPE, CAPES). Pédagogie bienveillante.",
  keywords: ["Cours particuliers", "Soutien scolaire", "Français", "Préparation Concours", "CRPE", "CAPES", "Brevet", "Bac de Français", "Coaching scolaire", "Maman Bille-en-Tête", "Méthodologie"],
  authors: [{ name: "Maman Bille-en-Tête" }],
  openGraph: {
    title: "Maman Bille-en-Tête | L'Excellence par la Bienveillance",
    description: "Accompagnement scolaire sur-mesure du collège au supérieur.",
    url: "https://maman-bille-en-tete.fr",
    siteName: "Maman Bille-en-Tête",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/images/logo-circle.png",
    shortcut: "/images/logo-circle.png",
    apple: "/images/logo-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontSerif.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-sans`}
      >
        <JsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
