import React from 'react';
import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/partner3.jpeg';
import partner4 from '../../assets/images/partner4.png'

const Partners = () => {
    return (
        <div className='w-[80%] mx-auto mb-16'>
            <h2 className='text-center text-3xl font-bold text-[#BC986B] my-8'>Partners</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={partner1} className='w-[224px]' alt="" />
                        <h2 className="card-title pl-6">Elite Realty Group</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={partner2} className='w-[224px] h-[90px]' alt="" />
                        <h2 className="card-title">Global Property Solutions</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={partner3} className='w-[224px] h-[90px]' alt="" />
                        <h2 className="card-title">Premier Home Builders</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <img src={partner4} className='w-[224px] mt-5' alt="" />
                        <h2 className="card-title">UrbanLand Developers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;