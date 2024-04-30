import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          console.log(result.user);
          navigate(from);
          toast.success("Login successfully");
          
        }
        else{
         return toast.error('Plz registration first')
        }
      })
      .catch((error) => { 
       console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          navigate(from);
          toast.success("You login successfully");
        }
      })
      .catch(() =>
        toast.error("Your email & password do not match each other")
      );
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
    .then(result => {
      console.log(result);
      if(result.user){
        navigate(from)
        toast.success('Your login successfully')
      }
    })
    .catch((error) => {
      console.log(error);
      // toast.error("Your email or number and password do not match each other")
    })
  }

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
            <h2 className="text-3xl font-medium text-white/80 ">
              Welcome Back
            </h2>
            <p className="animate-pulse text-sm text-white/60">
              Please Enter Your Information
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#33232A]">
            Login Here
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#33232A] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#33232A]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-[#33232A] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#33232A]/50 md:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-[14px] text-gray-400">
              Do not have an account ?{" "}
              <Link to="/register" className="text-[#8EA7E9] ">
                Create one
              </Link>
            </p>
            <input
              className="w-[80%] rounded-lg bg-[#33232A] px-6 py-2 font-medium text-white md:w-[60%] hover:cursor-pointer hover:scale-95 transition"
              type="submit"
            />
          </form>
          {/* divider  */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <div className="flex gap-6 mx-auto w-1/2">
          <div
            onClick={handleGoogleSignIn}
            className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <div className="flex h-full w-[50%] items-center bg-[#33232A] pl-4 text-sm text-white hover:cursor-pointer">
              Sign With
            </div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#33232A] group-hover:hidden"></span>
            <button className="pr-4 text-4xl font-bold text-[#33232A] hover:cursor-pointer">
              G+
            </button>
          </div>
          <div
            onClick={handleFacebookSignIn}
            className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <div className="flex h-full w-[50%] items-center bg-[#33232A] pl-4 text-sm text-white hover:cursor-pointer">
              Sign With
            </div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#33232A] group-hover:hidden"></span>
            <button className="pr-4 text-4xl font-bold text-[#33232A] hover:cursor-pointer">
            <FaFacebook />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
