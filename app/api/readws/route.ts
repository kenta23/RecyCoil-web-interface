import { getWebSocketServer } from 'next-ws/server';

export async function GET() { 
    const wsServer = getWebSocketServer();
    return Response.json(wsServer.clients);
}