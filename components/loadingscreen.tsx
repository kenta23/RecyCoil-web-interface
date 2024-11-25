'use client'

import Image from 'next/image'
import { animated, useSpring, SpringConfig} from '@react-spring/web';


export default function LoadingScreen() {

   const fadeAnimation = useSpring<SpringConfig>({
     from: { opacity: 1,  transform: "scale(1)" },
     to: { opacity: 0,  transform: "scale(1.2)" },
     config: { duration: 2000, bounce: 0.5 },
   });

   const pulsateAnimation = useSpring({
    loop: { reverse: true },
    to: { transform: "scale(1.1)" },
    from: { transform: "scale(1)" },
    config: { duration: 800 },
  });


  return (
      <animated.div
        style={fadeAnimation}
        className="min-h-screen h-full w-full flex items-center justify-center bg-gradient-to-tr from-[#ECE499] to-[#4CED52]"
      >
        <animated.div style={pulsateAnimation}>
          <Image
            src={"/logo-with-text.png"}
            width={200}
            quality={100}
            loading="eager"
            height={1000}
            alt={"RecyCoil Logo"}
          />
        </animated.div>
      </animated.div>
    );
 
}
