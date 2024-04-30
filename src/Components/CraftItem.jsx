import { Link } from "react-router-dom";

const CraftItem = ({ addCraft }) => {
  const { _id, image, item, shortDes, price } = addCraft;
  return (
    <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg">
      <img
        className="h-[250px] lg:h-[350px] w-full rounded-lg object-cover"
        src={image}
        alt="card navigate ui"
      />
      <div className="grid gap-2">
        <h1 className="text-xl font-bold">{item}</h1>
        <p className="text-sm text-gray-500 font-semibold font-lora">
          {shortDes}
        </p>
        <div className="text-lg font-semibold">$ {price}</div>
      </div>

      <Link to={`/viewDetails/${_id}`}>
        <button className="btn bg-[#8F3034] text-white font-lora rounded-md border border-black px-4 dark:border-white  dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CraftItem;
