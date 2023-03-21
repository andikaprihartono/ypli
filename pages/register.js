import React from "react";
import Link from "next/link";
import LogoPic from "../public/components/logo.png";
import Image from 'next/image';

import Layout from '../widget/layout';

export default function register(){
  return (
    <>
    <Layout>
    <div class="w-full flex flex-col p-4 items-center justify-center">
                        <Image src={LogoPic} alt="Logo Pic" />
                        <p class="mt-5 font-bold text-2xl text-color-title text-center">
                        Create Your Account
                        </p>
                        <p class="font-normal text-base text-center mt-2">
                        Pastikan informasi yang anda berikan benar, agar kami mudah menginformasikan anda.
                        </p>
                      </div>    
      <div classname="p-4 w-full  ">
        <form class="flex flex-col w-full px-4">
          <div class="mb-5">
            <label class="font-bold text-base mb-2" for="">
              Your Name
            </label>
            <input
              className="w-full rounded-xl border py-4 px-6 "
              placeholder="Your Name"
            />
          </div>

          <div class="mb-5">
            <label class="font-bold text-base mb-2" for="">
              Email
            </label>
            <input
              className="w-full rounded-xl border py-4 px-6 "
              placeholder="yourmail@mail.com"
            />
          </div>

          <div class="mb-5">
            <label class="font-bold text-base mb-2" for="">
              Gender
            </label>
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  id="gender-male"
                  type="radio"
                  defaultValue
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="gender-male"
                  className="ml-2 text-base font-normal "
                >
                  Laki - laki
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="gender-female"
                  type="radio"
                  defaultValue
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="gender-female"
                  className="ml-2 text-base font-normal "
                >
                  Perempuan
                </label>
              </div>
            </div>         
          </div>
<div className="mb-5">
<div >
              <label class="font-bold text-base mb-5" for="">
                Password
              </label>
              <div class="relative">
                <input
                  className=" w-full rounded-xl border py-4 px-6 mb-2"
                  placeholder="Password"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center   ">
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375ZM10 13.125C9.38193 13.125 8.77775 12.9417 8.26384 12.5983C7.74994 12.255 7.3494 11.7669 7.11288 11.1959C6.87635 10.6249 6.81447 9.99653 6.93505 9.39034C7.05562 8.78415 7.35325 8.22733 7.79029 7.79029C8.22733 7.35325 8.78415 7.05562 9.39034 6.93505C9.99653 6.81447 10.6249 6.87635 11.1959 7.11288C11.7669 7.3494 12.255 7.74994 12.5983 8.26384C12.9417 8.77775 13.125 9.38193 13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125Z"
                      fill="#BAC1FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.32958 2.66254C3.58499 2.43035 3.98028 2.44917 4.21247 2.70458L16.7125 16.4546C16.9447 16.71 16.9258 17.1053 16.6704 17.3375C16.415 17.5697 16.0197 17.5508 15.7875 17.2954L3.28754 3.54542C3.05535 3.29001 3.07417 2.89473 3.32958 2.66254Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.36085 7.26713C8.59302 7.52256 8.57416 7.91784 8.31873 8.15C7.94533 8.48939 7.68338 8.93382 7.5673 9.42488C7.45122 9.91593 7.48645 10.4306 7.66835 10.9013C7.85026 11.3719 8.17033 11.7765 8.58648 12.0619C9.00263 12.3472 9.49539 12.5 9.99998 12.5L10.0023 12.5C10.6229 12.5024 11.2217 12.2709 11.6793 11.8517C11.9338 11.6185 12.3292 11.6358 12.5623 11.8903C12.7955 12.1448 12.7782 12.5402 12.5237 12.7734C11.8346 13.4046 10.9331 13.7533 9.99865 13.75C9.24219 13.7497 8.5035 13.5206 7.8796 13.0928C7.25537 12.6648 6.77526 12.0579 6.50241 11.3519C6.22955 10.6459 6.17671 9.87389 6.35083 9.13731C6.52495 8.40073 6.91788 7.73409 7.47797 7.225C7.7334 6.99284 8.12868 7.01169 8.36085 7.26713Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.33917 5.07782C6.49474 5.38595 6.37107 5.76185 6.06294 5.91743C4.57739 6.66749 3.51286 7.75402 2.81653 8.66333C2.4694 9.11663 2.21726 9.52137 2.05315 9.81015C2.01303 9.88076 1.97823 9.94432 1.94866 9.99983C2.02219 10.1376 2.12784 10.3247 2.26718 10.546C2.58033 11.0434 3.06008 11.7076 3.72319 12.3707C5.0458 13.6933 7.08286 15.0001 10 15.0001L10.0051 15.0002C11.3702 15.0113 12.7183 14.6967 13.9376 14.0826C14.2459 13.9273 14.6217 14.0513 14.7769 14.3596C14.9322 14.6679 14.8082 15.0437 14.4999 15.1989C13.1039 15.9021 11.5605 16.2625 9.99745 16.2501C6.66594 16.2494 4.32882 14.7441 2.83931 13.2546C2.09617 12.5114 1.5603 11.7694 1.20939 11.212C1.03362 10.9329 0.903373 10.6987 0.815984 10.5318C0.772267 10.4484 0.739205 10.3816 0.716476 10.3344C0.705109 10.3108 0.696319 10.2921 0.690066 10.2786C0.68694 10.2718 0.684447 10.2663 0.682582 10.2622L0.680256 10.2571L0.679445 10.2553L0.679127 10.2546C0.678993 10.2543 0.678868 10.254 1.25 10.0001C0.678625 9.74685 0.678715 9.74664 0.67881 9.74643L0.679551 9.74476L0.680982 9.74157C0.682104 9.73908 0.683562 9.73585 0.68536 9.73191C0.688956 9.72403 0.69391 9.71329 0.700236 9.69983C0.712888 9.67292 0.731043 9.6351 0.754829 9.58747C0.802386 9.49226 0.872553 9.35767 0.966376 9.19256C1.15383 8.86269 1.43685 8.40903 1.8241 7.90334C2.59651 6.89469 3.79761 5.66091 5.49956 4.80159C5.80769 4.64602 6.18359 4.76969 6.33917 5.07782ZM1.25 10.0001L0.678625 9.74685C0.607041 9.90833 0.607129 10.0926 0.678868 10.254L1.25 10.0001Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.27972 3.89141C8.84842 3.79621 9.4241 3.74892 10.0007 3.75002C13.3332 3.7502 15.671 5.25578 17.1608 6.74558C17.9039 7.48872 18.4398 8.23078 18.7907 8.7881C18.9665 9.06726 19.0967 9.30148 19.1841 9.46832C19.2278 9.55178 19.2609 9.61851 19.2836 9.66571C19.295 9.68932 19.3038 9.70806 19.31 9.72158C19.3132 9.72835 19.3156 9.73381 19.3175 9.73792L19.3198 9.74308L19.3207 9.74489L19.321 9.7456C19.3211 9.7459 19.3212 9.74618 18.7501 10C19.3212 10.2539 19.3212 10.254 19.3211 10.2542L19.3206 10.2553L19.3197 10.2574L19.317 10.2633C19.3148 10.2681 19.3119 10.2745 19.3082 10.2825C19.3008 10.2984 19.2904 10.3205 19.2768 10.3484C19.2498 10.4041 19.2103 10.483 19.158 10.5813C19.0533 10.7777 18.8969 11.0526 18.6853 11.3763C18.2629 12.0222 17.6155 12.8701 16.7137 13.6768C16.4564 13.9069 16.0613 13.8849 15.8311 13.6276C15.601 13.3704 15.623 12.9753 15.8803 12.7451C16.6816 12.0284 17.2607 11.2708 17.6391 10.6921C17.8255 10.4071 17.962 10.1673 18.0513 10C17.9778 9.8623 17.8722 9.67527 17.7329 9.45412C17.4198 8.95676 16.94 8.29257 16.2769 7.62946C14.9543 6.30685 12.9172 5.00002 10.0001 5.00002H9.99886C9.49202 4.99902 8.98599 5.04058 8.4861 5.12425C8.14566 5.18124 7.82348 4.95146 7.76649 4.61102C7.7095 4.27058 7.93928 3.9484 8.27972 3.89141ZM18.7501 10L19.3212 10.2539C19.3931 10.0923 19.3931 9.90779 19.3212 9.74618L18.7501 10Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.97198 6.81345C10.0362 6.47431 10.3633 6.25147 10.7024 6.31573C11.5002 6.46689 12.2272 6.87346 12.7737 7.47407C13.3202 8.07467 13.6564 8.83673 13.7318 9.64524C13.7638 9.98893 13.5112 10.2935 13.1675 10.3255C12.8238 10.3576 12.5192 10.1049 12.4872 9.76123C12.437 9.22279 12.213 8.71528 11.8491 8.3153C11.4852 7.91531 11.001 7.64455 10.4697 7.54388C10.1306 7.47962 9.90772 7.15259 9.97198 6.81345Z"
                      fill="#5C68CD"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2 ">
              <div className="flex ">
                <svg
                  class="w-3 h-3 mr-2.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85375 5.14625C9.90024 5.19269 9.93712 5.24783 9.96228 5.30853C9.98744 5.36923 10.0004 5.43429 10.0004 5.5C10.0004 5.56571 9.98744 5.63077 9.96228 5.69147C9.93712 5.75217 9.90024 5.80731 9.85375 5.85375L6.35375 9.35375C6.30732 9.40024 6.25217 9.43712 6.19147 9.46228C6.13077 9.48744 6.06571 9.50039 6 9.50039C5.9343 9.50039 5.86923 9.48744 5.80853 9.46228C5.74783 9.43712 5.69269 9.40024 5.64625 9.35375L4.14625 7.85375C4.05243 7.75993 3.99972 7.63268 3.99972 7.5C3.99972 7.36732 4.05243 7.24007 4.14625 7.14625C4.24007 7.05243 4.36732 6.99972 4.5 6.99972C4.63268 6.99972 4.75993 7.05243 4.85375 7.14625L6 8.29313L9.14625 5.14625C9.19269 5.09976 9.24783 5.06288 9.30853 5.03772C9.36923 5.01256 9.43429 4.99961 9.5 4.99961C9.56571 4.99961 9.63077 5.01256 9.69147 5.03772C9.75217 5.06288 9.80732 5.09976 9.85375 5.14625ZM13.5 7C13.5 8.28558 13.1188 9.54229 12.4046 10.6112C11.6903 11.6801 10.6752 12.5132 9.48744 13.0052C8.29973 13.4972 6.99279 13.6259 5.73192 13.3751C4.47104 13.1243 3.31285 12.5052 2.40381 11.5962C1.49477 10.6872 0.875703 9.52896 0.624899 8.26809C0.374095 7.00721 0.502816 5.70028 0.994786 4.51256C1.48676 3.32484 2.31988 2.30968 3.3888 1.59545C4.45772 0.881218 5.71442 0.5 7 0.5C8.72335 0.50182 10.3756 1.18722 11.5942 2.40582C12.8128 3.62441 13.4982 5.27665 13.5 7ZM12.5 7C12.5 5.9122 12.1774 4.84883 11.5731 3.94436C10.9687 3.03989 10.1098 2.33494 9.10476 1.91866C8.09977 1.50238 6.9939 1.39346 5.92701 1.60568C4.86011 1.8179 3.8801 2.34172 3.11092 3.11091C2.34173 3.8801 1.8179 4.86011 1.60568 5.927C1.39347 6.9939 1.50238 8.09977 1.91867 9.10476C2.33495 10.1098 3.0399 10.9687 3.94437 11.5731C4.84884 12.1774 5.91221 12.5 7 12.5C8.45819 12.4983 9.85617 11.9184 10.8873 10.8873C11.9184 9.85617 12.4983 8.45818 12.5 7Z"
                    fill="#737373"
                  />
                </svg>
                <span class="text-sm font-normal">Minimal 8 karakter</span>
              </div>
              <div className="flex ">
                <svg
                  class="w-3 h-3 mr-2.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85375 5.14625C9.90024 5.19269 9.93712 5.24783 9.96228 5.30853C9.98744 5.36923 10.0004 5.43429 10.0004 5.5C10.0004 5.56571 9.98744 5.63077 9.96228 5.69147C9.93712 5.75217 9.90024 5.80731 9.85375 5.85375L6.35375 9.35375C6.30732 9.40024 6.25217 9.43712 6.19147 9.46228C6.13077 9.48744 6.06571 9.50039 6 9.50039C5.9343 9.50039 5.86923 9.48744 5.80853 9.46228C5.74783 9.43712 5.69269 9.40024 5.64625 9.35375L4.14625 7.85375C4.05243 7.75993 3.99972 7.63268 3.99972 7.5C3.99972 7.36732 4.05243 7.24007 4.14625 7.14625C4.24007 7.05243 4.36732 6.99972 4.5 6.99972C4.63268 6.99972 4.75993 7.05243 4.85375 7.14625L6 8.29313L9.14625 5.14625C9.19269 5.09976 9.24783 5.06288 9.30853 5.03772C9.36923 5.01256 9.43429 4.99961 9.5 4.99961C9.56571 4.99961 9.63077 5.01256 9.69147 5.03772C9.75217 5.06288 9.80732 5.09976 9.85375 5.14625ZM13.5 7C13.5 8.28558 13.1188 9.54229 12.4046 10.6112C11.6903 11.6801 10.6752 12.5132 9.48744 13.0052C8.29973 13.4972 6.99279 13.6259 5.73192 13.3751C4.47104 13.1243 3.31285 12.5052 2.40381 11.5962C1.49477 10.6872 0.875703 9.52896 0.624899 8.26809C0.374095 7.00721 0.502816 5.70028 0.994786 4.51256C1.48676 3.32484 2.31988 2.30968 3.3888 1.59545C4.45772 0.881218 5.71442 0.5 7 0.5C8.72335 0.50182 10.3756 1.18722 11.5942 2.40582C12.8128 3.62441 13.4982 5.27665 13.5 7ZM12.5 7C12.5 5.9122 12.1774 4.84883 11.5731 3.94436C10.9687 3.03989 10.1098 2.33494 9.10476 1.91866C8.09977 1.50238 6.9939 1.39346 5.92701 1.60568C4.86011 1.8179 3.8801 2.34172 3.11092 3.11091C2.34173 3.8801 1.8179 4.86011 1.60568 5.927C1.39347 6.9939 1.50238 8.09977 1.91867 9.10476C2.33495 10.1098 3.0399 10.9687 3.94437 11.5731C4.84884 12.1774 5.91221 12.5 7 12.5C8.45819 12.4983 9.85617 11.9184 10.8873 10.8873C11.9184 9.85617 12.4983 8.45818 12.5 7Z"
                    fill="#737373"
                  />
                </svg>
                <span class="text-sm font-normal">Satu huruf kecil</span>
              </div>
              <div className="flex">
                <svg
                  class="w-3 h-3 mr-2.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85375 5.14625C9.90024 5.19269 9.93712 5.24783 9.96228 5.30853C9.98744 5.36923 10.0004 5.43429 10.0004 5.5C10.0004 5.56571 9.98744 5.63077 9.96228 5.69147C9.93712 5.75217 9.90024 5.80731 9.85375 5.85375L6.35375 9.35375C6.30732 9.40024 6.25217 9.43712 6.19147 9.46228C6.13077 9.48744 6.06571 9.50039 6 9.50039C5.9343 9.50039 5.86923 9.48744 5.80853 9.46228C5.74783 9.43712 5.69269 9.40024 5.64625 9.35375L4.14625 7.85375C4.05243 7.75993 3.99972 7.63268 3.99972 7.5C3.99972 7.36732 4.05243 7.24007 4.14625 7.14625C4.24007 7.05243 4.36732 6.99972 4.5 6.99972C4.63268 6.99972 4.75993 7.05243 4.85375 7.14625L6 8.29313L9.14625 5.14625C9.19269 5.09976 9.24783 5.06288 9.30853 5.03772C9.36923 5.01256 9.43429 4.99961 9.5 4.99961C9.56571 4.99961 9.63077 5.01256 9.69147 5.03772C9.75217 5.06288 9.80732 5.09976 9.85375 5.14625ZM13.5 7C13.5 8.28558 13.1188 9.54229 12.4046 10.6112C11.6903 11.6801 10.6752 12.5132 9.48744 13.0052C8.29973 13.4972 6.99279 13.6259 5.73192 13.3751C4.47104 13.1243 3.31285 12.5052 2.40381 11.5962C1.49477 10.6872 0.875703 9.52896 0.624899 8.26809C0.374095 7.00721 0.502816 5.70028 0.994786 4.51256C1.48676 3.32484 2.31988 2.30968 3.3888 1.59545C4.45772 0.881218 5.71442 0.5 7 0.5C8.72335 0.50182 10.3756 1.18722 11.5942 2.40582C12.8128 3.62441 13.4982 5.27665 13.5 7ZM12.5 7C12.5 5.9122 12.1774 4.84883 11.5731 3.94436C10.9687 3.03989 10.1098 2.33494 9.10476 1.91866C8.09977 1.50238 6.9939 1.39346 5.92701 1.60568C4.86011 1.8179 3.8801 2.34172 3.11092 3.11091C2.34173 3.8801 1.8179 4.86011 1.60568 5.927C1.39347 6.9939 1.50238 8.09977 1.91867 9.10476C2.33495 10.1098 3.0399 10.9687 3.94437 11.5731C4.84884 12.1774 5.91221 12.5 7 12.5C8.45819 12.4983 9.85617 11.9184 10.8873 10.8873C11.9184 9.85617 12.4983 8.45818 12.5 7Z"
                    fill="#737373"
                  />
                </svg>
                <span class="text-sm font-normal">Satu angka</span>
              </div>
              <div className="flex">
                <svg
                  class="w-3 h-3 mr-2.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85375 5.14625C9.90024 5.19269 9.93712 5.24783 9.96228 5.30853C9.98744 5.36923 10.0004 5.43429 10.0004 5.5C10.0004 5.56571 9.98744 5.63077 9.96228 5.69147C9.93712 5.75217 9.90024 5.80731 9.85375 5.85375L6.35375 9.35375C6.30732 9.40024 6.25217 9.43712 6.19147 9.46228C6.13077 9.48744 6.06571 9.50039 6 9.50039C5.9343 9.50039 5.86923 9.48744 5.80853 9.46228C5.74783 9.43712 5.69269 9.40024 5.64625 9.35375L4.14625 7.85375C4.05243 7.75993 3.99972 7.63268 3.99972 7.5C3.99972 7.36732 4.05243 7.24007 4.14625 7.14625C4.24007 7.05243 4.36732 6.99972 4.5 6.99972C4.63268 6.99972 4.75993 7.05243 4.85375 7.14625L6 8.29313L9.14625 5.14625C9.19269 5.09976 9.24783 5.06288 9.30853 5.03772C9.36923 5.01256 9.43429 4.99961 9.5 4.99961C9.56571 4.99961 9.63077 5.01256 9.69147 5.03772C9.75217 5.06288 9.80732 5.09976 9.85375 5.14625ZM13.5 7C13.5 8.28558 13.1188 9.54229 12.4046 10.6112C11.6903 11.6801 10.6752 12.5132 9.48744 13.0052C8.29973 13.4972 6.99279 13.6259 5.73192 13.3751C4.47104 13.1243 3.31285 12.5052 2.40381 11.5962C1.49477 10.6872 0.875703 9.52896 0.624899 8.26809C0.374095 7.00721 0.502816 5.70028 0.994786 4.51256C1.48676 3.32484 2.31988 2.30968 3.3888 1.59545C4.45772 0.881218 5.71442 0.5 7 0.5C8.72335 0.50182 10.3756 1.18722 11.5942 2.40582C12.8128 3.62441 13.4982 5.27665 13.5 7ZM12.5 7C12.5 5.9122 12.1774 4.84883 11.5731 3.94436C10.9687 3.03989 10.1098 2.33494 9.10476 1.91866C8.09977 1.50238 6.9939 1.39346 5.92701 1.60568C4.86011 1.8179 3.8801 2.34172 3.11092 3.11091C2.34173 3.8801 1.8179 4.86011 1.60568 5.927C1.39347 6.9939 1.50238 8.09977 1.91867 9.10476C2.33495 10.1098 3.0399 10.9687 3.94437 11.5731C4.84884 12.1774 5.91221 12.5 7 12.5C8.45819 12.4983 9.85617 11.9184 10.8873 10.8873C11.9184 9.85617 12.4983 8.45818 12.5 7Z"
                    fill="#737373"
                  />
                </svg>
                <span class="text-sm font-normal">Satu angka</span>
              </div>
            </div>
</div>

<div className="mb-5">
              <label class="font-bold text-base mb-5" for="">
                Confirm Password
              </label>
              <div class="relative">
                <input
                  className=" w-full rounded-xl border py-4 px-6 mb-2"
                  placeholder="Password"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center   ">
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375ZM10 13.125C9.38193 13.125 8.77775 12.9417 8.26384 12.5983C7.74994 12.255 7.3494 11.7669 7.11288 11.1959C6.87635 10.6249 6.81447 9.99653 6.93505 9.39034C7.05562 8.78415 7.35325 8.22733 7.79029 7.79029C8.22733 7.35325 8.78415 7.05562 9.39034 6.93505C9.99653 6.81447 10.6249 6.87635 11.1959 7.11288C11.7669 7.3494 12.255 7.74994 12.5983 8.26384C12.9417 8.77775 13.125 9.38193 13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125Z"
                      fill="#BAC1FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.32958 2.66254C3.58499 2.43035 3.98028 2.44917 4.21247 2.70458L16.7125 16.4546C16.9447 16.71 16.9258 17.1053 16.6704 17.3375C16.415 17.5697 16.0197 17.5508 15.7875 17.2954L3.28754 3.54542C3.05535 3.29001 3.07417 2.89473 3.32958 2.66254Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.36085 7.26713C8.59302 7.52256 8.57416 7.91784 8.31873 8.15C7.94533 8.48939 7.68338 8.93382 7.5673 9.42488C7.45122 9.91593 7.48645 10.4306 7.66835 10.9013C7.85026 11.3719 8.17033 11.7765 8.58648 12.0619C9.00263 12.3472 9.49539 12.5 9.99998 12.5L10.0023 12.5C10.6229 12.5024 11.2217 12.2709 11.6793 11.8517C11.9338 11.6185 12.3292 11.6358 12.5623 11.8903C12.7955 12.1448 12.7782 12.5402 12.5237 12.7734C11.8346 13.4046 10.9331 13.7533 9.99865 13.75C9.24219 13.7497 8.5035 13.5206 7.8796 13.0928C7.25537 12.6648 6.77526 12.0579 6.50241 11.3519C6.22955 10.6459 6.17671 9.87389 6.35083 9.13731C6.52495 8.40073 6.91788 7.73409 7.47797 7.225C7.7334 6.99284 8.12868 7.01169 8.36085 7.26713Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.33917 5.07782C6.49474 5.38595 6.37107 5.76185 6.06294 5.91743C4.57739 6.66749 3.51286 7.75402 2.81653 8.66333C2.4694 9.11663 2.21726 9.52137 2.05315 9.81015C2.01303 9.88076 1.97823 9.94432 1.94866 9.99983C2.02219 10.1376 2.12784 10.3247 2.26718 10.546C2.58033 11.0434 3.06008 11.7076 3.72319 12.3707C5.0458 13.6933 7.08286 15.0001 10 15.0001L10.0051 15.0002C11.3702 15.0113 12.7183 14.6967 13.9376 14.0826C14.2459 13.9273 14.6217 14.0513 14.7769 14.3596C14.9322 14.6679 14.8082 15.0437 14.4999 15.1989C13.1039 15.9021 11.5605 16.2625 9.99745 16.2501C6.66594 16.2494 4.32882 14.7441 2.83931 13.2546C2.09617 12.5114 1.5603 11.7694 1.20939 11.212C1.03362 10.9329 0.903373 10.6987 0.815984 10.5318C0.772267 10.4484 0.739205 10.3816 0.716476 10.3344C0.705109 10.3108 0.696319 10.2921 0.690066 10.2786C0.68694 10.2718 0.684447 10.2663 0.682582 10.2622L0.680256 10.2571L0.679445 10.2553L0.679127 10.2546C0.678993 10.2543 0.678868 10.254 1.25 10.0001C0.678625 9.74685 0.678715 9.74664 0.67881 9.74643L0.679551 9.74476L0.680982 9.74157C0.682104 9.73908 0.683562 9.73585 0.68536 9.73191C0.688956 9.72403 0.69391 9.71329 0.700236 9.69983C0.712888 9.67292 0.731043 9.6351 0.754829 9.58747C0.802386 9.49226 0.872553 9.35767 0.966376 9.19256C1.15383 8.86269 1.43685 8.40903 1.8241 7.90334C2.59651 6.89469 3.79761 5.66091 5.49956 4.80159C5.80769 4.64602 6.18359 4.76969 6.33917 5.07782ZM1.25 10.0001L0.678625 9.74685C0.607041 9.90833 0.607129 10.0926 0.678868 10.254L1.25 10.0001Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.27972 3.89141C8.84842 3.79621 9.4241 3.74892 10.0007 3.75002C13.3332 3.7502 15.671 5.25578 17.1608 6.74558C17.9039 7.48872 18.4398 8.23078 18.7907 8.7881C18.9665 9.06726 19.0967 9.30148 19.1841 9.46832C19.2278 9.55178 19.2609 9.61851 19.2836 9.66571C19.295 9.68932 19.3038 9.70806 19.31 9.72158C19.3132 9.72835 19.3156 9.73381 19.3175 9.73792L19.3198 9.74308L19.3207 9.74489L19.321 9.7456C19.3211 9.7459 19.3212 9.74618 18.7501 10C19.3212 10.2539 19.3212 10.254 19.3211 10.2542L19.3206 10.2553L19.3197 10.2574L19.317 10.2633C19.3148 10.2681 19.3119 10.2745 19.3082 10.2825C19.3008 10.2984 19.2904 10.3205 19.2768 10.3484C19.2498 10.4041 19.2103 10.483 19.158 10.5813C19.0533 10.7777 18.8969 11.0526 18.6853 11.3763C18.2629 12.0222 17.6155 12.8701 16.7137 13.6768C16.4564 13.9069 16.0613 13.8849 15.8311 13.6276C15.601 13.3704 15.623 12.9753 15.8803 12.7451C16.6816 12.0284 17.2607 11.2708 17.6391 10.6921C17.8255 10.4071 17.962 10.1673 18.0513 10C17.9778 9.8623 17.8722 9.67527 17.7329 9.45412C17.4198 8.95676 16.94 8.29257 16.2769 7.62946C14.9543 6.30685 12.9172 5.00002 10.0001 5.00002H9.99886C9.49202 4.99902 8.98599 5.04058 8.4861 5.12425C8.14566 5.18124 7.82348 4.95146 7.76649 4.61102C7.7095 4.27058 7.93928 3.9484 8.27972 3.89141ZM18.7501 10L19.3212 10.2539C19.3931 10.0923 19.3931 9.90779 19.3212 9.74618L18.7501 10Z"
                      fill="#5C68CD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.97198 6.81345C10.0362 6.47431 10.3633 6.25147 10.7024 6.31573C11.5002 6.46689 12.2272 6.87346 12.7737 7.47407C13.3202 8.07467 13.6564 8.83673 13.7318 9.64524C13.7638 9.98893 13.5112 10.2935 13.1675 10.3255C12.8238 10.3576 12.5192 10.1049 12.4872 9.76123C12.437 9.22279 12.213 8.71528 11.8491 8.3153C11.4852 7.91531 11.001 7.64455 10.4697 7.54388C10.1306 7.47962 9.90772 7.15259 9.97198 6.81345Z"
                      fill="#5C68CD"
                    />
                  </svg>
                </div>
              </div>
            </div>
         
          <button class ="w-full text-base rounded-xl font-bold text-white text-center py-2.5 border-2 border-btn bg-btn">
            Register
          </button>
        </form>
        <div class="p-4 w-full ">
                <div class="w-full flex justify-around  mb-5">
                    <div class="border-t-2 my-auto w-1/4"></div>
                    <span class="font-light text-sm  ">Sudah  punya akun ?</span>
                    <div class=" border-t-2 my-auto w-1/4 "></div>
                </div>
              <Link href={'/login'}>
                <button
                    class="w-full text-base rounded-xl font-bold  text-center py-2.5 border-btn border-2 text-color-title ">Login</button>

              </Link>
              
            </div>
      </div>
      </Layout>
    </>
  );
}
