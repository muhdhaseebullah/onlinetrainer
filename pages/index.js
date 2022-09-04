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

const Home = () => {
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
      <Image src="/frame.svg" alt="" width="100rem" height="100rem" />
      <p className="max-w-[25rem] text-center text-[#797979] text-[.9rem] font-medium">
        Bodybuilding is much like any other sport. To be successful, you must
        dedicate yourself 100% to your training, diet and mental approach.
      </p>

      <Image src="/workout.svg" alt="" width="350rem" height="350rem" />
      <div className="bg-[#ffffff] w-[24rem] flex items-center justify-center flex-col py-[3rem]">
        <Link href="./signup">
          <button className="w-[15rem] bg-blue-500 p-3 my-2 text-white rounded-[2rem]">
            Get Started
          </button>
        </Link>
        <p>
          Already have any account?{" "}
          <Link href="/signin">
            <span className="text-blue-500 cursor-pointer">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
