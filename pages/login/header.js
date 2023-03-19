import React from "react";
import Logo from '../../public/components/logo.svg';
import Image from 'next/image';
import LogoPic from '../../public/components/logo.png'
export default function header() {
  return (
    <>
    <div class="w-full flex flex-col p-4 items-center justify-center" >
           <Image
           src={LogoPic}
           alt="Logo Pic"
            />
            <p class="font-bold text-4xl text-color-title text-center">Hi, Welcome back</p>
                <p class="font-normal text-base">Login with your account</p>

    </div>
      
    </>
  );
}
