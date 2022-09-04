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
  const [unit, setUnit] = useState("ft");

  return (
    <div className="w-[100vw] h-[100vh] bg-[#ececec] flex items-center  flex-col py-[2rem]">
      <p className="max-w-[25rem] text-center text-blue-700 text-[.9rem] font-medium uppercase">
        Height
      </p>
      <h1 className="text-[1.5rem] font-bold">What is your Height?</h1>
      <div className="flex items-center justify-center gap-x-[1.5rem] py-[2rem]">
        <button
          className="w-[8rem] bg-blue-500 p-1 my-2 text-white rounded-[2rem] cursor-pointer border-[2px] border-blue-500"
          onClick={() => setUnit("ft")}
        >
          ft
        </button>
        <button
          className="w-[8rem] border-[2px] border-blue-500 p-1 my-2 text-blue-500 rounded-[2rem] cursor-pointer"
          onClick={() => setUnit("in")}
        >
          in
        </button>
      </div>
      <div className="flex items-end justify-center py-[2rem] ">
        <input
          type="text"
          name="weight"
          className="border-0 focus:outline-none text-[5rem] w-[7rem] bg-[#ececec]"
          placeholder="80"
        />
        <p className="relative right-[1rem]">{unit}</p>
      </div>

      <p className="max-w-[25rem] text-center text-[#797979] text-[.9rem] font-medium">
        To give you a customize experience we need to know your height
      </p>
      <Link href="./goal">
        <button className="w-[15rem] bg-blue-500 p-3 my-2 text-white rounded-[2rem]">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default SelectWeight;
