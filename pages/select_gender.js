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

const SelectGender = () => {
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
    <div className="w-[100vw] h-[100vh] bg-[#ececec] flex items-center justify-center flex-col py-[2rem]">
      <p className="max-w-[25rem] text-center text-blue-700 text-[.9rem] font-medium uppercase">
        gender
      </p>
      <h1 className="text-[1.5rem] font-bold">Which one are you</h1>
      <div className="flex items-center justify-center gap-x-[1.5rem] py-[2rem]">
        <div className="bg-blue-500 pt-[2rem] rounded-[1rem]">
          <img src="/boy.svg" alt="" className="rounded-[1rem]" />
        </div>
        <div className="bg-[#e6faff] pt-[2rem] rounded-[1rem]">
          <img
            src="/girl.svg"
            alt=""
            className="rounded-[1rem] px-[.5rem] pt-[.5rem]"
          />
        </div>
      </div>
      <p className="max-w-[25rem] text-center text-[#797979] text-[.9rem] font-medium">
        To give you a customize experience we need to know your gender
      </p>
      <Link href="./select_weight">
        <button className="w-[15rem] bg-blue-500 p-3 my-2 text-white rounded-[2rem]">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default SelectGender;
