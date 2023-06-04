"use strict";
// import io from "socket.io-client";
const socket = io("http://localhost:3000");
socket.on("connect", () => {
    console.log("User connected... ");
});
socket.on("broadcast", (id) => {
    console.log(`User with id: ${id} clicked the button.`);
});
socket.emit("buttonClicked", socket.id);
