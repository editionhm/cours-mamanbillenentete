export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Maman Bille-en-Tête",
        "url": "https://maman-bille-en-tete.fr",
        "logo": "https://maman-bille-en-tete.fr/images/logo.jpg",
        "sameAs": [
            "https://www.instagram.com/maman_billeentete/",
            "https://www.youtube.com/@MamanBille-en-tete"
        ],
        "description": "Cours particuliers de français, coaching scolaire et préparation aux concours (CRPE, CAPES). Pédagogie bienveillante et exigeante.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
        },
        "offer": {
            "@type": "Offer",
            "price": "35.00",
            "priceCurrency": "EUR",
            "name": "Cours Particulier"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
