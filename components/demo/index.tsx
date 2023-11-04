"use client"
import React, {useEffect} from 'react';
import DashNav from "./sidebar";
import MessagesList from "./MessageList";
import ChatWindow from "./ChatWindow";
import Configuration from "./Configuration";
import {useDispatch} from "react-redux";
import {updateData} from "@/redux/demo-data/demoSlice";
import {demoData} from "./data";

export default function DemoComponent() {
    const dispatch = useDispatch();

    // console.log(demoData)

    useEffect(() => {
        dispatch(updateData(demoData))
    }, [dispatch]);

    return (
        <div className="flex space-x-10">
            <DashNav />
            <MessagesList />
            <div className="px-1 w-full">
                <ChatWindow />
            </div>
        </div>
    )
}