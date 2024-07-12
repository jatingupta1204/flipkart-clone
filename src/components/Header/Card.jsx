import React from "react";


function Card(props) {
    return (
        <div className="bg-white mx-4 my-4">
                <div className="flex justify-center">
                        <a href='#' className=' my-3'>
                            <img src={props.image} className='mx-[7px] my-[9px] w-[180px] h-[208px] rounded-sm object-contain' />
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-lg mx-[7px] tracking-[-0.01px]'>{props.title}</p>
                            <p className='text-center whitespace-nowrap overflow-hidden text-ellipsis text-lg mx-[7px] mb-[7px] tracking-[-0.01px] font-medium'>${props.price}</p>
                        </a>
                </div>
        </div>
    )
}

export default Card;