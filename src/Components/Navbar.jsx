import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
  const handleToggle = (e) => {
    if(e.target.checked){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
  };

  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success("SignOut successfully")
  })
  .catch(() => {
      toast.error("SignOut Unsuccessful")
  })
  }



  const navLinks = (
    <>
      {
        <li>
        <NavLink to="/" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>Home</NavLink>
      </li>
      }
      {
        <li>
        <NavLink to="/allArtCraftItems" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>All Art & craft Items</NavLink>
      </li>
      }
      {
        user &&
        <li>
        <NavLink to="/addCraftItem" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>Add Craft Item</NavLink>
      </li>
      }
      {
        user &&
        <li>
        <NavLink to="/myArtCraft" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>My Art&Craft List</NavLink>
      </li>
      }
    </>
  );

  return (
    <div className="navbar text-white bg-[#33232A] md:px-10 py-4 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-lora text-black font-semibold"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost lg:text-2xl font-lora">Artistry</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1 text-lg font-lora">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4">
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        <div className="flex gap-6">
          {
         user ? <>
         <div className="pointer group relative mx-auto my-14 flex h-10 justify-center">
         <div className="relative group">
                    <img className="size-[40px] bg-slate-500 object-cover rounded-full" src={user.photoURL} alt="avatar navigate ui" />
                </div>
                <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100  ">
                <p className="rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">{user.displayName}</p>
                <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
            </div>
         </div>
          <button className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        : ""
                    }>
          <button onClick={handleLogOut} className="lg:text-lg font-lora  lg:btn btn-outline btn-error">LogOut</button>
        </button>
          </>
       : <NavLink to="/login" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>
          <button className="text-lg font-lora lg:btn btn-outline btn-success">Login</button>
        </NavLink>
        }
        </div>
       
        <NavLink to="/register" className={({ isActive}) =>
                      isActive
                        ? "text-[#8F3034] font-lora font-semibold"
                        
                        
                        : ""
                    }>
          <button className="lg:text-lg font-lora lg:btn btn-outline btn-error">Register</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
