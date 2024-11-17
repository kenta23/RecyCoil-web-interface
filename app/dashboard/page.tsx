import React from 'react'
import PieChart from '../components/pie-chart'
import { Progress } from '@/components/ui/progress';




export default function page() {
  return (
    <div className="bg-yellow-200 px-6 py-3  min-h-screen h-full w-full">
     <div className='w-[750px] space-y-6 h-auto'>

      <div className="border-[1px] border-gray-400 mt-[100px] rounded-[27px] w-full min-h-[500px] h-auto">
        <h1>In Progress</h1>

        {/**FUEL PRODUCED */}
        <div className="flex mt-4 border p-3 gap-12 items-center w-full">
          <PieChart />

          <div className="flex flex-col gap-4">
            <div className="">
              {/*TEMPERATURE, FLOW RATE TIME PRODUCED**/}
              <label htmlFor="file">Downloading progress:</label>
              <Progress color="blue" value={40} className="bg-white" />
            </div>

            <div className="">
              {/*TEMPERATURE, FLOW RATE TIME PRODUCED**/}
              <label htmlFor="file">Downloading progress:</label>
              <Progress color="blue" value={40} className="bg-white" />
            </div>

            <div className="">
              {/*TEMPERATURE, FLOW RATE TIME PRODUCED**/}
              <label htmlFor="file">Downloading progress:</label>
              <Progress color="blue" value={40} className="bg-white" />
            </div>
          </div>
        </div>
        </div>

          <div className="w-full flex border-red-400 border-[1px]">
               <div className='w-1/2 border-gray-800 border-[1px] h-[250px]'>
                   {/**VOLUME */}
                   <div className='flex flex-col items-center '>
                      <PieChart />
                   </div>
               </div>



               <div className='w-1/2 flex justify-center items-center border-gray-800 border-[1px] h-[250px]'>
                   <div className='flex items-center flex-col '>
                          <h2 className='font-semibold text-[35px]'>2 hours</h2>
                          <p>Time Produced</p>
                   </div>
               </div>
          </div>
      </div>
    </div>
  );
}
