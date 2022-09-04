import TextField from "@mui/material/TextField";
import Image from "next/image";
import * as React from "react";
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
import BottomFooter from "../components/BottomFooter";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";

const SelectWeight = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="w-[100%] h-[100%] bg-[#ececec] flex items-center justify-center flex-col py-[2rem] gap-y-[.7rem] pb-[0]">
      <h1 className="text-[1.5rem] font-bold">Dashboard</h1>
      <div className="w-[25rem] h-[7rem] bg-[#e6faff] py-[2rem] flex items-center justify-center gap-x-[.5rem] rounded-[.3rem]">
        <div className="rate-clip bg-blue-500 p-[1rem] text-white">84</div>
        <div className="flex items-start justify-center flex-col rounded-[.3rem]">
          <h1 className="text-[1.2rem] font-bold">Health Score</h1>
          <p className="max-w-[12rem] text-[#797979] text-[.8rem] leading-4">
            Based on overall test your health score is 84
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[.7rem] w-[25rem] text-white">
        <div className="w-[12.5rem] bg-blue-500  py-[1rem] px-[2rem] rounded-[.3rem]">
          <p className="text-[1.2rem]">BMI</p>{" "}
          <h1 className="text-[2rem] font-semi-bold">26.6</h1>
          <p className="text-[.8rem]"> Kg/m2 </p>
        </div>
        <div className="w-[12.5rem] bg-blue-500  py-[1rem] px-[2rem] rounded-[.3rem]">
          <p className="text-[1.2rem]">BMI</p>{" "}
          <h1 className="text-[2rem] font-semi-bold">26.6</h1>
          <p className="text-[.8rem]"> Kg/m2 </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[.7rem] w-[25rem] text-white">
        <div className="w-[12.5rem] bg-blue-500  py-[1rem] px-[2rem] rounded-[.3rem]">
          <p className="text-[1.2rem]">BMI</p>{" "}
          <h1 className="text-[2rem] font-semi-bold">26.6</h1>
          <p className="text-[.8rem]"> Kg/m2 </p>
        </div>
        <div className="w-[12.5rem] bg-blue-500  py-[1rem] px-[2rem] rounded-[.3rem]">
          <p className="text-[1.2rem]">BMI</p>{" "}
          <h1 className="text-[2rem] font-semi-bold">26.6</h1>
          <p className="text-[.8rem]"> Kg/m2 </p>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default SelectWeight;
