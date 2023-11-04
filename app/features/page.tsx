import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {FeaturesSection} from "@/components/Features";
import {AllFeatures} from "@/components/AllFeatures";

export default function Features() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center mx-auto md:mx-20">
            <>
                <Head>
                    <title>
                        Proxima | Features
                    </title>
                </Head>

                <div className="page-wrapper">
                    <main className="main-wrapper">
                        <header className="py-20 section-header">
                            <div className="padding-global">
                                <div className="container-large">
                                    <div className="padding-section-medium">
                                        <div data-w-id="c5245d6e-ecdb-c162-27fe-fe3cd010b355" className="flex flex-row py-10 w-96 md:w-auto h-96 md:h-auto items-center justify-center space-x-5">

                                            <div className="items-start mr-0">
                                                <div  className="">
                                                    <h1 className="text-6xl font-bold text-center md:w-[35rem]">Seamless interaction with your audience.</h1>
                                                    <div className="padding-bottom padding-small"></div>
                                                    <p className="my-4 w-96 md:w-[35rem] text-center md:text-start">We empower your audience to engage effortlessly with a feature-rich iframe seamlessly integrated into your website's content. By seamlessly embedding a versatile iframe, we provide a seamless gateway for your visitors to interact with a wide array of dynamic features, enhancing their overall browsing experience on your site.</p>


                                                </div>
                                            </div>
                                            <div className="hidden md:block pt-10">
                                                <Image src="/iframe.png" width={350} height={100} alt="iframe image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/*<Home />*/}
                        {/*<Companies />*/}
                        <AllFeatures />

                        {/*<TrackUser />*/}
                    </main>
                </div>
            </>
        </section>
    )
}