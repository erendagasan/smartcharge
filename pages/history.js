import React, { useState } from "react";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function History() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <div
      className={`${inter.className} bg-[#fff1d6] text-[#29524A] p-10`}
    >
      <h1 className="font-semibold text-3xl">Geçmiş Kullanımların</h1>
      <h3 className="mt-1 mb-4">
        Aşağıda geçmiş dönemlere ait kullanımlarını görebilir ve
        filtreleyebilirsin.
      </h3>

      <div className="my-8">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex space-x-4">
            <DesktopDatePicker
              view="day"
              label="Başlangıç tarihi"
              defaultValue={dayjs("2022-04-17")}
            />
            <DesktopDatePicker
              label="Bitiş tarihi"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </LocalizationProvider>
      </div>

      <div className="text-sm h-[500px] overflow-y-auto [&webkit-scrollbar-hidden]">
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>

        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>

        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>

        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>

        <div className="HISTORY USAGE grid grid-cols-6 mt-1 px-3 py-1  text-[#ef4036] font-semibold">
          <div className="">tarih</div>
          <div className="">gerilim</div>
          <div className="">anlık enerji</div>
          <div className="">cihaz</div>
          <div className="">state</div>
          <div className="">state</div>
        </div>
      </div>
    </div>
  );
}

export default History;
