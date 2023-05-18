import Head from "next/head";
import React, { useState } from "react";
import Dashboard from "../components/Dashboard";

import Footer from "../components/Footer";
import { getServerSession } from "next-auth";
import authOptions from "../pages/api/auth/[...nextauth]";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const mqtt = require("mqtt");

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

    const brokerUrl = "mqtt://192.168.1.45:1883";
    const topic = "/home/prodigytrip/Desktop";

    let mqttData = 0;

    const client = mqtt.connect(brokerUrl);

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe(topic);
    });

    client.on("message", (topic, message) => {
      mqttData = Math.parseInt(message).toString();
      console.log("gotcha");
    });

    client.on("error", (error) => {
      console.error(`Error: ${error}`);
    });

    if (loggedUserData) {
      return {
        props: {
          loggedUserData,
          mqttData
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

function DashboardPage({ loggedUserData, mqttData }) {
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
