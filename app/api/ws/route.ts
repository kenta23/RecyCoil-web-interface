import { getWebSocketServer } from 'next-ws/server';

export function GET() {
  const headers = new Headers();
  headers.set('Connection', 'Upgrade');
  headers.set('Upgrade', 'websocket');
  return new Response('Upgrade Required', { status: 426, headers });
}


export function SOCKET(
  client: import('ws').WebSocket,
  request: import('http').IncomingMessage,
  server: import('ws').WebSocketServer
) {
  console.log('A client connected');

  client.onopen = () => {
    console.log('A client connected');
  };

  server.on('connection', (ws) => {
    console.log('A client connected', ws);
  })

  client.on('open', () => { 
    console.log('A client connected');
  })

   if(client.CONNECTING) { 
     console.log('WebSocket is connecting on the server...');
   }

  client.on('message', (message) => {
    console.log('Received message:', message);
    client.send(message);
  });

  client.on('close', () => {
    console.log('A client disconnected');
  });
}