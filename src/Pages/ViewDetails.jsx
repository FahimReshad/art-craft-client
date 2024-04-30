import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const viewDetails = useLoaderData();
    const {image, item, subCategoryName, shortDes, price, rating, processingTime, stockStatus, userEmails, userNames} = viewDetails;
    return (
       <div>
        
         <div className="container mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md ">
        {/* Card Image */}
        <img className="h-[550px] w-full object-cover rounded-2xl" src={image} alt="Image not found" />
        {/* Card Heading */}
        <div className="space-y-2 flex items-center gap-16">
            <h2 className="text-slate-800 sm:text-lg md:text-2xl font-semibold font-lora"><span className="font-bold text-black">Item:</span> {item}</h2>
         <h3 className="text-slate-800 sm:text-lg md:text-2xl font-semibold font-lora"><span className="font-bold text-black">Sub Category:</span> {subCategoryName}</h3>
        </div>
        <div>
            <h1 className="text-xl font-semibold font-lora">{shortDes}</h1>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
            <h2 className="font-semibold md:text-xl lg:text-2xl">Price: ${price}</h2>
            <h2 className="font-semibold md:text-xl lg:text-2xl">rating: {rating}</h2>
            <h2 className="font-semibold md:text-xl lg:text-2xl">processingTime: {processingTime}</h2>
            
        </div>
        <div className="mt-5 flex items-center justify-between">
            <h2 className="font-semibold md:text-xl lg:text-2xl">stockStatus: ${stockStatus}</h2>
            <h2 className="font-semibold md:text-xl lg:text-2xl">userEmail: {userEmails}</h2>
            <h2 className="font-semibold md:text-xl lg:text-2xl">userName: {userNames}</h2>
            
        </div>
      </div>
       </div>
    );
};

export default ViewDetails;