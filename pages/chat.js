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
      <h1 className="text-[1.5rem] font-bold">Chat</h1>

      <BottomFooter />
    </div>
  );
};

export default SelectWeight;
