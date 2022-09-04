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

const SelectWeight = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#ececec] flex items-center justify-center flex-col py-[2rem]">
      <p className="max-w-[25rem] text-center text-blue-700 text-[.9rem] font-medium uppercase">
        Goal
      </p>
      <h1 className="text-[1.5rem] font-bold">What is your goal?</h1>
      <div className="flex items-center justify-center flex-col gap-y-[1rem] py-[2rem]">
        <div className="w-[20rem] h-[7rem] bg-blue-500 py-[2rem] flex items-center justify-center text-white rounded-[.3rem]">
          <p>Lose Weight</p>
        </div>
        <div className="w-[20rem] h-[7rem] bg-[#e6faff] py-[2rem] flex items-center justify-center text-[#797979]  rounded-[.3rem]">
          <p>Build Muscle</p>
        </div>
        <div className="w-[20rem] h-[7rem] bg-[#e6faff] py-[2rem] flex items-center justify-center text-[#797979]  rounded-[.3rem]">
          <p>Keep Fit</p>
        </div>
      </div>
      <Link href="./dashboard">
        <button className="w-[15rem] bg-blue-500 p-3 my-2 text-white rounded-[2rem]">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default SelectWeight;
