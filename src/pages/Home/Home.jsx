import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import RealEstateCard from "./RealEstateCard";


const Home = () => {

    const realEstate = useLoaderData();
    console.log(realEstate);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>Properties</h2>
            <div className="grid grid-cols-3 gap-10 items-center rounded-sm bg-[#F3F4F9] px-[10%] py-[5%]">
                {
                    realEstate.map(estate => <RealEstateCard
                        key={estate.id}
                        estate={estate}
                    ></RealEstateCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;