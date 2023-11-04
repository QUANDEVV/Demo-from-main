import React from 'react';


function Sidebar () {
    return (
        <div className="flex flex-col p-10 bg-secondary">
            <div
                className="contact-content-left"
            >
                <div className="text-white">
                    <div className="text-size-huge font-bold text-center">Welcome to our Organisation</div>
                    <div className="padding-bottom padding-xsmall"></div>
                    <p className="text-sm text-center">
                        Proxima building virtual agents for your Organisation
                    </p>
                </div>
                <div className="grid auto-cols-fr space-y-8 my-5">
                    <div className="flex gap-5 p-[1.5rem] text-white rounded-lg
                     bg-[#434959]">
                        <div className="contact-icon-wrapper">
                            <img
                                src="/assets/Logo_2Logo.webp"
                                loading="lazy"
                                alt="Icon"
                            />
                        </div>
                        <div id="w-node-_82d7164a-ee49-2d8e-5714-b65e89a92205-e5b1e3c8" className="contact-feature">
                            <h1 className="text-white font-bold text-lg">Contact Emails</h1>
                            <div className="padding-bottom padding-xxsmall"></div>
                            <a href="mailto:sales@proximaai.co" className="text-sm text-style-link text-color-white">
                                sales@proximaai.co
                            </a>
                            <div className="padding-bottom padding-xxsmall"></div>
                            <a href="mailto:youremail@gmail.com"
                               className="text-style-link text-sm text-color-white"
                            >
                                administrator@proximaai.co
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-5 p-[1.5rem] text-white rounded-lg
                     bg-[#434959]">
                        <div className="contact-icon-wrapper">
                            <img
                                src="/assets/Frame_2Frame.webp"
                                loading="lazy"
                                alt="Phone Icon"
                            />
                        </div>
                        <div className="contact-feature">
                            <h2 className="text-white font-bold text-lg">Phone Number</h2>
                            <div className="padding-bottom padding-xxsmall"></div>
                            <a
                                href="tel:+254759481887"
                                className="text-style-link text-sm text-color-white"
                            >
                                +254759481887
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-5 p-[1.5rem] text-white rounded-lg
                     bg-[#434959]">
                        <div className="contact-icon-wrapper">
                            <img
                                src="/assets/Frame-1_3Frame-1.webp"
                                loading="lazy"
                                alt="Location Icon"
                            />
                        </div>
                        <div
                            id="w-node-ee870b65-6cee-ba45-cb9f-b493eef216de-e5b1e3c8"
                            className="contact-feature"
                        >
                            <h2 className="text-white font-bold text-lg">Where we are Located</h2>
                            <div className="padding-bottom padding-xxsmall"></div>
                            <p className="text-sm">Juja Modern Hospital, Juja, Kenya</p>
                            <div className="padding-bottom padding-xxsmall"></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar