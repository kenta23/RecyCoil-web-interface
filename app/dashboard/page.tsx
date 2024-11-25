'use client'

import React from 'react'
import PieChart from '../components/pie-chart'
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { TbCylinder } from 'react-icons/tb';
import { CiTimer } from 'react-icons/ci';
import { BorderLinearProgress } from '../components/progressbar';


export default function page() {
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
          <div className="flex mt-4 gap-12 items-center w-full">
            <div className="min-w-[250px]">
              <PieChart
                title="Fuel Produced"
                icon={<BsFillFuelPumpFill size={20} />}
                value={400}
                fill="#3ad65e"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                {/*TEMPERATURE **/}
                <BorderLinearProgress
                  variant="determinate"
                  id="temperature"
                  aria-label="temperature"
                  value={60}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#F98662", // Customize the bar color
                    },
                  }}
                />
                <label htmlFor="temperature">
                  Temperature: <span className="font-semibold">40°C</span>
                </label>
              </div>

              <div className="space-y-4">
                {/*Chunks filtered**/}
                
                <BorderLinearProgress
                  variant="determinate"
                  id="flow-rate"
                  aria-label="flow-rate"
                  value={60}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#629EF9", // Customize the bar color
                    },
                  }}
                />
                <label htmlFor="flow-rate">
                  Flow rate: <span className="font-semibold">90%</span>
                </label>
              </div>

              <div className="space-y-2">
                {/*EFFICIENCY **/}
                <BorderLinearProgress
                  variant="determinate"
                  id="efficiency"
                  aria-label="efficiency"
                  value={40}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#8962F9", // Customize the bar color
                    },
                  }}
                />
                <label htmlFor="efficiency">
                  Efficiency: <span className="font-semibold">40%</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex space-x-3 ">
          <div className="w-1/2 h-[250px] rounded-[27px] border-gray-300  border-[1px] ">
            {/**VOLUME */}
            <div className="flex flex-col items-center ">
              <div className='w-[250px]'>
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
