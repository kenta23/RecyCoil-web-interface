import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import PieChart from '../components/pie-chart';
import { BsFillFuelPumpFill } from 'react-icons/bs';

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

            <SheetContent className="bg-[#ececd3]">
              <SheetHeader>
                <SheetTitle>Date Today</SheetTitle>

                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>

              <div className="w-full ">
                <div className="w-[350px]">
                  <PieChart
                    title="Bio fuel produced"
                    fill=" #3ad65e"
                    icon={<BsFillFuelPumpFill size={18} />}
                    value={400}
                  />
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
