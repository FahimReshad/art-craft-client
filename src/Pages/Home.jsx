import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftItem from "../Components/CraftItem";

const Home = () => {
    const addCrafts = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-16">
            {
                addCrafts.slice(0,6).map(addCraft => <CraftItem addCraft={addCraft}></CraftItem>)
            }
            </div>
        </div>
    );
};

export default Home;