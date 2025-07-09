import express from "express";
import {WebSocketServer} from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("server is listening....")
})

const wss = new WebSocketServer({server});

wss.on('connection', (ws, req) => {
    console.log("New client connected:", req.socket.remoteAddress);

    ws.on("message", (data) => {
        console.log("Message from client:", data.toString());
        ws.send("thanks buddy!");
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });

    ws.on("error", (err) => {
        console.error("WebSocket error:", err);
    });
});
