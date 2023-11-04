import React from 'react'
import {AboutSection} from "@/components/About";

export default function About() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center mx-10 md:mx-20">
            <AboutSection />
        </section>
    )
}