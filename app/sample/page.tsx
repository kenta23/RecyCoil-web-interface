// page.tsx
'use client';

import {  useEffect, useMemo } from 'react';

export default function Page() {
   
   const ws = useMemo(() => new WebSocket('ws://localhost:4000/ws'),[]);

   useEffect(() => {
     ws.onopen = () => {
       console.log("WebSocket connection opened");
     };
     // Handle messages from the server
     const handleMessage = (e: MessageEvent) => {
       console.log("WebSocket message received:", e.data);
     };

     ws.onerror = () => {
       console.log("WebSocket connection error");
     };

     ws.onclose = () => {
       console.log("WebSocket connection closed");
     };

     ws?.addEventListener("message", handleMessage);

     // Cleanup on component unmount
     return () => {
       ws.removeEventListener("message", handleMessage);
       ws.close();
     };
   }, [ws]);



  return (
    <div className='w-full'>
          
    </div>
  );
}