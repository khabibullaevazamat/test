import React from "react";

import { HeroSection } from "@/components/hero-section";
// import { About } from "@/components/about";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

const testimonials = [
    {
        quote: "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
        name: "Rose Roberson",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
        quote: "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
        quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
        quote: "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
        quote: "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
        name: "Chace Rodgers",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
        quote: "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
        name: "Cornelius Sheppard",
        role: "CEO at Company",
        imgSrc: "https://i.pravatar.cc/120?img=3",
    },
];

function Home() {
    return (
        <>
            <HeroSection />
            {/* <About /> */}
            <Testimonials testimonials={testimonials} />
            <Pricing />
            <Contact />
        </>
    );
}

export default Home;
