import React from "react";
import '../../Custom.css'
import Grocery from "../../assets/Grocery.png"
import Mobiles from "../../assets/Mobiles.png"
import Fashion from "../../assets/Fashion.png"
import Electronics from "../../assets/Electronics.png"
import homeFurniture from "../../assets/homeFurniture.jpg"
import Appliances from "../../assets/Appliances.jpg"
import Travel from "../../assets/travel.png"
import beautyToys from "../../assets/beautyToys.png"
import twoWhellers from "../../assets/twoWheelers.png"
import downarrow from "../../assets/downarrow.svg"


function Container() {
    return (
        <div className="bg-white mt-2 mx-4 my-[17px] grid grid-cols-12 px-32">
            <div className="col-span-1">
                <a href="#">
                    <img src={Grocery} className="mt-4 mx-6 h-[60px] w-[60px]" />
                    <div className="mt-3 mb-[17px] mx-[18px] text-center text-sm font-medium">
                        Grocery
                    </div>
                </a>
            </div>
            <div className="col-span-1">
                <a href="#">
                    <img src={Mobiles} className="mt-4 mx-6 h-[60px] w-[60px]" />
                    <div className="mt-3 mb-[17px] mx-[18px] text-center text-sm font-medium">
                        Mobiles
                    </div>
                </a>
            </div>
            <div className="col-span-1 group hover:text-[#2874f0] hover-blue">
                <img src={Fashion} className="mt-4 mx-6 h-[60px] w-[60px]" />
                <div className="mt-3 mb-[17px] mx-[18px] text-center text-sm font-medium flex">
                    Fashion
                    <img src={downarrow} className="down-arrow mx-1 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
            </div>
            <div className="col-span-1 group hover:text-[#2874f0] hover-blue">
                <img src={Electronics} className="mt-4 mx-6 h-[60px] w-[60px]" />
                <div className="mt-3 mb-[17px] mx-[10px] text-center text-sm font-medium flex">
                    Electronics
                    <img src={downarrow} className="down-arrow mx-1 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
            </div>
            <div className="col-span-2 group hover:text-[#2874f0] hover-blue">
                <img src={homeFurniture} className="mt-4 mx-[74px] h-[60px] w-[60px]" />
                <div className="mt-3 mb-[17px] mx-[18px] text-sm font-medium flex pl-[22px]">
                    Home & Furniture
                    <img src={downarrow} className="down-arrow mx-1 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
            </div>
            <div className="col-span-1">
                <a href="#">
                    <img src={Appliances} className="mt-4 mx-6 h-[60px] w-[60px]" />
                    <div className="mt-3 mb-[17px] mx-[18px] text-center text-sm font-medium">
                        Appliances
                    </div>
                </a>
            </div>
            <div className="col-span-1">
                <a href="#">
                    <img src={Travel} className="mt-4 mx-6 h-[60px] w-[60px]" />
                    <div className="mt-3 mb-[17px] mx-[18px] text-center text-sm font-medium">
                        Travel
                    </div>
                </a>
            </div>
            <div className="col-span-2 group hover:text-[#2874f0] hover-blue">
                <img src={beautyToys} className="mt-4 mx-[74px] h-[60px] w-[60px]" />
                <div className="mt-3 mb-[17px] mx-[18px] text-sm font-medium flex pl-[14px]">
                    Beauty, Toys & More
                    <img src={downarrow} className="down-arrow mx-1 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
            </div>
            <div className="col-span-2 group hover:text-[#2874f0] hover-blue">
                <img src={twoWhellers} className="mt-4 mx-[74px] h-[60px] w-[60px]" />
                <div className="mt-3 mb-[17px] mx-[18px] text-sm font-medium flex pl-[40px]">
                    Two Whellers
                    <img src={downarrow} className="down-arrow mx-1 mt-[4px] transform group-hover:rotate-180 transition-transform duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Container