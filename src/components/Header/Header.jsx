import React from "react";
import '../../Custom.css'
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"
import profile from "../../assets/profile.svg"
import downarrow from "../../assets/downarrow.svg"
import cart from "../../assets/cart.svg"
import sellerHeader from "../../assets/sellerHeader.svg"
import headerDots from "../../assets/headerDots.svg"

function Header() {
    return (
        <header className="bg-white w-full flex flex-row sticky top-0">
                    <div>
                        <img src={logo} className="my-3 ml-7 mr-9" />
                    </div>
                    <div className="basis-1/2">
                        <form className="max-w-md flex">
                            <div className="relative py-[14px]">
                                <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                                    <img src={search} />
                                </div>
                                <input type="search" className="block w-[748px] p-2 ps-10 text-[17px] text-gray-900 rounded-lg bg-[#f0f5ff] outline-0" placeholder="Search for Products, Brands and More" required />
                            </div>
                        </form>
                    </div>
                    <div className="my-[13px] hover:text-white">
                        <button className="inline-flex text-center items-center me-2 hover:bg-[#2a55e5] font-normal rounded-lg text-base py-[9px] button-hover group">
                        <img src={profile} className="mx-2" />
                        Login
                        <img src={downarrow} className="mx-2 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                    </div>
                    <div className="my-[13px] mx-5">
                        <a href="#" className="flex text-center items-center me-2 font-normal text-base py-[9px]">
                            <img src={cart} className="mx-2" />
                            Cart
                        </a>
                    </div>
                    <div className="my-[13px] mx-5">
                        <a href="#" className="flex text-center items-center font-normal text-base py-[9px] mr-5">
                            <img src={sellerHeader} className="mr-2" />
                            Become a Seller
                        </a>
                    </div>
                    <div className="my-[13px]">
                        <button className="text-center items-center hover:bg-[#fafafa] rounded-lg">
                            <img src={headerDots} className="p-[9px]"/>
                        </button>
                    </div>
        </header>
    )
}

export default Header