import React from "react";
import Header from "../header";
import Form from "../form";
import Regist from "../register";
import BackgroundLogin from "../backgroundside";
import Footer from "../footer";
import Ig from "../../../public/components/ig.png";
import Email from "../../../public/components/email.png";
import Wa from "../../../public/components/wa.png";
import Cat from "../../../public/components/cat.png";
import Near from "../../../public/components/near.png";
import Chat from "../../../public/components/chat.png";
import Toparrow from "../../../public/components/atas.png";
import Lock from "../../../public/components/lock.png";
import Image from 'next/image';
import Formpass from "../new-password/newpass";

export default function forgotpassword(){
    return(
        <>
        <div>
        <div className="w-full h-full ">
          <div className=" flex h-full flex-wrap items-center justify-center ">
            <div className="w-full h-full">
              <div className="bg-white ">
                <div className="w-full h-screen m-auto lg:flex lg:flex-wrap">
                  <div className="px-4 m-auto lg:w-6/12">
                    <div className="size m-auto">
                      <div class="w-full flex flex-col p-4 items-center justify-center">
                        <Image src={Lock} alt="Logo Pic" />
                        <p class="font-bold text-4xl text-color-title text-center">
                        Create Your Account
                        </p>
                        <p class="font-normal text-base text-center">
                        Pastikan informasi yang anda berikan benar, agar kami mudah menginformasikan anda.
                        </p>
                      </div>
                      <Formpass />
                      
                    </div>
                  </div>
                  <div
                    className="relative bottom-0 hidden lg:block flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(90deg, #434EAB 0%, #7A85EF 100%, #7A85EF 100%)",
                    }}
                  >
                    <div className=" text-white flex flex-col items-center mx-auto justify-center size-background-blue text-white  lg:pt-72">
                      <p className="font-bold text-5xl text-center mb-3">
                      Contact Information
                      </p>
                      <p className="text-lg text-center font-normal mb-6">
                      If you have problem with LOGIN or have any question, 
please contact us.
                      </p>
                      <div className="grid gap-4 grid-cols-3 place-content-center ">
                          <div className="mx-auto">
                            <Image src={Ig} alt="Picture ig" width={52} height={52} />
                          </div>
                          <div className="mx-auto">
                            <Image src={Email} alt="Picture email" width={52} height={52} />
                          </div>
                          <div className="mx-auto">
                            <Image src={Wa} alt="Picture wa" width={52} height={52} />
                          </div>
                       </div>
                    </div>
                    <div className="cat-background">
                          <Image 
                            src={Cat}
                            alt="Cat Baground"
                            width={389}
                            height={445}
                          />
                    </div>  
                    <div className="arrow-right-bacground">
                    <Image 
                            src={Near}
                            alt="Arrow Right Baground"
                            width={250}
                            height={89}
                          />
                    </div> 
                    <div className="chat">
                    <div className="relative">
                    <Image 
                      src={Chat}
                      alt="chat"
                      width={207}
                      height={92}
                    />
                    <div className="font-chat">
                    <p className="text-base font-bold text-white text-center top-0 left-0 ">Lah ini kenapa ga bisa LOGIN ??</p>
                    </div>
                    </div>

                    </div> 
                    <div className="arrow-top">
                    <Image
                    src={Toparrow}
                    alt="top arrow"
                    width={91}
                    height={288}
                     />
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bottom-0 lg:hidden flex mx-auto items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
          style={{
            background:
              "linear-gradient(90deg, #434EAB 0%, #7A85EF 100%, #7A85EF 100%)",
          }}
        >
          <div className=" py-10 text-white w-80 flex flex-col mx-auto">
            <p className="font-bold text-xl text-center mb-3">
              Contact Information
            </p>
            <p className="text-sm text-center font-normal mb-6">
              If you have problem with LOGIN or have any question, please
              contact us.
            </p>
            <div className="grid gap-4 grid-cols-3 ">
              <div>
                <Image src={Ig} alt="Picture ig" width={52} height={52} />
              </div>
              <div>
                <Image src={Email} alt="Picture email" width={52} height={52} />
              </div>
              <div>
                <Image src={Wa} alt="Picture wa" width={52} height={52} />
              </div>
            </div>
          </div>


        
        </div>
      </div>
        </>
    )
}