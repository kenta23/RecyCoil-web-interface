'use client';

import { useEffect, useRef, useState } from 'react';
import { useWebSocket } from 'next-ws/client';


export default function Page() {
  const ws = useWebSocket();

  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string[] | null>(null);


  
  useEffect(() => {
     async function onMessage(event: MessageEvent) {
        const payload = typeof event.data === 'string' ? event.data : event.data.text();

        try {
          // Attempt to parse JSON if possible
          const parsedData = JSON.parse(payload);
          console.log('Parsed JSON:', parsedData);
          setMessage(parsedData);
        } catch (error) { 
          // If not JSON, treat it as plain text
          console.log('Received non-JSON message:', error);
          setMessage(s => [...s ?? [], payload]); // Store raw message if necessary
        }
    }

     ws?.addEventListener('message', onMessage);
     return () => ws?.removeEventListener('message', onMessage);
  }, [ws]);


  return (
    <div className='w-full bg-red-200 h-full'>
    <input
      ref={inputRef}
      type="text"
    />

    <button
      onClick={() => ws?.send(inputRef.current?.value ?? '')}
    >
      Send message to server
    </button>


      {message === null
        ?  <p>Waiting to receive message...</p>
        : message && message?.map((m, i) => (
            <p key={i}>Got message: ${m.toString()}</p>
        ))}

  </div>
  )
}