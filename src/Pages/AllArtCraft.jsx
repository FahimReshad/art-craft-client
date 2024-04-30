import { useLoaderData } from "react-router-dom";
import AllArtCraftDataCard from "../Components/AllArtCraftDataCard";

const AllArtCraft = () => {
  const allArtCraftData = useLoaderData();
  console.log(allArtCraftData);

  return (
    <>
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 mt-8">
        <thead>
          <tr className="bg-[#8F3034] text-white grid grid-cols-4">
            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
            <th className="py-4 px-6 text-lg text-left border-b ">Item Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
      </table>
      <div>
        {allArtCraftData.map((artCraftData) => (
          <AllArtCraftDataCard
            artCraftData={artCraftData}
          ></AllArtCraftDataCard>
        ))}
      </div>
    </>
  );
};

export default AllArtCraft;
