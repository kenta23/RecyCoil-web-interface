import figlet from "figlet";
import { ReadlineParser, SerialPort } from 'serialport';


  
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
  
  // Listen for parsed data
  //display data from arduino

  lineStream.on("data", (data) => {
    console.log("Received data from Arduino:", data);

    const temperature = parseFloat(data);
     if (!temperature) {
        console.log("Invalid temperature");
     }
  });

  lineStream.on("error", (err) => console.log(err));

  port.on("error", (err) => {
    console.error("Serial port error:", err.message);
  });
  

const CORS_HEADERS = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
};

const server = Bun.serve({
    port: 4000,  
    fetch (req, server) {
        const url = new URL(req.url);
     

        if (url.pathname === '/ws') { 
        

          if (server.upgrade(req)) { 
              return;
          }
             return new Response("This is websocket", CORS_HEADERS);
        }

        if (url.pathname === "/sample") {
          // Example: Adding some ASCII art to the console
          figlet("Arduino Node.js", (err, data) => {
            if (err) {
              console.error("Figlet error:", err.message);
              return;
            }
            console.log('My Data', data);
          });
        }

        const body = figlet.textSync("Bun!");
        return new Response(body);
    },
 
     
    websocket: {
        open() { 
            console.log('WebSocket is open');
         },
         message(ws, message) {
              ws.send(`your message is here: ${message}`);
         },
         close() { 
              console.log('WebSocket is closed');
         }

    }

  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);


