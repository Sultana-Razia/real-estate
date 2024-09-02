import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-[90%] mx-auto mt-6">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;