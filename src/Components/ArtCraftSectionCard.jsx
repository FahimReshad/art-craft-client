import { Link } from "react-router-dom";


const ArtCraftSectionCard = ({subCategory}) => {
    console.log(subCategory);
    const {_id, image, item, customization, price, rating, stockStaatus} = subCategory;
    return (
        <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
      <img className="h-[275px] w-full rounded-lg object-cover" src={image} alt="Image not found" />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold font-lora">{item}</h1>
        <p className=" text-gray-500 font-semibold "><span className="text-black font-semibold font-lora">Customization</span>: {customization}</p>
        <div className="flex justify-around -ml-16 md:-ml-10 lg:-ml-20">
        <div className="text-lg font-semibold">Price: {price}</div>
        <div className="text-lg font-semibold">Rating: {rating}</div>
        
        </div>
        <div className="text-lg font-semibold">Stock Status: {stockStaatus}</div>
      </div>
      <div>
        <Link to={`/viewDetails/${_id}`}><button className="rounded-lg px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base w-full bg-[#8F3034]">View Details</button></Link>
        
      </div>
    </div>
    );
};

export default ArtCraftSectionCard;