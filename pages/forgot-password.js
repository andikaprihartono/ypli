import React from "react";
import Link from "next/link";
import Lock from "../public/components/lock.png";
import Back from "../public/components/back.png"
import Image from 'next/image';
import Layout from '../widget/layout';


export default function forgotpassword(){
    return(
        <>
<Layout>

<Link href="/login">
<div class="top-0 left-0 md:hidden w-full flex">
<Image
src={Back} 
  width={32}
  height={32}
/>
<span className="font-bold text-base my-auto ml-2 text-color-title">Kembali Login</span>
</div>
</Link>

<div class="w-full mt-11 mb-5 flex flex-col p-4 items-center justify-center">
                        <Image src={Lock} 
                        alt="Logo Pic"
                        width={54}
                        height={54}
                         />
                        <p class="font-bold text-2xl text-color-title text-center">
                       Lupa Password
                        </p>
                        <p class="font-normal text-base text-center">
                        Masukkan alamat email akun anda
                        </p>
                      </div>
<div classname="p-4  w-full  ">
        <form class="flex flex-col w-full px-4 mt-5 mb-80">
        <div class="mb-10">
            <label class="font-bold text-base mb-2" for="">
             Email
            </label>
            <input
              className="w-full rounded-xl border py-4 px-6 "
              placeholder="yourmail@mail.com"
            />
          </div>

         
          <button class ="w-full text-base rounded-xl font-bold text-white text-center py-2.5
          mt-5 border-2 border-btn bg-btn">
            Submit
          </button>
        </form>
       
      </div>
</Layout>
        </>
    )
}