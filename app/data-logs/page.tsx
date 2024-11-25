'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import PieChart from '../components/pie-chart';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { BorderLinearProgress } from '../components/progressbar';

export default function page() {
  return (
    <div className="px-6 py-3 h-full w-full">
      <div className="mt-[40px]">
        <h1 className="text-[30px]">Data Logs</h1>

        {/**DATA logs items */}
        {/** implement slider design */}
        <div className="mt-[100px] flex flex-col items-start gap-4 px-3">
          <Sheet>
            <SheetTrigger>
              <div className="w-[690px] h-[70px] border-b-2">
                <div className="flex items-start justify-center flex-col gap-1">
                  <h4 className="text-lg">20240925535353</h4>
                  <p className="font-light text-gray-600 text-sm">
                    Tue Sept. 25 2024
                  </p>
                </div>
              </div>
            </SheetTrigger>

            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Name of the data log</SheetTitle>

                <SheetDescription>
                  The data shown in this chart from your last production
                </SheetDescription>
              </SheetHeader>

              <div className="w-full flex flex-col gap-8 items-center">
                <div className="w-[230px]">
                  <PieChart
                    title="Bio fuel produced"
                    fill=" #3ad65e"
                    icon={<BsFillFuelPumpFill size={18} />}
                    value={250}
                  />
                </div>

                <div className="flex justify-center flex-wrap gap-4">
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
            </SheetContent>
          </Sheet>

          {/* <div className='w-[690px] h-[70px] border-b-2'>
                              <div className='flex items-start justify-center flex-col gap-1'>
                                   <h4 className='text-lg'>20240925535353</h4>
                                   <p className='font-light text-gray-600 text-sm'>Tue Sept. 25 2024</p>
                              </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}
