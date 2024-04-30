import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-[1000]'>
            <Navbar></Navbar>
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;