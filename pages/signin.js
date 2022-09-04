import TextField from "@mui/material/TextField";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Lottie from "react-lottie-player";
import lottieJson from "../public/lottie/lotie_workout.json";
import Axios from "../api/axios";
import { setCookie } from "cookies-next";
import Link from "next/link";

import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //use form end
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const onSubmit = async (data) => {
    // handleLogin(data.username, data.password);
  };

  return (
    <div className="">
      <form
        className="flex w-screen h-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 flex justify-evenly items-center ">
          <div className="hidden lg:flex max-w-[35rem] ">
            <Lottie
              id="firstLottie"
              loop
              animationData={lottieJson}
              play
              className=""
            />
          </div>
          <div className="w-full md:w-[30rem] bg-[#ececec] flex flex-col justify-center items-center shadow-lg py-[6rem] rounded-lg mx-6 lg:mx-0">
            <Image src="/frame.svg" alt="" width="100rem" height="100rem" />
            <div className="h-[1rem]"></div>
            {incorrect && (
              <div
                className="flex w-[20rem] justify-between items-center self-center border-2 border-red-500 px-3 py-2 text-red-500 rounded-md mb-3"
                onClick={() => setIncorrect(false)}
              >
                <small>Incorrect username or password. please try again!</small>
                <ClearIcon fontSize="small" className="cursor-pointer" />
              </div>
            )}
            <TextField
              id="outlined-basic"
              label="Email address "
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              className="w-[20rem] my-2 "
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-xs text-red-600">
                Email address is required
              </span>
            )}
            <div className="h-[1rem]"></div>
            <TextField
              id="outlined-basic"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              variant="outlined"
              className="w-[20rem] my-2 "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
            <Link href="/select_gender">
              <button
                className="w-[20rem] bg-blue-500 p-3 my-2 text-white rounded-[2rem]"
                type="submit"
              >
                {isLoading ? (
                  <CircularProgress style={{ color: "white" }} size="20px" />
                ) : (
                  "Sign In"
                )}
              </button>
            </Link>
            <p>
              Don't have any account?{" "}
              <Link href="./signup">
                <span className="text-blue-500 cursor-pointer">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
