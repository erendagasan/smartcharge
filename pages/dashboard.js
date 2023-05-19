import Head from "next/head";
import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import Footer from "../components/Footer";
import { getServerSession } from "next-auth";
import authOptions from "../pages/api/auth/[...nextauth]";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const loggedUserData = await db.user.findFirst({
      where: {
        email: session.user.email,
        name: session.user.name,
      },
    });

    loggedUserData.createdAt = loggedUserData.createdAt.toISOString();
    loggedUserData.updatedAt = loggedUserData.updatedAt.toISOString();

    await db.$disconnect();

    if (loggedUserData) {
      return {
        props: {
          loggedUserData,
        },
      };
    }
  } else {
    await db.$disconnect();
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };
  }
}

function DashboardPage({ loggedUserData }) {
  const [mqttData, setMqttData] = useState("0");

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.get("http://localhost:3000/api/data");
      const data = response.data;
      setMqttData(data);
      console.log(data);
    }, 5000);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);
  return (
    <>
      <Head>
        <title>Smart Charge - Hoşgeldin!</title>
      </Head>

      <main className={`${inter.className} p-4`}>
        <Dashboard loggedUserData={loggedUserData} mqttData={mqttData} />
      </main>
      <Footer />
    </>
  );
}

export default DashboardPage;
