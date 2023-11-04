import React from 'react'
import Image from 'next/image'
import Link from "next/link";

export function FeaturesSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center mx-10 md:mx-20">
            <div className="">
                <div className="">
                    <div className="">
                        <div
                            className="flex flex-col md:flex-row py-10 h-auto items-center justify-center md:space-x-5">

                            <div className="items-start flex-1 md:mr-20 mx-20">
                                <div className="">
                                    <h1 className="text-6xl font-bold">Boost your interaction with ProximaAI</h1>
                                    <div className="padding-bottom padding-small"></div>
                                    <p className="my-4">Connecting Organizations Brands Groups to their Customers
                                        Through Interaction & Inclusivity</p>

                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-white border-[#2DDABB1] border-2 my-4 rounded-lg px-4 py-3 hover:bg-[#2DABB1] hover:text-white transform hover:scale-105 ease-in-out duration-500">
                                            <Link href="/features" className="text-sm">Explore all features</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-10 pt-10">
                                <Image src="/images/features.jpeg" className="rounded-md" width={150} height={100} alt="iframe image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}