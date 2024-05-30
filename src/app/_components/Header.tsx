"use client";

import { useState } from "react";

import { FaPhoneVolume } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <header>
      <nav className="relative bg-[#264AB9] z-10 py-[9px] xl:py-0 xl:bg-transparent border-gray-200 dark:bg-gray-900 xl:max-w-[1393px] mx-auto">
        <div className="max-w-[353px] relative xl:max-w-[1393px] flex flex-wrap items-center justify-between mx-auto pt-[10px] xl:pt-[21px] pl-[1px] xl:pl-2 pb-1 xl:pb-[10px]">
          <div className="overflow-hidden absolute xl:left-[-22.7%] left-[-3.3%] w-[103.4%] bottom-[-16%] xl:bottom-[-10%] -z-10">
            <Image
              className="hidden xl:block max-w-max"
              src="/images/backGroundLogo.png"
              width={954}
              height={815}
              alt="asd"
              priority
              quality={100}
            />
            <Image
              className="block xl:hidden"
              src="/images/Mask group.png"
              width={500}
              height={500}
              quality={100}
              alt="asd"
            />
          </div>
          <a href="#">
            <Image
              className="w-[51%] xl:w-auto"
              src="/images/logo.svg"
              width={200}
              height={200}
              quality={100}
              alt="Logo"
            />
          </a>

          <button
            onClick={() => setCollapsed(!collapsed)}
            type="button"
            className="inline-flex xl:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <Image
              className="max-w-max"
              src="/icons/hamburger.svg"
              alt="hamburger"
              width={20}
              height={20}
            />
          </button>
          <div
            className={`${
              collapsed ? "block" : "hidden"
            } absolute xl:relative bottom-[-40%] right-[4%] xl:right-0  w-full xl:block xl:w-auto`}
          >
            <ul className="flex flex-col xl:flex-row absolute xl:relative right-[-2%] font-bold xl:right-0 xl:-mr-4 w-[22.0625rem] xl:w-auto border xl:border-none rounded-lg bg-white *:text-lg *:text-[#00355D] xl:items-center xl:pb-0 pb-3 gap-2.5">
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Về chúng tôi
                </a>
              </li>
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Dự án
                </a>
              </li>
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Dịch vụ
                </a>
              </li>
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Bảng giá
                </a>
              </li>
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Tin tức
                </a>
              </li>
              <li className="hover:border-b hover:border-b-[#28EFE2] hover:text-[#28EFE2]">
                <a className="pl-3 pr-[13rem] xl:px-2" href="#">
                  Liên hệ
                </a>
              </li>
              <li className="font-extrabold py-[0.625rem] px-[25px] rounded-full bg-gradient-to-r from-[#10B8C4] to-[#2AD8CD]">
                <a className="flex items-center gap-3" href="#">
                  <FaPhoneVolume className="text-xl text-white" />
                  <span className="text-white">098 - 888 - 8888</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
