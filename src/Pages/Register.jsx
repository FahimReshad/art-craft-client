import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const userRegistration = { name, email, photoURL, password };
    console.log(userRegistration);
    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters or longer");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password should have at least one upperCase character"
      );
    } else if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password should have at least one lowerCase characters"
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          navigate("/");
          toast.success("Registration successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
        {/* register design side  */}
        <div className="relative hidden h-full items-center justify-center bg-[#33232A] md:flex md:w-[60%] lg:w-[40%]">
          <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#33232A] to-[#33232A]"></div>
          <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#33232A] to-[#33232A]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#33232A] to-[#33232A] transition-all"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#33232A] to-[#33232A]"></div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-medium text-white/80 font-lora">
              Welcome
            </h2>
            <p className="animate-pulse text-sm text-white/60 font-lora">
              Please Enter Your Information
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#33232A]">
            Registration Here
          </h2>
          <form
            onSubmit={handleRegistration}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="text"
              placeholder="PhotoURL"
              name="photoURL"
            />
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-[14px] text-gray-400 font-lora">
              Do you have an account ?{" "}
              <Link to="/login" className="text-[#33232A] font-semibold ">
                Please Login
              </Link>
            </p>
            <input
              className="w-[80%] rounded-lg bg-[#33232A] px-6 py-2 font-medium text-white md:w-[60%]"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
