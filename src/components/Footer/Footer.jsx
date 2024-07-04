import React from "react";

function Footer() {
    return (
        <footer className="bg-[#212121] hidden md:block">
            <div className="mx-[60px] py-10 w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">ABOUT</h2>
                        <ul className="text-white font-medium text-xs">
                            <li className="text-start">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">About Us</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Flipkart Stories</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Press</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Corporate Information</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">GROUP COMPANIES</h2>
                        <ul className="text-white font-medium text-xs">
                            <li className="text-start">
                                <a href="#" className="hover:underline">Myntra</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Cleartrip</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Shopsy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">HELP</h2>
                        <ul className="text-white font-medium text-xs">
                            <li className="text-start">
                                <a href="#" className="hover:underline">Payments</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Shipping</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Cancellation & Returns</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">FAQ</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Report Infringement</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">CONSUMER POLICY</h2>
                        <ul className="text-white font-medium text-xs">
                            <li className="text-start">
                                <a href="#" className="hover:underline">Cancellation & Returns</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Terms Of Use</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Security</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Privacy</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Sitemap</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">Grievance Redressal</a>
                            </li>
                            <li className="text-start">
                                <a href="#" className="hover:underline">EPR Compliance</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">Mail Us:</h2>
                        <ul className="text-white font-medium text-xs">
                            <li className="text-start">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">Registered Office Address: </h2>
                        <ul className="text-white font-normal text-xs">
                            <li className="text-start">
                                <p>Flipkart Internet Private Limited,<br />Building</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer