"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";
import {submitContactForm} from "@/redux/slice/contact/contactSlice";


function Letstalk() {
    const dispatch = useDispatch();
    //const { isLoading, isError, isSuccess } = useSelector(state => state.waitlist);
    const [contactData, setcontactData] = useState({
        name: '',
        email: '',
        subject:'',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setcontactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any, contactData: any) => {
        e.preventDefault();

        try {
            // await dispatch(submitContactForm(contactData));

            // Success toast data
            toast("Thank you! Your submission has been received!", {
                type: "success",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })

            setcontactData({
                name: '',
                email: '',
                subject:'',
                message: ''
            });
        } catch (e) {
            toast("Something went wrong!", {
                type: "error",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        }
    };


    return (
        <div
            className="contact-content-right my-5 p-10"
        >
            <h2 className="text-xl font-bold text-center">Let&apos;s talk?</h2>
            <div className="padding-bottom padding-xsmall"></div>
            <p className="text-sm text-center">
                Make sure that the organizations achieve customer satisfaction through
                efficient interactions
            </p>
            <div className="padding-bottom padding-medium"></div>
            <div className="contact-form-block w-form">
                <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    className="contact-form"
                    // onSubmit={handleSubmit}
                >
                    <div className="flex flex-col space-y-5 w-full my-5">
                        <label htmlFor="Contact-Name" className="field-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-input is-contact w-input border p-4 rounded-lg"
                            name="name" // Update name attribute to "name"
                            data-name="Contact 10 Name"
                            placeholder="John Doe"
                            id="Contact-Name"
                            required
                            value={contactData.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="Contact-Email" className="field-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-input is-contact w-input border p-4 rounded-lg"
                            name="email" // Update name attribute to "email"
                            data-name="Contact 10 Email"
                            placeholder="youremail@gmail.com"
                            id="Contact-Email"
                            required
                            value={contactData.email}
                            onChange={handleChange}
                        />


                        <input
                            id="Contact-subject"
                            name="subject" // Update name attribute to "message"
                            // maxLength="5000"
                            data-name="Contact 10 Message"
                            placeholder="subject..."
                            required
                            className="form-input is-contact is-contact w-input border p-4 rounded-lg"
                            value={contactData.subject}
                            onChange={handleChange}
                        />


                        <textarea
                            id="Contact-Message"
                            name="message"
                            data-name="Contact 10 Message"
                            placeholder="Type your message..."
                            required
                            className="form-input is-contact is-text-area w-input border p-4 rounded-lg"
                            value={contactData.message}
                            onChange={handleChange}
                        ></textarea>


                    </div>
                    <input
                        type="submit"
                        value="Send Message"
                        data-wait="Please wait..."
                        id="w-node-c5cf970e-c2f6-ab4f-cef1-d6ebcfabad19-e5b1e3c8"
                        className="button w-button text-black hover:bg-[#596aff] hover:text-white p-5 border rounded-lg"
                    />
                </form>

                {/*<div className="success-message w-form-done">*/}
                {/*    <div className="success-text">*/}
                {/*        Thank you! Your submission has been received!*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="error-message w-form-fail">
                    <div className="error-text"></div>
                </div>

            </div>
        </div>
    );
}

export default Letstalk;
