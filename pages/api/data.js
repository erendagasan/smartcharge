const mqtt = require("mqtt");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const brokerUrl = "http://192.168.1.45:1883";
    const topic = "home/prodigytrip/Desktop";

    const client = mqtt.connect(brokerUrl);

    client.on("connect", () => {
      client.subscribe(topic);
    });

    client.on("message", (topic, message) => {
      if (message) {
        let data = JSON.parse(message.toString());
        res.send(data);
        client.end();
      } else {
        client.on("error", (error) => {
          console.error(`Error: ${error}`);
          res.status(500).json("error");
          client.end();
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while getting the data." });
    await db.$disconnect();
  }
};
