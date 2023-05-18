import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import btu from "../asset/btu.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black text-grey w-full h-max p-10 py-32">
      <footer className="grid grid-cols-5">
        <div className="">
          <Image className="h-32 w-32 mx-auto" src={btu} alt="logo" />
        </div>
        <div className="col flex flex-col space-y-3">
          <p className="text-xl font-semibold">Hakkımızda</p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:underline cursor-pointer w-fit">
              Biz, kimiz?
            </li>
          </ul>
        </div>
        <div className="col flex flex-col space-y-3">
          <p className="text-xl font-semibold">Destek</p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:underline cursor-pointer w-fit">
              Yardım merkezi
            </li>
            <li className="hover:underline cursor-pointer w-fit">
              Nasıl çalışıyoruz?
            </li>
            <li className="hover:underline cursor-pointer w-fit">
              İptal ve iade koşulları
            </li>
            <li className="hover:underline cursor-pointer w-fit">İletişim</li>
          </ul>
        </div>
        <div className="col flex flex-col space-y-3">
          <p className="text-xl font-semibold">Topluluk</p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="hover:underline cursor-pointer w-fit">Blog</li>
            <li className="hover:underline cursor-pointer w-fit">
              Motto, vizyon, misyon?
            </li>
          </ul>
        </div>

        <div className="col flex flex-col space-y-3">
          <p className="text-xl font-semibold">Arayan bulur!</p>
          <div className="flex text-gray-300 space-x-1">
            <InstagramIcon className="hover:text-gray-100 cursor-pointer" />
            <FacebookIcon className="hover:text-gray-100 cursor-pointer" />
            <LinkedInIcon className="hover:text-gray-100 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
