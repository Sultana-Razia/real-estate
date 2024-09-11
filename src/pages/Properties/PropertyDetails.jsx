import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import { TbHomeHand } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";
import { SiEsphome } from "react-icons/si";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {

    const properties = useLoaderData();
    // console.log(properties);

    const { id } = useParams();
    const idInt = parseInt(id);
    const property = properties.find(property => property.id === idInt)
    // console.log(property)


    return (
        <div>
            <Helmet>
                <title>Property Detail</title>
            </Helmet>
            <Navbar></Navbar>
            {/* id, , , segment_name, , , , , , facilities, , , parking */}
            <div className='bg-[#F3F4F9]'>
                <div className='w-[80%] mx-auto my-8 grid grid-cols-5 gap-5 lg:gap-14'>
                    <div className='col-span-5 lg:col-span-3'>
                        <div className='flex justify-between'>
                            <h2 className='text-3xl font-bold text-[#BC986B] mb-4'>{property.estate_title}</h2>
                            <p className='text-3xl font-bold text-[#BC986B] mb-4'>{property.segment_name}</p>
                        </div>
                        <img className='w-full h-[400px]' src={property.image} alt="" />
                        <p className='mt-4'>{property.description}</p>
                    </div>
                    <div className='col-span-5 lg:col-span-2 mt-12 pl-4 bg-white rounded-md'>
                        <div className='flex gap-8 mt-4 text-2xl text-[#BC986B]'>
                            <h2 className='flex items-center gap-1'><IoPricetagOutline /> {property.price}</h2>
                            <h2 className='flex items-center gap-1'><TbHomeHand /> {property.status}</h2>
                        </div>

                        <div className='grid grid-cols-2 gap-2 my-3 pl-3 text-xl text-[#525252de] mt-4'>
                            <p className='flex items-center gap-3'><SiEsphome />{property.area}</p>
                            <p className='flex items-center gap-3'><MdOutlineBathtub /> {property.bathrooms} Bathrooms</p>
                            <p className='flex items-center gap-3'><FaBed /> {property.bedrooms} Bedrooms</p>
                            <p className='flex items-center gap-3'><CiLocationOn /> {property.location}</p>
                        </div>
                        <div className='pl-3 font-semibold text-xl'>
                            <p>Parking Area: {property.parking}</p>
                        </div>
                        <ul className='pl-5'>
                            <h2 className='mt-5 text-2xl text-[#BC986B] mb-2'>Facilities</h2>
                            {property.facilities.map(facility => <li className='list-disc font-semibold'>
                                {facility}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PropertyDetails;