export const metadata = {
    // description: "Phytovolt is a bioenergy company that uses algae to produce sustainable energy.",
    icons: {
        icon: '/favicon.ico', // Default favicon
        shortcut: '/favicon-16x16.png', // Shortcut icon (optional)
        apple: '/logo-extention.jpg', // Apple touch icon
        other: [
            {
                rel: 'icon',
                url: '/logo-extention.jpg',
                sizes: '32x32',
                type: 'image/jpg',
            },
            {
                rel: 'icon',
                url: '/logo-extention.jpg',
                sizes: '192x192',
                type: 'image/jpg',
            },
            {
                rel: 'icon',
                url: '/logo-extention.jpg',
                sizes: '512x512',
                type: 'image/jpg',
            },
        ],
    },
};

import Hero from "@/components/hero-home";
import AlgaeProblem from "@/components/algae-problem";
import OurSolution from "@/components/our-solution";
import HeroContact from "@/components/hero-contact";

export default function Home() {
    return (
        <>
            <Hero/>
            <AlgaeProblem />
            <OurSolution/>
            {/*<LargeTestimonial />*/}
            {/*<Cta />*/}
            {/* <HeroContact /> */}
        </>
    );
}
