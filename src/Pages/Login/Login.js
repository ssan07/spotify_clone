import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import spotifylogo from "../Home/spotifylogo.jpeg";

function Login() {
  const navigate = useNavigate();
  const [error, seterror] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    var pwd = document.getElementById("pwd").value;

    if (pwd === "hi") {
      navigate("/home");
    } else {
      seterror("wrong password");
    }
  }
  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden bg-[#121212]">
        <div className="log relative flex justify-center text-[1.5rem] items-center w-full h-full">
          <form
            className="form1 text-white p-5 text-center align-middle rounded-lg shadow-lg z-10 flex flex-col justify-evenly"
            type="submit"
            onSubmit={handleSubmit}
          >
            <div className="w-full align-middle text-center ">
              <img
                className="h-[50px] w-[50px] mx-auto rounded-[50%]"
                src={spotifylogo}
              />
            </div>
            <div className="loginc font-bold text-center pb-2 text-white xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[2rem]">
              Welcome back
            </div>

            <label className="text-left text-[15px]">Email or Username:</label>
            <input
              className="rounded-lg h-[45px] bg-transparent border-[1px] border-white text-center"
              type="text"
              required
            />

            <div className="p-2"></div>
            <label className="text-left text-[15px]">Password:</label>
            <input
              className="rounded-lg h-[45px] bg-transparent border-[1px] border-white text-center"
              id="pwd"
              type="password"
              required
            />
            <div className="p-2"></div>
            <div className="submi">
              <button
                type="submit"
                className="submitl bg-[#1ed760] text-black w-full mt-3 p-1.5 rounded-[25px]"
              >
                submit
              </button>
              <div className="error">{error}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
