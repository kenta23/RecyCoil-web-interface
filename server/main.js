import { SerialPort, ReadlineParser } from 'serialport'
import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';


const PORT = 4000;
const app = express();

app.use(cors());


const ws = new WebSocketServer({ noServer: true });

// Set up the serial port
const port = new SerialPort(
    {
      path: "COM5", // Adjust to your Arduino's port
      baudRate: 9600, // Match the baud rate in the Arduino sketch
      dataBits: 8,
      parity: "none",
      stopBits: 1,
      flowControl: false
    },
    (err) => {
      if (err) {
        console.error("Error opening serial port:", err.message);
      } else {
        console.log("Serial port connected on COM5");
      }
    }
  );
  

  // Set up a line parser to process incoming data line-by-line
  const lineStream = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

  // lineStream.on("data", (data) => {
  //   console.log(data);
  // });

  lineStream.on("error", (err) => console.log(err));

  port.on("error", (err) => {
    console.error("Serial port error:", err.message);
});


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



server.on('upgrade', (request, socket, head) => { 
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;

  if (pathname === "/ws") {
    ws.handleUpgrade(request, socket, head, (ws) => {
      ws.on("connection", (ws) => {

        lineStream.on("data", (data) => {
             ws.send(data); // Send the number to the WebSocket client
        })

        // Handle incoming messages from the client
        ws.on("message", (message) => {
          console.log("Received message from client:", message.toString());
        });

        // Handle client disconnection
        ws.on("close", () => {
          console.log("WebSocket connection closed");
        });
      });

      ws.emit("connection", ws, request); // Emit the connection event
    });


  } else {
    socket.destroy(); // Reject requests to other paths
  }
})

