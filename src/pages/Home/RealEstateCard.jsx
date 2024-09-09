import React from 'react';
import { SiEsphome } from "react-icons/si";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { TbHomeHand } from "react-icons/tb";
import { Link } from 'react-router-dom';

const RealEstateCard = ({ estate }) => {

    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities, bedrooms, bathrooms, parking } = estate;

    return (
        <div className=''>
            <div className='bg-white w-96 p-5'>
                <img className='w-[340px] h-52 rounded-sm' src={image} alt="" />
                <h2 className='text-[#BC986B] text-2xl font-medium my-3'>{estate_title}</h2>
                <hr />
                <div className='grid grid-cols-2 gap-2 my-3 pl-3 text-xl text-[#525252de]'>
                    <p className='flex items-center gap-3'><SiEsphome />{area}</p>
                    <p className='flex items-center gap-3'><MdOutlineBathtub /> {bathrooms} Bathrooms</p>
                    <p className='flex items-center gap-3'><FaBed /> {bedrooms} Bedrooms</p>
                    <p className='flex items-center gap-3'><TbHomeHand /> {status}</p>
                </div>
                <div className='flex justify-between text-[#BC986B] text-2xl font-semibold my-2'>
                    <p>{price}</p>
                    <p>{segment_name}</p>
                </div>
                <Link to={`/properties/${id}`}>
                    <button className='bg-[#7AA93C] text-xl text-white font-semibold py-2 mt-3 w-full rounded-md '>View Property</button>
                </Link>
            </div>
        </div>
    );
};

export default RealEstateCard;