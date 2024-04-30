/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyartCraftCard = ({items, artCraft, setArtCraft } ) => {
  
    const {_id, image, item, price, rating, customization, stockStatus, } = items;

    console.log(items);
    const handleDelete = _id => {
      console.log(_id);

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            
         fetch(`https://art-craft-store-nine.vercel.app/delete/${_id}`, {
          method: "DELETE",
         })
         .then(res => res.json())
         .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
              Swal.fire({
                  title: "Deleted!",
                  text: "Your Coffee has been deleted.",
                  icon: "success"
                });
                
                setArtCraft(!artCraft);
          }
         })
          }
        });
  }

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
        <div className="text-lg font-semibold">Stock Status: {stockStatus}</div>
      </div>
      <div className="flex gap-4 justify-between">
        <Link to={`/updatePage/${_id}`}><button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Update</button></Link>
        <button onClick={() => {handleDelete(_id)}} className="btn bg-[#8F3034] text-white font-semibold rounded-md border border-black px-6 dark:border-white dark:hover:text-slate-800 duration-300 hover:bg-[#8F3034]">Delete</button>
      </div>
    </div>
    );
};

export default MyartCraftCard;
