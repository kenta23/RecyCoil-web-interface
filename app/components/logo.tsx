import React from 'react'
import Image from 'next/image'
import { Bakbak_One } from 'next/font/google'

const BakBakOne = Bakbak_One({
   weight: '400',
   subsets: ['latin'] 
})

export default function Logo() {
  return (
    <div className={`flex my-4 w-full justify-start items-center text-white ${BakBakOne.className}`}>
             {/**Logo Image */}
             <Image 
               alt='Logo image'
               width={75}
               height={120}
               src={'/logo-no-background.png'}
             />

             <h1 className='text-xl'>RecyCoil</h1>
      </div>
  )
}
