import Us from "../../assets/images/us.png";
import Br from "../../assets/images/brazil.png";
import Apss from "../../assets/images/apps.png";
import Google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../../assets/images/Screenshot_2-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Imagelog from "../../assets/images/login_bg.cb29655a.svg.svg";
import { FaShopify, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Email from "../../assets/images/Frame.svg";
import Passsw from "../../assets/images/svg-1.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [isLeng, setIsLeng] = useState(false);
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("password");

  let navigate = useNavigate();

  const onSubmit = (data, e) => {
    e.preventDefault();

    axios
      .post(
        `https://nimda.blazingwa.com/api/login-type`,
        {
          ...data,
          type: "code-email",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.access_token);
        localStorage.setItem("token", res.data.data.access_token);
        toast.success("Berhasil Login !", {
          position: toast.POSITION.TOP_CENTER,
        });
        // navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Gagal Login !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="w-full h-screen relative bg-[#EFEEF6]">
      <div className="block md:flex justify-center absolute h-20 py-3 px-10 bg-[#EFEEF6]  w-full top-0">
        <div className="flex justify-center md:justify-start">
          <img src={Logo} className="w-32  md:w-56" />
        </div>

        <div className="w-full h-auto flex justify-center my-2 md:justify-end">
          <div
            onClick={() => setIsLeng(!isLeng)}
            className="w-48 p-3 rounded-md relative cursor-pointer bg-[#F5F6FA] flex items-center justify-between"
          >
            <img src={Us} className="w-6 h-6   rounded-full" />
            <label className="ml-2 cursor-pointer">English</label>
            {isLeng ? (
              <IoIosArrowUp className="w-4 h-4 text-black" />
            ) : (
              <IoIosArrowDown className="w-4 h-4 text-black" />
            )}

            {isLeng ? (
              <div className="absolute top-14 w-48 p-3 left-0 bg-[#F5F6FA] ">
                <div className="flex items-center justify-between">
                  <img src={Us} className="w-6 h-6   rounded-full" />
                  <label className="ml-2 cursor-pointer">English</label>
                  <AiFillCheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="w-full border my-4"></div>
                <div className="flex items-center justify-between">
                  <img src={Br} className="w-6 h-6   rounded-full" />
                  <label className="ml-2 cursor-pointer">Protuguese</label>
                  <div></div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full pt-[31rem] md:pt-0 h-full flex justify-center items-center">
        <div className="bg-[#f8f7fc] rounded-sm w-full md:w-[70%] p-2 md:p-8 block md:flex ">
          <div className="w-full md:w-1/2 p-8 border-r-2 border-gray-200">
            <img src={Imagelog} className="" />
            <div className="flex w-full items-center  justify-center">
              <img src={Apss} className="w-[24%] " />

              <img src={Google} className="w-[29%]" />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-[#23A455] text-2xl text-center md:text-left font-semibold">
              Login
            </h2>

            <div className="block md:flex justify-between my-8">
              <button className="w-full my-4 md:my-0 md:w-[25%] flex p-3 text-xs bg-white rounded-md items-center justify-center">
                <FcGoogle className="w-5 h-5 mr-3" /> Google
              </button>

              <button className="w-full my-4 md:my-0 md:w-[25%] flex p-3 text-xs  rounded-md text-white bg-blue-900 items-center justify-center">
                <FaFacebookF className="w-5 h-5 mr-3" /> Facebook
              </button>

              <button className="w-full my-4 md:my-0 md:w-[25%] flex  p-3 text-xs  rounded-md text-white bg-[#95BF46] items-center justify-center">
                <FaShopify className="w-5 h-5 mr-3" /> Shopify
              </button>
            </div>
            <h2 className="lines">
              <span className="title text-gray-400">Or</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    className="pl-12  border-gray-400 appearance-none border rounded-md  w-full h-12 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Entar your email"
                    {...register("email")}
                  />
                  <img
                    src={Email}
                    className="absolute top-3 left-2 border-r pr-2 border-gray-200 "
                  />
                </div>
              </div>

              <div className=" mt-6 ">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="pl-12  border-gray-400 appearance-none border rounded-md  w-full h-12 py-2  pr-10 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type={password}
                    placeholder="Password"
                    {...register("password")}
                  />
                  <img
                    src={Passsw}
                    className="absolute top-3 left-2 border-r pr-2 border-gray-200 "
                  />
                  {password === "password" ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setPassword("text")}
                      className="absolute right-4 top-4 w-4 h-4 cursor-pointer"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setPassword("password")}
                      className="absolute right-4 top-4 w-4 h-4 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div className="flex mt-8 justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 bg-[#23A455] "
                  />
                  <span className="ml-2 text-sm text-gray-700 flex">
                    Remember
                  </span>
                </div>
                <label className="underline">Forgot password?</label>
              </div>
              <input
                type="submit"
                value="Login"
                className="w-full px-3 mt-8 py-4 text-white bg-[#23A455] cursor-pointer rounded-md"
              />
            </form>
            <p className="mt-8 text-center">
              Do not have an account?{" "}
              <span className="text-[#23A455]"> Sign up for free trial </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
