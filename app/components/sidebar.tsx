'use client';

import React from 'react'
import Logo from './logo'
import { LuLayoutDashboard } from 'react-icons/lu'
import Link from 'next/link'
import { BiData } from 'react-icons/bi'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';

const links = [
  {
    name: "Dashboard",
    icon: <LuLayoutDashboard size={20} />,
    href: "/dashboard",
  },
  {
    name: "Data logs",
    icon: <BiData size={20} />,
    href: "/data-logs",
  },
  {
    name: 'Account',
    icon: <CgProfile size={20}/>,
    href: '/account-settings'
  }
];



export default function Sidebar() {
   const pathname = usePathname();

   
  return (
    <div className="h-full min-h-screen w-[245px] bg-[#232320]">
      <Logo />

      {/**Links */}
      <div className="flex mt-[100px] flex-col gap-3 cursor-pointer items-start w-full">
        {links.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={cn(
              "w-full h-[50px] hover:bg-[#6a7458] transition-colors flex items-center justify-start duration-150 ease-in-out",
              {
                "bg-[#99B263]": pathname === item.href,
              }
            )}
          >
            <div className="px-2 py-1 flex flex-col">
              <div
                className="flex gap-3 items-center text-white"
              >
                {item.icon}
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
