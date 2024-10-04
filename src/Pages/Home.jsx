/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CraftItem from "../Components/CraftItem";
import ArtAndCraftCategory from "../Components/ArtAndCraftCategory";
import OurPartner from "../Components/OurPartner";


const Home = () => {
    const addCrafts = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <div>
                    <h1 className="text-center text-3xl my-2 md:my-6 lg:my-10 font-semibold font-lora text-[#8F3034] "> Craft Items Section</h1>
                    <p className="md:w-1/2 lg:w-1/3 mx-auto text-center font-semibold">Welcome to our Craft Items section! Explore a diverse collection of handcrafted treasures made with love and skill by talented artisans from around the world. Whether you're looking for unique home decor pieces, personalized gifts, or beautiful accessories, you'll find something special here.</p>
                </div>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-16">
                
                {
                    addCrafts.slice(0,6).map(addCraft => <CraftItem addCraft={addCraft}></CraftItem>)
                }
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-center text-3xl my-2 md:my-6 lg:my-10 font-semibold font-lora text-[#8F3034] ">Art & Craft Categories Section</h1>
                    <p className="md:w-1/2 lg:w-1/3 mx-auto text-center font-semibold">Welcome to our Art and Craft Items section! Dive into a world of creativity and inspiration with our handpicked collection of artisanal treasures. From stunning paintings and sculptures to unique handmade crafts, there's something here to ignite your imagination and add a touch of creativity to your life.</p>
                </div>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-16">
            {
                addCrafts.slice(1,7).map(addCraft => <ArtAndCraftCategory addCraft={addCraft}></ArtAndCraftCategory>)
            }
            </div>
            </div>
            <OurPartner></OurPartner>
            
        </div>
    );
};

export default Home;