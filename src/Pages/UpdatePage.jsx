import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const artCraft = useLoaderData();
  console.log(artCraft);
  const {
    _id,
    image,
    item,
    subCategoryName,
    customization,
    shortDes,
    price,
    rating,
    processingTime,
    stockStatus,
  } = artCraft;

  const { user } = useContext(AuthContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);

  const [selectedValues, setSelectedValues] = useState(customization);
  const [selectedValue, setSelectedValue] = useState(stockStatus);
  // array of options
  const optionss = [" Yes", " No"];
  const options = [" In stock", " Made to Order"];

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item = form.item_name.value;
    const subCategoryName = form.subcategory_Name.value;
    const customization = selectedValues;
    const shortDes = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processing_time.value;
    const userNames = user.displayName;
    const stockStatus = selectedValue;
    const email = user.email;
    const updatedCraft = {
      image,
      item,
      subCategoryName,
      customization,
      shortDes,
      price,
      rating,
      processingTime,
      stockStatus,
      email,
      userNames,
    };
    console.log(updatedCraft);
    fetch(`https://art-craft-store-nine.vercel.app/craft/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          if (data.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: "Art&Craft Item Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
          form.reset();
        }
      });
  };

  return (
    <section className="p-6  dark:text-gray-900">
      <form
        onSubmit={handleUpdate}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstName" className="text-sm font-semibold">
                Image
              </label>
              <input
                id="firstName"
                name="image"
                type="text"
                defaultValue={image}
                placeholder=" use image URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 dark:bg-gray-100 py-2 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastName" className="text-sm font-semibold">
                Item
              </label>
              <input
                id="lastName"
                name="item_name"
                type="text"
                defaultValue={item}
                placeholder=" item_name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 dark:bg-gray-100 py-2 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm font-semibold">
                Subcategory Name
              </label>
              <input
                id="email"
                type="text"
                name="subcategory_Name"
                defaultValue={subCategoryName}
                placeholder="subcategory_Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:bg-gray-100 py-2 px-2"
              />
            </div>

            <div
              onClick={() => setIsOpenn(!isOpenn)}
              className="mx-auto flex w-60 h-10 mt-5 items-center justify-between rounded-xl bg-white px-6 py-2 border dark:bg-gray-100"
            >
              <h1 className="font-medium text-gray-600">{selectedValues}</h1>
              <svg
                className={`${
                  isOpenn ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* dropdown - options  */}
            <div
              className={`${
                isOpenn
                  ? "visible top-0 opacity-100"
                  : "invisible -top-4  opacity-0"
              } relative mx-auto my-4 w-36 rounded-xl py-4 border duration-300`}
            >
              {optionss?.map((optionss, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValues(e.target.textContent);
                    setIsOpenn(false);
                  }}
                  className=" w-full text-gray-500 hover:bg-gray-100"
                >
                  {optionss}
                </div>
              ))}
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="text-sm font-semibold">
                {" "}
                Short description
              </label>
              <input
                id="address"
                type="text"
                name="shortDescription"
                placeholder=" short description"
                defaultValue={shortDes}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 py-8 dark:bg-gray-100 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm font-semibold">
                Price
              </label>
              <input
                id="city"
                type="text"
                name="price"
                defaultValue={price}
                placeholder="$00.0"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:bg-gray-100 focus:dark:ring-violet-600 dark:border-gray-300 py-2 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm font-semibold">
                Rating
              </label>
              <input
                id="state"
                name="rating"
                type="text"
                defaultValue={rating}
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:bg-gray-100 focus:dark:ring-violet-600 dark:border-gray-300 py-2 px-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm font-semibold">
                Processing Time
              </label>
              <input
                id="zip"
                type="text"
                name="processing_time"
                defaultValue={processingTime}
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:bg-gray-100 focus:dark:ring-violet-600 dark:border-gray-300 py-2 px-2"
              />
            </div>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="mx-auto flex w-60 h-10 mt-5 items-center justify-between rounded-xl bg-white px-6 py-2 border col-span-full sm:col-span-2 -ml-1"
            >
              <h1 className="font-medium text-gray-600">{selectedValue}</h1>
              <svg
                className={`${
                  isOpen ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            {/* dropdown - options  */}
            <div
              className={`${
                isOpen
                  ? "visible top-0 lg:right-36 opacity-100"
                  : "invisible -top-4 -right-10 opacity-0"
              } relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}
            >
              {options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue(e.target.textContent);
                    setIsOpen(false);
                  }}
                  className="px-6 py-2 text-gray-500 hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="col-span-full sm:col-span-2"></div>
            <div className="col-span-full sm:col-span-2">
              <input
                type="submit"
                className="btn bg-[#33232A] text-white text-xl font-lora w-full"
                value="Update"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdatePage;
