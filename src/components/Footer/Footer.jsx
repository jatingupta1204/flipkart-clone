import React from "react";
import facebook from "../../assets/Footer/facebook.svg"
import twitter from "../../assets/Footer/twitter.svg"
import youtube from "../../assets/Footer/youtube.svg"
import seller from "../../assets/Footer/seller.svg"
import advertise from "../../assets/Footer/advertise.svg"
import giftCard from "../../assets/Footer/giftCard.svg"
import helpCenter from "../../assets/Footer/helpCentre.svg"
import paymentMethod from "../../assets/Footer/paymentMethod.svg"

function Footer() {
    return (
        <footer className="bg-[#212121] hidden md:block w-full">
            <div className="mx-[60px] pt-10">
                <div className="grid gap-5 md:grid-cols-12">
                    <div className="col-span-2">
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
                    <div className="col-span-2">
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
                    <div className="col-span-2">
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
                    <div className="col-span-2">
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
                    <div className="col-span-2 border-s-2 pl-8">
                        <div>
                            <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">Mail Us:</h2>
                            <ul className="text-white font-normal text-xs">
                                <li className="text-start">
                                    <p>Flipkart Internet Private Limited,<br />Clove Embassy Tech Village,<br />Outer Ring Road, Devarabeesanahalli Village,<br />Bengaluru, 560103,<br />Karnataka, India</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mt-4 text-xs leading-[normal] text-[#878787]">Social:</h2>
                            <div className="flex justify-items-start mt-3">
                                <img src={facebook} className="mr-4 mb-1" />
                                <img src={twitter} className="mr-4 mb-1" />
                                <img src={youtube} className="mr-4 mb-1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h2 className="mb-3 text-xs leading-[normal] text-[#878787]">Registered Office Address: </h2>
                        <ul className="text-white font-normal text-xs">
                            <li className="text-start">
                                <p>Flipkart Internet Private Limited,<br />Building Alyssa, Begonia & <br />Clove Embassy Tech Village,<br />Outer Ring Road, Devarabeesanahalli Village,<br />Bengaluru, 560103,<br />Karnataka, India<br />CIN: U51109KA2012PTC066107<br />Telephone: <a href="#" className="text-[#2874f0]">044-45614700</a>/<a href="#" className="text-[#2874f0]">044-67415800</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="min-h-10"></div>
            <div className="px-[93px] py-7 border-t-2">
                <div className="flex gap-[89px]">
                    <div className="flex justify-start">
                        <img src={seller} className="h-4 w-4"/>
                        <a href="#" className="text-white text-xs ml-2">Become a Seller</a>
                    </div>
                    <div className="flex justify-start">
                        <img src={advertise} className="h-4 w-4"/>
                        <a href="#" className="text-white text-xs ml-2">Advertise</a>
                    </div>
                    <div className="flex justify-start">
                        <img src={giftCard} className="h-4 w-4"/>
                        <a href="#" className="text-white text-xs ml-2">Gift Cards</a>
                    </div>
                    <div className="flex justify-start">
                        <img src={helpCenter} className="h-4 w-4"/>
                        <a href="#" className="text-white text-xs ml-2">Help Center</a>
                    </div>
                    <div className="flex justify-start">
                        <span className="text-white text-xs ml-2">© 2007-2024 Flipkart.com</span>
                    </div>
                    <div className="flex justify-start">
                        <img src={paymentMethod}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer