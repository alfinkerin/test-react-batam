import SidePages from "../components/SidePage";
import Us from "../../../assets/images/us.png";
import Br from "../../../assets/images/brazil.png";
import Df from "../../../assets/images/df.svg";
import Id from "../../../assets/images/id.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ReactFlagsSelect from "react-flags-select";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Apss from "../../../assets/images/apps.png";
import Google from "../../../assets/images/google.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLeng, setIsLeng] = useState(false);
  const [selected, setSelected] = useState("");
  const [codeCountry, setCodeCountry] = useState("");
  const [text, setText] = useState("-");
  const [active, setActive] = useState(Df);
  const [isWa, setIsWa] = useState(false);
  const [password, setPassword] = useState("password");
  const [password2, setPassword2] = useState("password");
  const [isCheckbox, setIsCheckbox] = useState(false);
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data, e) => {
    e.preventDefault();

    axios
      .post(
        `https://nimda.blazingwa.com/api/register`,
        {
          ...data,
          mobile_code: text.substring(1),
          country: codeCountry,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Pendaftaran Berhasil !", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/product");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Pendaftaran Gagal !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const data = [
    {
      id: "Default",
      name: "",
      prefix: "-",
      flag: Df,
    },
    {
      id: "ID",
      name: "Indonesia",
      prefix: "+62",
      flag: Id,
    },
    {
      id: "US",
      name: "United State",
      prefix: "+1",
      flag: Us,
    },
  ];

  useEffect(() => {
    if (text) {
      const flag = data.find((e) => text === e.prefix);
      if (flag) {
        setActive(flag);
      } else {
        setActive(undefined);
      }
    } else {
      setActive(undefined);
    }
  }, [text]);

  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <SidePages />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-20 py-8">
        <div className="w-full h-auto flex justify-end">
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
        <h1 className="my-4 text-2xl font-semibold text-[#23A455]">
          Start your free trial
        </h1>

        <div className="w-full flex cursor-pointer items-center">
          <HiOutlineArrowLeft className="w-4 h-4 text-[#0E71C3]" />
          <span className="text-[#0E71C3] ml-2 text-sm my-4">Back</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="block md:flex w-full justify-between">
            <div className="w-full md:w-1/2 mr-5 ">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                First Name*
              </label>
              <input
                className=" border-gray-400 appearance-none border rounded-md  w-full h-10 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Last Name*
              </label>
              <input
                className=" border-gray-400 appearance-none border rounded-md  w-full h-10 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=" Last Name"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              className=" border-gray-400 appearance-none border rounded-md  w-full h-10 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=" Last Name"
              {...register("email")}
            />
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Country
            </label>
            <ReactFlagsSelect
              selected={selected}
              countries={["US", "ID"]}
              onSelect={(code) => {
                if (code === "ID") {
                  setSelected(code);
                  setCodeCountry("62");
                } else {
                  setSelected(code);
                  setCodeCountry("1");
                }
              }}
            />
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Whatsapp Number (with country code)*
            </label>
            <div className="relative">
              <div className="flex ">
                <div
                  onClick={() => setIsWa(!isWa)}
                  className="mr-6 w-24 border cursor-pointer h-10 py-2 px-2 flex justify-center rounded-md"
                >
                  {active ? (
                    <img src={active.flag} className="w-10 " />
                  ) : (
                    "None"
                  )}
                </div>
                <div className="w-full flex">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="absolute w-[15%] md:w-[10%] rounded-md h-10 bg-transparent px-1 md:px-4 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
                  />
                  <input
                    type="number"
                    {...register("mobile")}
                    className=" w-full border rounded-md h-10 pl-12 pr-4"
                  />
                </div>
              </div>
              {isWa ? (
                <div className="absolute top-11 z-10 bg-white py-2 px-4 rounded-md border w-48">
                  {data.map((x, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setActive(x.flag);
                        setText(x.prefix);
                        setIsWa(false);
                      }}
                      className="my-4 cursor-pointer"
                    >
                      {x.name}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="block md:flex w-full justify-between mt-5">
            <div className="w-full md:w-1/2 mr-5 ">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  className=" border-gray-400 appearance-none border rounded-md  w-full h-10 py-2 pl-3 pr-10 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type={password}
                  placeholder="Password"
                  {...register("password")}
                />
                {password === "password" ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setPassword("text")}
                    className="absolute right-4 top-3 w-4 h-4 cursor-pointer"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setPassword("password")}
                    className="absolute right-4 top-3 w-4 h-4 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className=" border-gray-400 appearance-none border rounded-md  w-full h-10 py-2 pl-3 pr-10 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type={password2}
                  placeholder="Confirm Password"
                  {...register("password_confirmation")}
                />
                {password2 === "password" ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setPassword2("text")}
                    className="absolute right-4 top-3 w-4 h-4 cursor-pointer"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setPassword2("password")}
                    className="absolute right-4 top-3 w-4 h-4 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          <label className="inline-flex items-center my-8">
            <input
              type="checkbox"
              onClick={() => setIsCheckbox(!isCheckbox)}
              className="form-checkbox h-5 w-5 text-gray-600 bg-[#23A455] "
            />
            <span className="ml-2 text-sm text-gray-700 flex">
              I agree to
              <div className="text-[#23A455] mx-1">Terms and conditions</div>
              and <div className="text-[#23A455] mx-1"> Privacy Policy </div>
            </span>
          </label>
          <div className="">
            {isCheckbox ? (
              <input
                type="submit"
                value="Create an account"
                className="w-full px-3 py-4 text-white bg-[#23A455] cursor-pointer rounded-md"
              />
            ) : (
              <input
                type="submit"
                value="Create an account"
                className="w-full px-3 py-4 text-white bg-gray-300 rounded-md cursor-not-allowed"
                disabled
              />
            )}
          </div>
          <div className="text-center w-full flex justify-center  my-5 ">
            <p className="flex">
              Already have an account?
              <div className="text-[#23A455] mx-1">Login</div>
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-1/2 flex justify-end items-center">
              <img src={Apss} className="w-[52%] " />
            </div>
            <div className="w-1/2 flex justify-start items-center">
              <img src={Google} className="w-[65%]" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
