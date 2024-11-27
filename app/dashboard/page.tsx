'use client'

import React, { useEffect, useMemo, useState } from 'react'
import PieChart from '../components/pie-chart'
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { TbCylinder } from 'react-icons/tb';
import { CiTimer } from 'react-icons/ci';
import { BorderLinearProgress } from '../components/progressbar';



export default function Page() {

 const ws = useMemo(() => new WebSocket('ws://localhost:4000/ws'),[]);
 const [temperature, setTemperature] = useState<number>(0);

 const fuelInfo = [
  { 
   id: 1, 
   label: 'temperature',
   name: "Temperature",
   color: '#F98662',
   value: temperature,
  },
  {
   id: 2,
   label: 'flow-rate',
   name: "Flow rate",
   color: '#629EF9',
   value: 0
  },
  {
   id: 3,
   label: 'chunks-filtered',
   name: "Chunks Filtered",
   color: '#8962F9',
   value: 60
  }
 ]

useEffect(() => {
  ws.onopen = () => {
    console.log("WebSocket connection opened");
  };
  // Handle messages from the server
  const handleMessage = (e: MessageEvent) => {
   // Log raw data to debug the format
  console.log('Type of data:', typeof e.data);

  // Safely parse the data to a number
  const receivedData = e.data ? parseFloat(e.data) : 0;
  setTemperature(receivedData);

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
    <div className="px-6 py-3 h-full w-full">
      <h1 className="text-center font-medium text-[28px] my-4">
        Real Time Dashboard
      </h1>

      <div className="w-[750px] mt-[45px] space-y-6 h-auto mx-auto">
        <div className="border-[1px] border-gray-300 shadow-sm px-4 py-2 rounded-[27px] w-full h-auto">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-[#DDAA1D] rounded-full" />
            <h1>In Progress</h1>
          </div>

          {/**FUEL PRODUCED */}
          <div className="flex mt-4 gap-12 justify-evenly items-center w-full">
            <div className="max-w-[250px] flex-1">
              <PieChart
                title="Fuel Produced"
                icon={<BsFillFuelPumpFill size={20} />}
                value={400}
                fill="#3ad65e"
              />
            </div>

            <div className="flex flex-col w-[230px] gap-4">
              {fuelInfo.map((item) => (
                <div key={item.id} className="w-[150px] flex flex-col gap-1">
                  {/*TEMPERATURE **/}
                  <BorderLinearProgress
                    variant="determinate"
                    id={item.label}
                    aria-label={item.label}
                    value={item.value}
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: item.color, // Customize the bar color
                      },
                    }}
                  />
                  <label htmlFor={item.label} className="text-nowrap">
                    {item.name}:
                    <span className="font-semibold">{item.id === 1 ? item.value + "°C" : item.value + "%"}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex space-x-3 ">
          <div className="w-1/2 h-[250px] rounded-[27px] border-gray-300  border-[1px] ">
            {/**VOLUME */}
            <div className="flex flex-col items-center ">
              <div className="w-[250px]">
                <PieChart
                  title="Volume"
                  icon={<TbCylinder size={20} />}
                  value={250}
                  fill="#DDAA1D"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 flex border-l-[1px] rounded-[27px] border-gray-300  border-[1px]  justify-center items-center h-[250px]">
            <div className="flex items-center flex-col ">
              <h2 className="font-semibold text-[35px]">2 hours</h2>
              <div className="flex items-center gap-2">
                <CiTimer size={20} /> <p className="text-md">Time Produced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
