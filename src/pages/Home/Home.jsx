import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import RealEstateCard from "./RealEstateCard";
import { Helmet } from "react-helmet";
import Agents from "./Agents";
import Partners from "./Partners";


const Home = () => {

    const realEstate = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>HomeNest</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className="text-3xl text-center font-bold text-[#BC986B] my-7">Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center rounded-sm bg-[#F3F4F9] px-[10%] py-[5%]">
                {
                    realEstate.map(estate => <RealEstateCard
                        key={estate.id}
                        estate={estate}
                    ></RealEstateCard>)
                }
            </div>
            <Agents></Agents>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;