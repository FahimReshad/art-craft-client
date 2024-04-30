import { Link, useLoaderData } from "react-router-dom";
import ArtCraftSectionCard from "../Components/ArtCraftSectionCard";

const SeeArtCraft = ({}) => {
  const subCategories = useLoaderData();
  console.log(subCategories);
  return (
    <div className="container mx-auto grid md:grid lg:grid-cols-3 gap-16">
      {subCategories.map((subCategory) => (
        <ArtCraftSectionCard subCategory={subCategory}></ArtCraftSectionCard>
      ))}
    </div>
  );
};

export default SeeArtCraft;
