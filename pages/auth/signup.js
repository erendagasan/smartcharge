import React, { useCallback } from "react";
import axios from "axios";
import { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import btu from "../../asset/btu.png";
import Link from "next/link";
import { toast } from "react-toastify";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import pearl from "../../asset/incikupelikadin.avif";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };
  } else {
    return { props: {} };
  }
}

function notify(text) {
  toast.error(text, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
    className: `${inter.className}`,
  });
}

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/create-new-user", {
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
      })
      .then(() => {
        signIn("credentials", {
          email: email,
          password: password,
        }).then(() => {
          setIsLoading(false);
        });
      })
      .catch((error) => {
        setIsLoading(false);
        notify("oops.. maalesef hesabını oluşturamadık.");
        toast.clearWaitingQueue();
      });
  };

  const nameInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <>
      <Head>
        <title>firilens | kayıt ol.</title>
      </Head>
      <div
        className={`flex bg-black h-screen ${inter.className} overflow-hidden`}
      >
        <div className="flex-[0_0_60%] flex flex-col p-10">
          <p className="font-bold text-4xl text-white">
            Yepyeni bir enerji deneyimini <br /> keşfet.
          </p>

          <div className="m-auto">
            <Image src={pearl} width={500} height={500} alt="signup" />
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="text-white flex space-x-2 underline text-sm">
              <Link href={"/"}>
                <InstagramIcon />
              </Link>
              <Link href={"/"}>
                <LinkedInIcon />
              </Link>
              <Link href={"/"}>
                <TwitterIcon />
              </Link>
            </div>
            <ul className="text-white flex space-x-5 underline text-sm">
              <li>
                {" "}
                <Link href={"/"}>Anasayfa</Link>{" "}
              </li>
              <li>
                <Link href={"/"}>Hakkımızda</Link>
              </li>
              <li>
                <Link href={"/"}>Destek</Link>
              </li>
            </ul>
          </div>
        </div>

        <form
          className="flex flex-col text-white h-screen flex-[0_0_40%] p-10 rounded-l-md"
          onSubmit={onSubmit}
        >
          <Image
            onClick={() => router.push("/")}
            src={btu}
            width={80}
            height={80}
            alt="Logo"
            className="cursor-pointer"
          />
          <h1 className="text-4xl text-white font-bold mt-4">
            Smart Charge'a kayıt ol.
          </h1>
          <div className="flex space-x-2 mt-auto">
            <input
              ref={nameInput}
              placeholder="Adın"
              name="firstName"
              required
              className="p-3 outline-none bg-white text-black flex-1 text-sm"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
            />
            <input
              placeholder="Soyadın"
              name="lastName"
              required
              className="p-3 outline-none bg-white text-black flex-1 text-sm"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-3 mt-3">
            <input
              placeholder="Kullanıcı adın"
              name="username"
              maxLength="12"
              required
              className="p-3 outline-none bg-white text-black text-sm"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
            />

            <input
              placeholder="E-posta adresin"
              name="email"
              required
              className="p-3 outline-none bg-white text-black text-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />

            <input
              placeholder="Şifren"
              name="password"
              required
              minLength="8"
              className="p-3 outline-none bg-white text-black text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />

            <button
              disabled={isLoading}
              className="py-2 text-white hover:bg-[#ef4036] transition-all duration-200 border-[1px] border-white font-medium text-sm"
            >
              {!isLoading ? (
                "Kayıt ol!"
              ) : (
                <div>
                  <div className="flex items-center justify-center text-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-[#ef4036]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}{" "}
            </button>
          </div>

          <Link href="/auth/login" className="text-sm mx-auto mt-auto">
            Hesabın var mı? <span className="underline">Giriş yap.</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
