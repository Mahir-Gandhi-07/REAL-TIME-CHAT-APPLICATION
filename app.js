const express = require('express')
const http = require('http')
const Server = require('socket.io').Server

const app = express()
app.use(express.json())

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("connected");

    socket.on('newMessage', (msg) => {
        io.emit('message', msg)
    })
    

    socket.on("disconnect", () => {
        console.log("disconnect")
    })
})

server.listen("8080", () => {
    console.log("Server is running on port 8080!")
})