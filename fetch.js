const mqtt = require("mqtt");

const brokerUrl = "http://mqtt.eclipseprojects.io:1883";
const topic = "oximeters/7";

const client = mqtt.connect(brokerUrl);

if (client) {
  console.log("Got the client");
} else if (!client) {
  console.log("No client");
}

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topic);
})

client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on("error", (error) => {
  console.error(`Error: ${error}`);
});