import React from 'react';
import { FaRegSquareFull } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import footer1 from '../../assets/images/footer1.jpg'
import footer2 from '../../assets/images/footer2.jpg'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#31323C] mt-9 text-white lg:h-[400px] px-[5%] lg:flex items-center justify-center'>
                <div className='border-r border-[#bc976b24] px-12 lg:px-0'>
                    <div>
                        <div className='flex items-center gap-2 pt-3'>
                            <FaRegSquareFull className='text-xl bg-[#BC986B] text-[#BC986B]' />
                            <h2 className='text-2xl font-semibold'>  Latest Properties</h2>
                        </div>
                        <div className='flex items-center gap-3 mt-4'>
                            <img className='w-[30%] rounded-md' src={footer1} alt="" />
                            <div>
                                <p className='font-medium'>Retail Store Southwest <br /> 186th Street</p>
                                <p className='text-[#BC986B] font-medium mt-2'>From $120/month</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <img className='w-[30%] rounded-md' src={footer2} alt="" />
                            <div>
                                <p className='font-medium'>Apartment Building <br /> with Subunits</p>
                                <p className='text-[#BC986B] font-medium mt-2'>From $120/month</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-12 border-r border-[#bc976b24]'>
                    <div className='flex items-center gap-2 pt-3'>
                        <FaRegSquareFull className='text-xl bg-[#BC986B] text-[#BC986B]' />
                        <h2 className='text-2xl font-semibold'>Contact Us</h2>
                    </div>
                    <div className='flex items-center gap-4 mt-7'>
                        <FaPhoneAlt className='text-[#7a7b84]' />
                        <p>+01900-400-700</p>
                    </div>
                    <div className='flex items-center gap-4 mt-7'>
                        <MdOutlineMail className='text-[#7a7b84]' />
                        <p>info@homenest.com</p>
                    </div>
                    <div className='flex items-center gap-4 mt-7'>
                        <IoLocationOutline className='text-[#7a7b84]' />
                        <p>3015 Grand Ave, Coconut <br />
                            Grove,Merrick Way, FL 12345</p>
                    </div>
                </div>

                <div className='pl-12'>
                    <div className='flex items-center gap-2 pt-3'>
                        <FaRegSquareFull className='text-xl bg-[#BC986B] text-[#BC986B]' />
                        <h2 className='text-2xl font-semibold'>NewsLetter</h2>
                    </div>
                    <p className='mt-7 text-[#656774]'>Enter your e-mail to get the latest news of HomeNest</p>
                    <div className='flex items-center mt-7 font-medium'>
                        <input className='px-4 py-3' type="email" name="email" id="" placeholder='Your Email' />
                        <button className='text-white bg-[#BC986B] px-4 py-3'>SUBSCRIBE</button>
                    </div>
                    <div className='flex text-[#7a7b84] gap-7 mt-7 pb-2'>
                        <TiSocialFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaPinterest />
                    </div>
                </div>
            </div>

            <div className='h-[50px] bg-[#292A33]'>
                <p className='text-center py-3 text-[#7a7b84]'>HomeNest @ 2024</p>
            </div>
        </div>
    );
};

export default Footer;