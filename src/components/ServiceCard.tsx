import React from 'react'
import { GoClockFill } from 'react-icons/go'
import { FaCoins } from "react-icons/fa";
import images from '../Constants/imaegs'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface IService{
name:string;
price:number;
time:number;
description:string;
img:string;
}

interface IProps{
    service:IService;
}

const ServiceCard:React.FC<IProps> = ({service,className}) => {

 
    return (
        <div
            className={`rounded-xl overflow-hidden 
        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}
        
        `}>
            <Link to="service">
                <img
                    src={service.img}
                    alt="title"
                    className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
            </Link>

            <div className='p-5'>
                <Link to="service">
                    <h2
                        className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px] '>
                        {service.name}
                    </h2>
                </Link>
                <p className='text-dark-light mt-3 text-sm md:text-lg'>
                    {service.description}
                </p>
                <div className='flex flex-col flex-nowrap  mt-6'>

                    <div className='flex items-center gap-x-2 md:gap-x-2.5'>
                    <GoClockFill className='text-gray-600'/>
                   <span className='font-semibold text-gray-600'>{service.time}</span>
               
                    </div>
<div className='flex items-center gap-x-2 md:gap-x-2.5'>
<FaCoins className='text-gra-600'/>
<span className='text-gray-600 font-semibold'>{service.price} zł</span>
</div>
        


                </div>
            </div>
        </div>
    )
}

export default ServiceCard