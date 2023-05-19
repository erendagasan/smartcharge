import React, { useState } from "react";
import { Inter } from "@next/font/google";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SearchIcon from "@mui/icons-material/Search";
import Graph from "./Graph";
import { Map, Marker } from "react-map-gl";
import { Avatar } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InfoIcon from "@mui/icons-material/Info";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
const inter = Inter({ subsets: ["latin"] });

function Dashboard({ loggedUserData, mqttData }) {
  const router = useRouter();
  const [addDevice, setAddDevice] = useState(false);
  const [summaryState, setSummaryState] = useState("weekly");
  const [voltage, setVoltage] = useState(0);

  return (
    <div
      className={` ${inter.className} [&::-webkit-scrollbar]:hidden h-[100vh] grid grid-cols-2 gap-2 w-full bg-black`}
    >
      <div className="INFO DASH INFO HEADER WELCOME bg-[#fff1d6]  p-4 h-[50vh]">
        <div className="flex justify-between w-full text-[#29524A] font-semibold">
          <div className="flex items-center space-x-2 cursor-pointer transition duration-200">
            <PersonIcon />
            <p onClick={() => router.push("/profile")}>Profil</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer transition duration-200">
            <HistoryIcon />
            <p onClick={() => router.push("/history")}>Geçmiş</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer transition duration-200">
            <CreditCardIcon />
            <p onClick={() => router.push("/pricing")}>Fiyatlandırma</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer transition duration-200">
            <QuestionMarkIcon />
            <p onClick={() => router.push("/pricing")}>Destek</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-10">
          <Avatar className="w-20 h-20" />
          <div className="">
            <p className="capitalize text-[#29524A] text-lg font-semibold">
              {" "}
              {loggedUserData.firstName} {loggedUserData.lastName}{" "}
            </p>
            <p className="text-[#29524A] "> {loggedUserData.email} </p>
          </div>

          <div className="flex space-x-4">
            <div className="DEVICE flex-1 h-40 flex flex-col space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden text-[#fff1d6] font-semibold">
              <div className="flex justify-between items-center cursor-pointer bg-[#29524A] p-4">
                <p className="text-sm">AU72288</p>
                <CallMadeIcon className="text-[20px]" />
              </div>
              <div className="flex justify-between items-center cursor-pointer bg-[#29524A] p-4">
                <p className="text-sm">AU72288</p>
                <CallMadeIcon className="text-[20px]" />
              </div>{" "}
              <div className="flex justify-between items-center cursor-pointer bg-[#ef4036] p-4">
                <p className="text-sm">AU72288</p>
                <CallMadeIcon className="text-[20px]" />
              </div>
              <div className="flex justify-between items-center cursor-pointer bg-[#29524A] p-4">
                <p className="text-sm">AU72288</p>
                <CallMadeIcon className="text-[20px]" />
              </div>{" "}
            </div>

            <div className="flex-1 flex flex-col space-y-2">
              <div className=" bg-[#ef4036] flex-1 p-4 flex justify-between">
                <p className=" text-[#fff1d6] font-semibold">Anlık Akım</p>

                <p className="text-3xl text-[#fff1d6]">{mqttData.beat} A</p>
              </div>

              <div
                onClick={() => {
                  if (voltage == 0) {
                    setVoltage(230);
                  } else if (voltage == 230) {
                    setVoltage(0);
                  }
                }}
                className=" bg-[#ef4036] flex-1 p-4 flex justify-between select-none"
              >
                <p className=" text-[#fff1d6] font-semibold">Anlık Gerilim</p>

                <p className="text-3xl text-[#fff1d6]">{voltage} V</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MORE INFO AND GO SEARCH HISTORY p-4 bg-[#ef4036] text-[#fff1d6] h-[50vh] flex flex-col justify-between">
        <p className="font-semibold text-xl">
          Smart Charge, ev veya işyeri enerji tüketimini izlemek ve kontrol
          etmek için tasarlanmış bir platformdur. Enerji faturalarınızı
          azaltmaya yardımcı olmak için gerçek zamanlı verileri analiz ederek
          enerji tasarrufu fırsatlarına işaret eder. Smart Charge aracılığıyla
          enerji kullanım örüntülerini görüntüleyebilir, tüketim hedefleri
          belirleyebilir ve enerji tasarrufu stratejileri geliştirebilirsiniz.
        </p>
        <div className="py-3 px-6 text-[#fff1d6] cursor-pointer flex items-center w-fit space-x-2  bg-[#1d1d1d]">
          <SearchIcon />
          <p>Verileri incele</p>
        </div>
      </div>

      <div className="BOTTOM LEFT grid grid-cols-2 space-x-2 h-[50vh]">
        <div className="BOTTOM LEFT LEFT grid grid-rows-3 space-y-2">
          <div className="row-span-2 bg-[#ef4036] p-4">
            <div className="">
              <Map
                initialViewState={{
                  latitude: 37.8,
                  longitude: -122.4,
                  zoom: 14,
                }}
                style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={
                  "pk.eyJ1IjoiZXJlbmRhZ2EiLCJhIjoiY2xic2Q4bXZ0MDBlYjN3cXhjZnQ2eHo3dCJ9.Pq5RDLsNTFYBMYfylbcm5A"
                }
              ></Map>
            </div>

            <div className="ADDRESS text-[#fff1d6]">
              Sapan Bağlari,32, 34893, Pendik/ İstanbul, Turkey
            </div>
          </div>
          <div className="row-span-1 flex flex-col justify-between bg-[#ef4036] p-4">
            <div className="ROW HEADER flex items-center justify-between">
              <p className="text-xl text-[#fff1d6] font-semibold">
                Anlık Kullanım
              </p>
              <div className="">
                <InfoIcon className="text-[20px] text-[#fff1d6]" />
              </div>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <p className="text-5xl text-[#fff1d6]">202 W</p>
            </div>
          </div>
        </div>

        <div className="BOTTOM LEFT RIGHT grid grid-rows-3 space-y-2">
          <div className="row-start-2 bg-[#fff1d6] p-4 flex flex-col justify-between">
            <div className="ROW HEADER flex items-center justify-between">
              <p className="text-xl text-[#29524A] font-semibold">
                Kullanım Oranı
              </p>
              <div className="">
                <ArrowUpwardIcon className="text-[20px] text-[#29524A]" />
              </div>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <p className="text-5xl text-[#29524A]">+1,12%</p>
              <p className="text-xs text-[#29524A]">Düne kıyasla</p>
            </div>
          </div>

          <div className="row-start-3 bg-[#ef4036] p-4 flex flex-col justify-between">
            <div className="ROW HEADER flex items-center justify-between">
              <p className="text-xl text-[#fff1d6] font-semibold">
                Kullanım Oranı
              </p>
              <div className="">
                <ArrowUpwardIcon className="text-[20px] text-[#fff1d6] rotate-180" />
              </div>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <p className="text-5xl text-[#fff1d6]">-2,12%</p>
              <p className="text-xs text-gray-200">Geçen haftaya kıyasla</p>
            </div>
          </div>
        </div>
      </div>

      <div className="BOTTOM RIGHT grid grid-cols-2 space-x-2 h-[50vh]">
        <div className="GRAPH flex flex-col justify-between bg-[#fff1d6] text-[#29524A] p-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Özet</p>

            <div className="flex items-center text-xs space-x-2 bg-[#1d1d1d] p-[4px] ">
              <p
                onClick={() => setSummaryState("daily")}
                className={` ${
                  summaryState === "daily"
                    ? "bg-[#fff1d6] text-[#29524A] p-[4px] font-semibold cursor-pointer  transition duration-200"
                    : "p-[4px] text-white font-semibold cursor-pointer  transition duration-200"
                } `}
              >
                Günlük
              </p>
              <p
                onClick={() => setSummaryState("weekly")}
                className={` ${
                  summaryState === "weekly"
                    ? "bg-[#fff1d6] text-[#29524A] p-[4px] font-semibold cursor-pointer  transition duration-200"
                    : "p-[4px] text-white font-semibold cursor-pointer  transition duration-200"
                } `}
              >
                Haftalık
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-5xl font-semibold">203,6 W</p>
            <div className="">
              <Graph />
            </div>
          </div>
        </div>

        <div className="ACTIVE DEVICES AND INSTANT USAGE grid grid-rows-3 space-y-2">
          <div className="bg-[#fff1d6] p-4 flex flex-col justify-between">
            <div className="flex justify-between text-[#29524A] items-center ">
              <p className="text-[#29524A] font-semibold text-xl">
                Cihaz Sayısı
              </p>

              {addDevice ? (
                <CloseIcon
                  onClick={() => {
                    setAddDevice(!addDevice);
                  }}
                  className="cursor-pointer text-[#29524A]"
                />
              ) : (
                <AddIcon
                  onClick={() => {
                    setAddDevice(!addDevice);
                  }}
                  className="cursor-pointer text-[#29524A]"
                />
              )}
            </div>

            <div className="">
              {addDevice ? (
                <div className="text-[#29524A]">
                  <p className="text-sm mb-2 ml-[1px]">Cihaz ID'si girin.</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="bg-white p-1 flex-1 outline-none"
                    />
                    <button className="px-3 py-1 bg-[#1d1d1d] text-[#fff1d6]">
                      Ekle
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-5xl font-semibold text-[#29524A]">3</p>
              )}
            </div>
          </div>

          <div className="bg-[#ef4036] flex flex-col justify-between p-4">
            <div className="ROW HEADER flex items-center justify-between">
              <p className="text-xl font-semibold">Tasarruf</p>
              <div className="bg-[#ef4036] p-1">
                <RemoveCircleIcon className="text-[20px] text-[#fff1d6]" />
              </div>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <p className="text-5xl text-[#fff1d6]">0$</p>
              <p className="text-xs text-gray-200">Geçen haftaya kıyasla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
