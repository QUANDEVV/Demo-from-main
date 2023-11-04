import React from 'react';

export function AboutSection() {
    return (
        <section className="section-header bg-gray-100 py-16">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-medium">
                        <div className="header-component is-about flex space-x-20 justify-between items-center">
                            <div
                                data-w-id="6d47d01d-246e-bb3b-fd73-4df0fc415872"
                                style={{
                                    WebkitTransform:
                                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                    OTransform:
                                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                    msTransform:
                                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                    transform:
                                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                    //   opacity: "0",
                                }}
                                className="header-content-wrapper p-10"
                            >
                                <div className="sub-heading text-2xl">About Us</div>
                                <h1 className="font-bold text-6xl">We focus on your customers</h1>
                                <div className="padding-bottom padding-small"></div>

                                <div className="flex flex-col space-y-10 p-5">
                                    <p className="2xl:w-[57rem] w-full text-justify">
                                        Welcome to Proxima, where customer relationships are transformed into exceptional experiences. Our
                                        mission is to revolutionize the way organizations connect with their customers, elevating customer
                                        service to unprecedented heights.
                                    </p>
                                    <p className="2xl:w-[57rem] w-full text-justify">
                                        At Proxima, we understand the vital role of technology in bridging the gap between businesses and their
                                        customers. We specialize in creating clear, consistent, and seamless communication and feedback loops,
                                        ensuring that your customers feel valued and heard at every touchpoint.
                                    </p>
                                    <p className="2xl:w-[57rem] w-full text-justify">
                                        We believe in the power of community, which is why we bring customers together in closely-knit
                                        networks. This fosters deeper understanding and allows them to share their journeys with your products
                                        or services. Our goal is to transform customers into advocates by creating an environment where their
                                        sentiments, feedback, complaints, and interests are effortlessly channeled to your organization.
                                    </p>
                                </div>

                                <div className="padding-bottom padding-medium"></div>
                            </div>
                            <div className="header-image-wrapper is-about w-3/4 xl:block hidden">
                                <img src="/assets/Rectangle-4338_1Rectangle-4338.webp"  data-w-id="6d47d01d-246e-bb3b-fd73-4df0fc415880"
                                     style={{
                                         WebkitTransform:
                                             "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                         OTransform:
                                             "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                         msTransform:
                                             "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                         transform:
                                             "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                         // opacity: "0",
                                     }}
                                     srcSet="/assets/IMG_3246.jpg"
                                     sizes="(max-width: 991px) 90vw, 41vw"
                                     alt="A man sitting at a table with a laptop"
                                     className="header-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}