"use client";
import './globals.css'
import type { Metadata } from 'next'
import {  Space_Grotesk } from 'next/font/google'
import {Footer, Navbar} from "@/components";
import {ReactNode, useEffect, useState} from "react";
import {getVisitorCookie, setVisitorCookie} from "@/utils";
import Modal from "react-modal";
import {AiFillCloseCircle} from "react-icons/ai";
import {IoChatbubblesOutline} from "react-icons/io5";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import { init } from '@socialgouv/matomo-next'

const inter = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

const MATOMO_URL: string = process.env.NEXT_PUBLIC_MATOMO_URL || '';
const MATOMO_SITE_ID: string = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '';

// export const metadata: Metadata = {
//   title: 'ProximaAI',
//   description: 'Revolutionizing websites via AI Virtual agents',
// }

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(true); // Initially open modal

    useEffect(() => {
        init({
            siteId: MATOMO_SITE_ID,
            url: MATOMO_URL,
        });

        const visitorId = getVisitorCookie();


        if (!visitorId) {
            setVisitorCookie();
        }
    }, []);

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
        setModalIsOpen(false); // Close the modal when the overlay (iframe) is opened
    };
  return (
      <html lang="en">
      <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ProximaAI</title>
      </head>
      <body className={`${inter.className} h-screen overflow-x-hidden flex flex-col`}>
      <Provider store={store}>
          <Navbar />
          <div className="flex-grow">
              {children}
          </div>

          <div className={`relative overlay-container ${overlayVisible ? "active" : ""}`}>
              <div className="w-48 h-48 relative flex">
                  <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={() => setModalIsOpen(false)}
                      className={`fixed right-[3.5rem] z-10 border-2 border-primary bottom-[6.5rem] bg-white p-5 h-auto w-[14rem] rounded-lg ${modalIsOpen ? "modal-fade-in" : "modal-fade-out"}`}
                      overlayClassName="modal-overlay"
                  >
                      <div className="modal-inner-content">
                          <h2 className="text-xs font-bold mb-2 flex items-center w-full justify-between">Welcome to ProximaAI 👋!
                              <AiFillCloseCircle onClick={() => setModalIsOpen(false)} className="float-right cursor-pointer text-primary" size={20} />
                          </h2>
                          <p className="text-gray-600 text-xs">
                              We are excited to have you here. Feel free to explore and connect with us.
                          </p>
                      </div>
                  </Modal>
                  <button
                      className="chat-icon"
                      onClick={toggleOverlay}
                      style={{
                          position: "fixed",
                          bottom: "50px",
                          right: "50px",
                          zIndex: 1000,
                          cursor: "pointer",
                      }}
                  >
                      <div className="bg-primary h-12 w-12 rounded-full text-2xl flex items-center justify-center"><IoChatbubblesOutline size={24} className="text-white" /></div>
                  </button>

              </div>
              <div
                  className={`chatbot-overlay ${overlayVisible ? "active" : ""}`}
                  style={{
                      position: "fixed",
                      bottom: 0,
                      right: 15,
                      zIndex: 999,
                      transition: "opacity 0.3s, visibility 0.3s",
                      opacity: overlayVisible ? 1 : 0,
                      visibility: overlayVisible ? "visible" : "hidden",
                  }}
              >
                  <iframe
                      src="https://iframe.proximaai.co/?auth_uri=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImV4cCI6MTcwMjczMjU2OX0.JK-mvvFqrNGFEVAP377W71X3pAuceh4W2pJEc0rP1N4&is_auth=false"
                      title="Chatbot"
                      className=""
                      style={{
                          width: "450px",
                          height: "650px",
                          border: "none",
                          borderRadius: "10px",
                          overflow: "hidden",
                      }}
                  ></iframe>
              </div>
          </div>

          <Footer />
      </Provider>
      </body>
      </html>
  )
}
