"use client";
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Head from "next/head";
import {FaCheckCircle} from "react-icons/fa";
import Link from "next/link";

interface Price {
    amount: number;
    quota: {
        name: string;
    }
}

export default function Pricing() {
    const [plans, setPlans] = useState([]);
    const [prices, setPrices] = useState([])
    const [selectedDuration, setSelectedDuration] = useState('Monthly');


    const freePlan = {name: "30 Days Free-Trial",
        features: [
            {
                "name": "Community",
                "description": "Community"
            },
            {
                "name": "Survey",
                "description": "survey"
            },
            {
                "name": "Virtual assistant",
                "description": "virtual assistant"
            },
            {
                "name": "Work Assistants",
                "description": "Work Assistants"
            },
            {
                "name": "Descriptive analytics",
                "description": "Descriptive analytics"
            },
            {
                "name": "Predictive analytics",
                "description": "Predictive analytics"
            },
            {
                "name": "Website Iframe",
                "description": "Website Iframe"
            },
            {
                "name": "Chrome extension visibility",
                "description": "Chrome extension visibility"
            },
            {
                "name": "Predictive analytics",
                "description": "24/7 support. (Phone, Email, Chat)"
            }
        ],
        prices: [{quota: {name: "Free"}, amount: 0}]}

    const combinedPlans = [freePlan, ...plans];

    const filteredPlans = combinedPlans.filter(plan =>
        plan.prices.some((price: { quota: { name: any; }; }) => price.quota.name === selectedDuration) || plan.name === "Free"
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        const fetchPlans = async () => {
            try {
                const res = await axios.get("https://core.proximaai.co/api/payments/tiers/");
                const data = res.data.results;
                setPlans(data);
                setPrices(data[0].prices);
            } catch (error) {
                console.error("Error fetching plans:", error);
            }
        };

        fetchPlans()
    }, [])

    // @ts-ignore
    return (
        <div className="page-wrapper h-auto md:w-[100vw] flex flex-col">
            <Head>
                <title>
                    Proxima | Pricing
                </title>
            </Head>
            <header className="section-header">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-medium">
                            <div data-w-id="c5245d6e-ecdb-c162-27fe-fe3cd010b355" className="header-component is-features">
                                <div className="text-align-center">
                                    <div data-w-id="c5245d6e-ecdb-c162-27fe-fe3cd010b357"
                                         style={{WebkitTransform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                             OTransform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                             msTransform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                             transform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",}} className="max-width-large">
                                        <h1 className="text-6xl font-bold text-center my-4">Select your plan</h1>
                                        <div className="padding-bottom padding-small"></div>
                                        <p className="text-size-medium"></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*    Plans */}
            <div className="flex flex-col">
                <div className=" h-auto flex flex-col justify-around items-center w-screen space-x-5 mx-auto">
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                        {prices.map((price: Price, index: React.Key | null | undefined) => (

                            <div key={index} className="flex">
                                <div className="">
                                    <div
                                        onClick={() => setSelectedDuration(price?.quota.name)}
                                        className={`text-size-medium font-bold px-6 py-3 border-2 md:w-40 ${
                                            selectedDuration === price?.quota.name
                                                ? 'border-primary text-white bg-primary'
                                                : 'border-gray-300 text-gray-600 bg-white hover:text-black hover:bg-gray-100'
                                        } cursor-pointer rounded-md transform hover:scale-105 duration-300 ease-in`}
                                    >
                                        {price?.quota?.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/*    Plans */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-10 mx-20 gap-10">
                        {combinedPlans.map((plan, index) => (
                            <div key={index} className="h-auto border rounded-md w-72 md:w-96 p-4 flex flex-col justify-between">
                                <h1 className="text-2xl border-b-[1px] text-center py-2">{plan.name}</h1>

                                {/* Plan features */}
                                <div className="flex flex-col space-y-2 my-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex space-x-3">
                                            <FaCheckCircle className="text-[#2DABB1] text-2xl" />
                                            <p className="text-sm">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Plan prices */}
                                <div className="flex flex-col space-y-2">
                                    {plan.prices.map((price, priceIndex) => {
                                        if (price.quota.name === selectedDuration) {
                                            return (
                                                <div key={priceIndex} className="flex justify-center items-center space-x-2 my-4">
                                                    <h1 className="text-2xl font-bold">$</h1>
                                                    <h1 className="text-4xl font-bold">{price.amount}</h1>
                                                    <p className="text-sm">/{price.quota.name.toLowerCase()}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                <button className="h-12 border-2 border-primary bg-[#2DABB1] text-white font-[800] rounded-lg">
                                    <Link href="https://app.proximaai.co/auth/onboarding/details">Select Plan</Link>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}