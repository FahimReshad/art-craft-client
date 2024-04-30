
import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import MyartCraftCard from "../Components/MyartCraftCard";

const MyArtCraft = () => {
  // const {user} = useContext(AuthContext) || {};
  const {user} = UseAuth() || {};

  console.log(user);
  const [myItem, setMyItem] = useState([]);
  const [artCraft, setArtCraft] = useState(false);
  useEffect(()=> {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMyItem(data)
    })
  }, [user, artCraft])
  console.log(myItem);
  return (
    <div className="container mx-auto grid md:grid lg:grid-cols-3 gap-16">
    {
    myItem.map(items => <MyartCraftCard key={items._id} items={items} artCraft={artCraft} setArtCraft={setArtCraft}></MyartCraftCard>)
    }
    
    </div>
  );
};

export default MyArtCraft;
