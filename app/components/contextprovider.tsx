"use client";

import LoadingScreen from "@/components/loadingscreen";
import { WebSocketProvider } from "next-ws/client";
import React, { useEffect, useState } from "react";

export default function Contextprovider({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false)
 

  //this would be the loading screen
  //only run at once
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setIsClient(true)
      return () => clearTimeout(timeout);

    }, 2000);
  }, []);

  return loading && !isClient ? (
    <LoadingScreen />
  ) : (
      <WebSocketProvider url="ws://localhost:3000/api/ws">
         {children}
      </WebSocketProvider>
  );
}
