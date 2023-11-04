"use client";
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { BsSendDashFill } from 'react-icons/bs'
import {useSelector} from "react-redux";

export default function ChatWindow() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState(null)
    const [received, setReceived] = useState([])
    const [temp, setTemp] = useState(false)
    const dataref = useRef('')
    const containerRef = useRef('')
    const selectedCompany = useSelector(state => state.demo.selectedCompany);


    useEffect(() => {
        setMessages([]);
        setReceived([]);
        setTemp(false);
        dataref.current = '';


        if (selectedCompany) {
            const webSocket = new WebSocket('wss://gpt-ai.proximaai.co/ws/chat/');

            webSocket.onopen = () => {
                console.log('WebSocket connection is open.');
                setSocket(webSocket)
            }

            webSocket.onmessage = (event) => {
                const receivedData = JSON.parse(event.data)

                if (receivedData.type === 'start') {
                    setTemp(true)
                } else if (receivedData.type === 'stream') {
                    setReceived([]) //this adds a delay for the text generation effect
                    dataref.current += receivedData.message
                    containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
                } else if (receivedData.type === 'end') {
                    setMessages((prev) => [...prev, dataref.current])
                    setTemp(false)
                }
            }

            webSocket.onclose = () => {
                console.log('WebSocket connection is closed.')
            }

            webSocket.onerror = (event) => {
                console.error('WebSocket error:', event)
            }

            return () => {
                webSocket.close()
            }
        }
    }, [selectedCompany])

    // updates the value of prompt to add it to messages array, prompt value starts as an empty string otherwise
    useEffect(() => {
        dataref.current = ''
        if (prompt.trim() !== '' && temp) {
            // @ts-ignore
            setMessages((prev) => [...prev, { sender: 'user', message: prompt.trim() }])
            setTemp(true)
            setPrompt('')
        }
    }, [prompt, temp])

    const handleClick = () => {
        if(prompt.trim() === '') return

        const message = {
            tenant_name: selectedCompany.name,
            message: prompt.trim()
        }
        socket.send(JSON.stringify(message))
    }

    return (
        <div className='h-[65vh] w-3/4 relative p-4 shadow-lg rounded-lg mt-28 mb-10 overflow-hidden'>
            <div className="flex flex-col items-center space-x-3">
                <h1 className="text-2xl font-semibold text-[#2DABB1]">
                    {selectedCompany?.name}
                </h1>
                <p className="text-[14px] mt-3 mb-5">{selectedCompany?.one_liner}</p>
            </div>

            <div className="h-[53vh] scrollbar-hide overflow-y-auto p-2 pb-20 flex flex-col items-start" ref={containerRef}>
                {
                    messages.map((message, i) =>
                        typeof message === 'object'?
                            <p className='bg-slate-100 ml-10 rounded-md text-sm p-2 mb-2 self-end' key={i}>{message.message}</p>:
                            <p className=' text-sm tracking-wider w-auto max-w-[29rem] h-auto bg-[#2DABB1] p-2 rounded-lg text-white' key={i}>{message}</p>
                    )
                }
                {temp? <p className='bg-[#2DABB1] w-auto h-auto mr-10 rounded-md p-2 mb-2 text-white'>{dataref.current}</p>: null}
            </div>

            <form onSubmit={e => e.preventDefault()} className="w-full bg-white flex gap-2 absolute bottom-0 left-[50%] -translate-x-[50%] p-2">
                <input type="text" className='flex-1 px-4 py-2 bg-slate-100 rounded-md focus:outline-gray-400' placeholder='Ask a question'
                       value={prompt} onChange={e => setPrompt(e.target.value)} />
                <button type="submit" className='text-white bg-[#2DBBA1] px-4 py-2 rounded' onClick={handleClick}>{<BsSendDashFill />}</button>
            </form>

        </div>
    )
}
