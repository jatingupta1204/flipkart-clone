import React from 'react';
import Toys1 from "../../assets/BeautyFoodToys/Toys1.jpeg"
import Toys2 from "../../assets/BeautyFoodToys/Toys2.jpeg"
import Toys3 from "../../assets/BeautyFoodToys/Toys3.jpeg"
import Toys4 from "../../assets/BeautyFoodToys/Toys4.jpeg"
import Toys5 from "../../assets/BeautyFoodToys/Toys5.jpeg"
import Toys6 from "../../assets/BeautyFoodToys/Toys6.jpeg"
import Toys7 from "../../assets/BeautyFoodToys/Toys7.jpeg"
import rightArow from "../../assets/rightArrow.svg"

function BeautyFoodToys() {
    return (
        <div className="bg-white grid grid-rows-10 mx-4 mb-4">
            <div className="row-span-2">
                <a href='#' className="flex text-xl leading-7 tracking-[-0.02px] font-semibold">
                    <div className="w-[1411px] my-[18px] ml-4">
                        Beauty, Food, Toys & more
                    </div>
                    <div className="col-span-1 right-btn bg-[#2a55e5] ml-2 mr-5 my-5 items-center rounded-full w-6 p-1">
                        <img src={rightArow} />
                    </div>
                </a>
            </div>
            <div className='row-span-8'>
                <div className='grid grid-cols-7 gap-4 mx-3 mb-6 divide-x'>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys1} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Best Tof Action Toys</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 70% Off</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys2} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Gym Essentials</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;139</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys3} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Geared Cycles</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 70% Off</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys4} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Remote Control Toys</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 80% Off</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys5} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Microphones</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 70% Off</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys6} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Treadmill, Exercise Bikes & more</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 70% Off</p>
                        </a>
                        <a href='#' className='border rounded-[4px]'>
                            <img src={Toys7} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Musical Keyboards</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Up to 70% Off</p>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default BeautyFoodToys;