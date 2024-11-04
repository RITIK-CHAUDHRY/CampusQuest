const { Server } = require("socket.io");
const jwt = require('jsonwebtoken');

function initializeSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

 
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Authentication error"));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      socket.username = decoded.username;
      next();
    } catch (err) {
      next(new Error("Authentication error"));
    }
  });

  
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.userId}`);

  
    socket.on("joinHunt", (huntId) => {
      socket.join(`hunt:${huntId}`);
      io.to(`hunt:${huntId}`).emit("userJoined", {
        userId: socket.userId,
        username: socket.username,
        message: "joined the hunt"
      });
    });

    
    socket.on("sendMessage", ({ huntId, message }) => {
      io.to(`hunt:${huntId}`).emit("newMessage", {
        userId: socket.userId,
        username: socket.username,
        message,
        timestamp: new Date()
      });
    });


    socket.on("clueCompleted", ({ huntId, clueId }) => {
      io.to(`hunt:${huntId}`).emit("clueUpdate", {
        userId: socket.userId,
        username: socket.username,
        clueId,
        message: "completed a clue!"
      });
    });

    
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });

  return io;
}

module.exports = initializeSocket;
