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

const Diet = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="w-[100%] h-[100%] bg-[#ececec] flex items-center justify-center flex-col py-[2rem] gap-y-[.7rem] pb-[0]">
      <h1 className="text-[1.5rem] font-bold">Diet</h1>
      <div className="flex items-center justify-between w-[30rem] py-[2rem]">
        <div className="flex items-center justify-between flex-col">
          <h1>SUN</h1>
          <p className="text-[.8rem] font-bold">10</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <h1>MON</h1>
          <p className="text-[.8rem] font-bold">11</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <h1>TUE</h1>
          <p className="text-[.8rem] font-bold ">12</p>
        </div>
        <div className="flex items-center justify-between flex-col bg-blue-500 text-white py-[.5rem] px-[.5rem] rounded-[1.5rem]">
          <h1>WED</h1>
          <p className="text-[.8rem] font-bold bg-[white] text-[#000000] rounded-full px-[.3rem]">
            13
          </p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <h1>THU</h1>
          <p className="text-[.8rem] font-bold">14</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <h1>FRI</h1>
          <p className="text-[.8rem] font-bold">15</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <h1>SAT</h1>
          <p className="text-[.8rem] font-bold">16</p>
        </div>
      </div>
      <div className="w-[30rem] bg-[#e6faff] py-[2rem] px-[2rem] flex items-center justify-start flex-col rounded-[.3rem] gap-y-[.5rem] ">
        <div className=" flex items-center justify-between w-[100%]">
          <h1 className="text-[1.2rem] font-bold">
            120
            <span className="text-[.9rem] font-light text-[#797979]">kcal</span>
          </h1>
          <h1 className="text-[#797979]">B R E A K F A S T</h1>
        </div>
        <div className="w-[100%] flex items-center justify-start gap-x-[1rem]">
          <img src="./d1.jpg" className="h-[5rem] rounded" alt="" />
          <div className="flex items-start justify-center flex-col rounded-[.3rem]">
            <p className="text-[1rem] leading-4">
              Salad with wheat & white egg
            </p>
            <h1 className="text-[1.2rem] font-bold">60 cal</h1>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-start gap-x-[1rem]">
          <img src="./d1.jpg" className="h-[5rem] rounded" alt="" />
          <div className="flex items-start justify-center flex-col rounded-[.3rem]">
            <p className="text-[1rem] leading-4">
              Salad with wheat & white egg
            </p>
            <h1 className="text-[1.2rem] font-bold">60 cal</h1>
          </div>
        </div>
      </div>
      <div className="w-[30rem] bg-[#e6faff] py-[2rem] px-[2rem] flex items-center justify-start flex-col rounded-[.3rem] gap-y-[.5rem] ">
        <div className=" flex items-center justify-between w-[100%]">
          <h1 className="text-[1.2rem] font-bold">
            120
            <span className="text-[.9rem] font-light text-[#797979]">kcal</span>
          </h1>
          <h1 className="text-[#797979]">B R E A K F A S T</h1>
        </div>
        <div className="w-[100%] flex items-center justify-start gap-x-[1rem]">
          <img src="./d1.jpg" className="h-[5rem] rounded" alt="" />
          <div className="flex items-start justify-center flex-col rounded-[.3rem]">
            <p className="text-[1rem] leading-4">
              Salad with wheat & white egg
            </p>
            <h1 className="text-[1.2rem] font-bold">60 cal</h1>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-start gap-x-[1rem]">
          <img src="./d1.jpg" className="h-[5rem] rounded" alt="" />
          <div className="flex items-start justify-center flex-col rounded-[.3rem]">
            <p className="text-[1rem] leading-4">
              Salad with wheat & white egg
            </p>
            <h1 className="text-[1.2rem] font-bold">60 cal</h1>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Diet;
