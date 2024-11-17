'use client';

import React from 'react'
import Logo from './logo'
import { LuLayoutDashboard } from 'react-icons/lu'
import Link from 'next/link'
import { BiData } from 'react-icons/bi'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
   const pathname = usePathname();

   
  return (
    <div className='h-full min-h-screen w-[229px] bg-[#232320]'>
        <Logo />


     {/**Links */}

        <div className='flex mt-[100px] flex-col gap-6 items-start w-full'>
          <div className={cn('w-full hover:bg-[#99B263] transition-colors duration-150 ease-in-out', { 
             'bg-[#99B263]': pathname === '/dashboard'
          })}> 
              <div className='px-2 py-1 flex flex-col'>
                  <Link className='flex gap-3 items-center text-white' href={'/dashboard'}>
                     <LuLayoutDashboard size={20} />
                     <p>Dashboard</p>
                  </Link>
              </div>
          </div>


          <div className={cn('w-full hover:bg-[#99B263] transition-colors duration-150 ease-in-out', { 
             'bg-[#99B263]': pathname === '/data-logs'
          })}> 
              <div className='px-2 py-1 flex flex-col'>
                  <Link className='flex gap-3 items-center text-white' href={'/data-logs'}>
                     <BiData size={20}/>
                     <p>Data Logs</p>
                  </Link>
              </div>
          </div>
        </div>
    </div>
  )
}
