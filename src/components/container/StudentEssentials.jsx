import React from "react";
import Advertisement from "../../assets/StudentEssential/Advertisement.jpg"
import Student1 from "../../assets/StudentEssential/Student1.jpeg"
import Student2 from "../../assets/StudentEssential/Student2.jpeg"
import Student3 from "../../assets/StudentEssential/Student3.jpeg"
import Student4 from "../../assets/StudentEssential/Student4.jpeg"
import rightArow from "../../assets/rightArrow.svg"

function StudentEssentials() {
    return (
        <div className="grid grid-cols-12 my-4 ml-4">
            <div className="col-span-4">
                <div className="bg-white grid grid-rows-9">
                    <div className="row-span-1">
                        <a href='#' className="flex text-xl leading-7 tracking-[-0.02px] font-semibold">
                            <div className="w-[433px] my-[18px] ml-4">
                                Shop Student Essentials
                            </div>
                            <div className="right-btn bg-[#2a55e5] ml-2 mr-5 my-5 items-center rounded-full w-6 p-1">
                                <img src={rightArow} />
                            </div>
                        </a>
                    </div>
                    <div className='row-span-4'>
                        <div className='grid grid-cols-4 gap-4 mx-4 mb-2'>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={Student1} className='mx-[7px] my-[9px] w-[211px] h-[208px] rounded-sm object-contain' />
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] tracking-[-0.01px]'>School Bags</p>
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] mb-[7px] tracking-[-0.01px] font-medium text-[#108934]'>Min. 50% Off</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={Student2} className='mx-[7px] my-[9px] w-[211px] h-[208px] rounded-sm object-contain' />
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] tracking-[-0.01px]'>Umbrellas</p>
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] mb-[7px] tracking-[-0.01px] font-medium text-[#108934]'>Top Deals</p>
                            </a>
                        </div>
                    </div>
                    <div className='row-span-4'>
                        <div className='grid grid-cols-4 gap-4 mx-4 mb-3'>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={Student3} className='mx-[7px] my-[9px] w-[211px] h-[208px] rounded-sm object-contain' />
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] tracking-[-0.01px]'>Belts</p>
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] mb-[7px] tracking-[-0.01px] font-medium text-[#108934]'>Grab Or Gone</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={Student4} className='mx-[7px] my-[9px] w-[211px] h-[208px] rounded-sm object-contain' />
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] tracking-[-0.01px]'>Men's Sandals & Floaters</p>
                                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-base mx-[7px] mb-[7px] tracking-[-0.01px] font-medium text-[#108934]'>Min. 70% Off</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 mx-4">
                <a href="#">
                    <img src={Advertisement} className="h-[663px]" />
                </a>
            </div>
        </div>
    )
}

export default StudentEssentials