import React from 'react';
import electronics1 from "../../assets/Electronics/electronics1.jpeg"
import electronics2 from "../../assets/Electronics/electronics2.jpg"
import electronics3 from "../../assets/Electronics/electronics3.jpeg"
import electronics4 from "../../assets/Electronics/electronics4.jpeg"
import electronics5 from "../../assets/Electronics/electronics5.jpeg"
import electronics6 from "../../assets/Electronics/electronics6.jpeg"
import rightArow from "../../assets/rightArrow.svg"
import promo from "../../assets/Electronics/promo.jpg"

function Electronics() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-10 my-4 ml-4'>
                <div className="bg-white grid grid-rows-10">
                    <div className="row-span-2">
                        <a href='#' className="flex text-xl leading-7 tracking-[-0.02px] font-semibold">
                            <div className="w-[1170px] my-[18px] ml-4">
                                Best of Electronics
                            </div>
                            <div className="right-btn bg-[#2a55e5] ml-2 mr-5 my-5 items-center rounded-full w-6 p-1">
                                <img src={rightArow}/>
                            </div>
                        </a>
                    </div>
                    <div className='row-span-8'>
                        <div className='grid grid-cols-12 gap-4 mx-3 mb-6'>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics1} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Best Truewireless Headphones</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>Grab Now</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics2} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Noise Smartwatches</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;1,099</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics3} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Best Selling Mobile Speakers</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;499*</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics4} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Fastrack Smartwatches</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;1,399</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics5} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Best of Shavers</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;1,649</p>
                            </a>
                            <a href='#' className='col-span-2 border rounded-[4px]'>
                                <img src={electronics6} className='mx-[7px] my-[9px] w-[177px] h-[208px] rounded-sm object-contain'/>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] tracking-[-0.01px]'>Monitor</p>
                                <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>From &#8377;8279</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 my-2 mx-4 object-cover'>
                <img src={promo} className='h-[390px]' />
            </div>
        </div>
    )
}

export default Electronics;