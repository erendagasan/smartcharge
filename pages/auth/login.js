import { getServerSession, unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../asset/btu.png";
import Link from "next/link";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { toast } from "react-toastify";

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: "/dashboard",
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

const inter = Inter({ subsets: ["latin"] });

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (response?.error) {
        setIsLoading(false);
        notify("böyle bir hesabı aradık, taradık bulamadık.");
        toast.clearWaitingQueue();
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      setError("Bu kullanıcı bulunamadı veya bir hata oldu.");
    }
  };

  const emailInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <>
      <Head>
        <title>firilens | giriş yap.</title>
      </Head>
      <div
        className={`flex h-screen bg-black overflow-hidden ${inter.className}`}
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col flex-[0_0_25%] p-8 h-screen text-white"
        >
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo}
            width={80}
            height={80}
            alt="Logo"
          />

          <h1 className="text-4xl mt-4 text-white font-bold">
            Akıllı enerjiye <br /> devam et.
          </h1>
          <div className="flex flex-col space-y-3 mt-32">
            <input
              required
              className="p-3 outline-none text-black bg-white text-sm"
              value={email}
              ref={emailInput}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="E-posta adresin"
            />
            <input
              required
              className="p-3 outline-none text-black bg-white text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Şifren"
            />
          </div>
          <div className="flex flex-col mt-3 flex-1">
            <button
              disabled={isLoading}
              type="submit"
              className="py-2 text-white hover:bg-[#ef4036] transition-all duration-200 border-[1px] border-white font-medium text-sm"
            >
              {!isLoading ? (
                "Giriş yap"
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
              )}
            </button>
            <Link href="" className="text-sm mx-auto mt-6 underline">
              Şifreni mi unuttun?
            </Link>
            <Link href="/auth/signup" className="text-sm mx-auto mt-auto">
              Hesabın yok mu? <span className="underline">Kayıt ol.</span>
            </Link>
          </div>
        </form>

        <div className="flex flex-col flex-1 text-white py-4 px-10">
          <p className="font-bold text-4xl">
            Yepyeni bir freelancer deneyimini <br /> firilens’te keşfet.
          </p>
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className=" w-full h-full brightness-[0.5] transition-all duration-500"
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/375201814/rendition/540p/file.mp4?loc=external&oauth2_token_id=1286526621&signature=c948758e53bbe15dabd8ecdb3e556481f60f4bf7148f1e4598f160d6c747858c"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}

export default Login;
