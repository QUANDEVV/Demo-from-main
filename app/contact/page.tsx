import React from 'react';
import Letstalk from "@/components/Contact/Let'sTalk";
import Sidebar from "@/components/Contact/Sidebar";
import Header from "@/components/Contact/header";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>
                    Proxima | ContactUs
                </title>
            </Head>

            <div className="flex flex-col items-center">
                <Header />
                <div className="section-contact">
                    <div className="grid grid-cols-1 xl:grid-cols-2">
                        <Sidebar />
                        <Letstalk />
                    </div>
                </div>
            </div>
        </>
    )
}