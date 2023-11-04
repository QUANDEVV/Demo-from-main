"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook} from "react-icons/fa";

export function Footer() {

    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Features",
            href: "/features"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Contact Us",
            href: "/contact"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "FAQs",
            href: "/faqs"
        },
    ]

    const important_links = [
        {
            name: "Privacy Policy",
            href: "/privacy-policy"
        },
        {
            name: "Terms and Conditions",
            href: "/terms-and-conditions"
        }]

    // @ts-ignore
    return (
        <footer className="bg-secondary w-screen text-white p-10 flex flex-col md:items-start md:justify-evenly">
            <div className="flex flex-col xl:flex-row md:flex-1 w-full justify-between my-10">
                {/*About*/}
                <div className="space-y-3 ">
                    <a>
                        <Image src="/images/logo.png" alt="logo" width={140} height={0}/>
                    </a>
                    <p className="text-sm leading-loose tracking-wider w-full md:w-96 xl:w-[35rem] text-justify">ProximaAi is a company that aims to improve the way
                        organisations interact and relate to their customers. In simple terms improve customer service and
                        experience. We bridge that gap using technology and work on having a clear and consistent
                        communication and feedback loop.
                    </p>
                </div>
                {/*    Quick links */}
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold ml-10 text-start">Quick Links</h3>
                    <ul className="flex flex-col md:flex-row ml-10 md:space-x-5 2xl:space-x-10 space-y-4 md:space-y-0 my-3 justify-evenly">
                        {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={`${link.href}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/*    Social media */}
                <div className="flex flex-col items-start w-full space-x-4  md:space-y-10">
                    <h3 className="text-xl font-bold ml-10">Social Media</h3>
                    <ul className="flex space-x-10 justify-evenly my-5">
                        <li>
                            <a href="https://www.facebook.com/ProximaAI-100105632425622" target="_blank" rel="noreferrer">
                                <FaFacebook className="text-2xl"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/proximaai/" target="_blank" rel="noreferrer">
                                <FaInstagram className="text-2xl"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/proximaai/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="text-2xl"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@proximaai?lang=en" target="_blank" rel="noreferrer">
                                <FaTiktok className="text-2xl"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className="w-full border-white border-opacity-50"/>
           <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
               <div className="flex flex-col items-center w-full space-x-4 justify-between md:space-y-10 my-4">
                   <p className="text-sm font-bold ml-10">&copy; 2023 ProximaAI | All rights reserved.</p>
               </div>

               {/*    Privacy and terms and conditions */}
               <div className="flex flex-col items-start w-full space-x-4 justify-between md:space-y-10 my-4">
                   <ul className="flex justify-center my-5">
                       {important_links.map((link, index) => (
                           <li key={index} className="text-xs">
                               <Link href={`${link.href}`}>
                                   {link.name}
                               </Link>
                               {index < important_links.length - 1 && <span className="mx-1">|</span>}
                           </li>
                       ))}
                   </ul>


               </div>
           </div>
        </footer>
    )
}