import { EnvelopeIcon, MapIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black/10 shadow-black/20 shadow-sm dark:bg-darkTua">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40 ">
        <div>
          <div className=" text-black/70 dark:text-white text-[18px] font-medium text-lg">
            <span className="text-[30px] md:text-[40px] text-primary ">zkys</span>
            folio
          </div>
          <h1 className="text-base mt-[0.5rem] font-semibold text-black/70 dark:text-white opacity-70  ">
            Selalu siap untuk proyek baru dan kolaborasi yang menantang. Saya
            percaya kolaborasi adalah kunci untuk solusi berkelanjutan. 
          </h1>
          {/* <p className="mt-[1.3rem] text-primary underline font-semibold ">
            example@gmail.com
          </p> */}
        </div>
        <div className="md:mx-auto">
          <h1 className="text-black/70 dark:text-white font-semibold mb-[1.4rem] text-lg ">
            Quick Link
          </h1>
          <Link href="/#" passHref>
            <p className="text-base text-black/70 dark:text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Beranda
            </p>
          </Link>
          <Link href="/#about" passHref>
            <p className="text-base text-black/70 dark:text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Tentang
            </p>
          </Link>
          {/* <Link href="/#service" passHref>
          <p className="text-base text-black/70 dark:text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
            Service
          </p>
          </Link> */}
          <Link href="/#project" passHref>
            <p className="text-base text-black/70 dark:text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Project
            </p>
          </Link>
          <Link href="/#contact" passHref>
            <p className="text-base text-black/70 dark:text-white opacity-80 mb-[1rem] cursor-pointer hover:text-primary ">
              Kontak
            </p>
          </Link>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-black/70 dark:text-white  font-semibold mb-[1.4rem] text-lg ">
            Alamat
          </h1>
          <div className="flex items-center mt-[1rem]  space-x-2  ">
            <MapIcon className="w-[1rem] h-[1rem] text-primary " />
            <p className="text-[17px] font-normal text-black/70 dark:text-white opacity-75  ">
              Jawa Barat
            </p>
          </div>
          <div className="flex items-center mt-[1rem]  space-x-2  ">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-primary " />
            <p className="text-[17px] font-normal text-black/70 dark:text-white opacity-75  ">
              zakyraihan6336@gmail.com
            </p>
          </div>
          
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-black/70 dark:text-white opacity-70 ">
        &#169; 2025 zakysfolio
      </div>
    </div>
  );
};

export default Footer;
