import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="w-full flex justify-center items-center h-screen bg-green-600">
        <div className="p-10 w-[80%] rounded-md bg-white">
          <p className="text-3xl mb-20 font-semibold text-center">
            Routes Blazingwa
          </p>
          <p className="text-2xl my-10 font-bold uppercase">Public Routes:</p>
          <div className="flex ">
            <button
              className="p-3 bg-green-500 mx-4 rounded-md w-1/2 text-white text-2xl"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="p-3 bg-green-500 mx-4 rounded-md w-1/2 text-white text-2xl"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>

          <p className="text-2xl my-10 font-bold uppercase">Private Routes:</p>
          <div className="flex ">
            <button
              className="p-3 bg-green-500 mx-4 rounded-md w-1/2 text-white text-2xl"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
