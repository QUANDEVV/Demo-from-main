"use client";
import { Features } from '@/components/products/features';
import React, {useState} from 'react';
import Pricing from "@/components/products/pricing";

export default function Products() {
    const [openTab, setOpenTab] = useState(0);

    // const handleTabClick = (index: number) => {
    //     setActiveTab(index);
    // }

    return (
        <>
            <div className="flex flex-wrap mx-20">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-primary"
                                        : "text-primary bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                API as a Service (AaaS)
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-primary"
                                        : "text-primary bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Virtual Call Centers (VCC)
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-primary"
                                        : "text-primary bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Mobile Apps (MA)
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Features />
                                    <Pricing />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <Features />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <Features />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}