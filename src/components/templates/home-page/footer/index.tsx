import React from "react";
import Login from "./login";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import ContainerLayout from "@/components/ui/shared/layout/container-layout";

const Footer = () => {
  return (
    <section className=" bg-primary-300 w-full h-[163px] lg:h-[286px] mt-[32px] lg:mt-[64px]">
      <ContainerLayout>
        {" "}
        <div className=" bg-primary-300 w-full h-[163px] lg:h-[286px]">
          <div className="flex justify-center pt-[33px] lg:pt-[88px]">
            <Login />
          </div>
        </div>
        <div className="mt-[124px] lg:mt-[120px] flex flex-col gap-[16px] items-center text-center pb-[65px]">
          <Image width={150} height={150} src={logo} alt="logo" />
          <hr className=" w-full h-[1px] border-grey-200" />
          <span className=" text-[14px] md:text-[16px] text-grey-100">
            Copyright &copy; 2024. All rights reserved
          </span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Footer;
