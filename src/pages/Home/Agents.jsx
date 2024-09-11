import React from 'react';
import men1 from '../../assets/images/men1.jpg';
import men2 from '../../assets/images/men2.jpg';
import women1 from '../../assets/images/women1.jpg';
import women2 from '../../assets/images/women2.jpg';
import 'animate.css';


const Agents = () => {
    return (
        <div className='w-[80%] mx-auto mb-16'>
            <h2 className='text-center text-3xl font-bold text-[#BC986B] my-8'>Our Agents</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={men1}
                            alt="Shoes"
                            className="rounded-xl animate__animated animate__pulse" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">James Whitmore</h2>
                        <p>If you have any queries?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#7AA93C] text-white font-semibold">Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={women1}
                            alt="Shoes"
                            className="rounded-xl animate__animated animate__pulse" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sophia Bennett</h2>
                        <p>If you have any queries?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#7AA93C] text-white font-semibold">Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={men2}
                            alt="Shoes"
                            className="rounded-xl animate__animated animate__pulse" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Michael Andrews</h2>
                        <p>If you have any queries?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#7AA93C] text-white font-semibold">Contact Me</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={women2}
                            alt="Shoes"
                            className="rounded-xl animate__animated animate__pulse" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Emily Carter</h2>
                        <p>If you have any queries?</p>
                        <div className="card-actions">
                            <button className="btn bg-[#7AA93C] text-white font-semibold">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;