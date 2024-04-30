/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ArtAndCraftCategory = ({addCraft}) => {
    const {subCategoryName, image, shortDes,} = addCraft;
    return (
        <>
        <Link to={`/see/${subCategoryName}`}>
        <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <img className="h-[250px] lg:h-[350px] w-full rounded-lg object-cover" src={image} alt="card navigate ui" />
        <div className="grid gap-2">
          <h1 className="text-xl font-bold">{subCategoryName}</h1>
          <p className="text-sm text-gray-500 font-semibold font-lora">{shortDes}</p>
        </div>     
        </div>
        </Link>
        </>
    );
};

export default ArtAndCraftCategory;