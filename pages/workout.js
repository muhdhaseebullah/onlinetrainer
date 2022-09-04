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
import BottomFooter from "../components/BottomFooter";
const Workout = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#ececec] flex items-center justify-center flex-col py-[2rem]">
      <h1 className="text-[1.5rem] font-bold">Workout</h1>
      <p className="max-w-[25rem] text-center text-blue-700 text-[.9rem] font-medium uppercase">
        Beginner
      </p>
      <div className="flex items-center justify-center flex-col gap-y-[1rem] py-[2rem]">
        <div className="w-[20rem] h-[7rem] bg-blue-500 py-[2rem] flex items-center justify-between text-white rounded-[.3rem] px-[2rem]">
          <div>
            <p>Abs </p>
            <p>Beginners</p>
            <p>...</p>
          </div>
          <div>
            <img src="./abs.svg" className="h-[7rem]" alt="" />
          </div>
        </div>
        <div className="w-[20rem] h-[7rem] bg-blue-500 py-[2rem] flex items-center justify-between text-white rounded-[.3rem] px-[2rem]">
          <div>
            <p>Chest </p>
            <p>Beginners</p>
            <p>...</p>
          </div>
          <div>
            <img src="./chest.svg" className="h-[7rem]" alt="" />
          </div>
        </div>
        <div className="w-[20rem] h-[7rem] bg-blue-500 py-[2rem] flex items-center justify-between text-white rounded-[.3rem] px-[2rem]">
          <div>
            <p>Arm </p>
            <p>Beginners</p>
            <p>...</p>
          </div>
          <div>
            <img src="./arms.svg" className="h-[7rem]" alt="" />
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Workout;
