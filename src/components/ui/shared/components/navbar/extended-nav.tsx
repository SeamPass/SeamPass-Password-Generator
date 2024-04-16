import React from "react";
import ContainerLayout from "../../layout/container-layout";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { Button } from "../button";

const ExtendedNav = () => {
  return (
    <nav className="bg-white">
      <ContainerLayout>
        <div className="flex justify-between py-[20px] ">
          <Image src={logo} width={200} height={200} alt="logo" />
          <div className="w-fit flex items-center gap-[10px] ">
            <Button variant="tertiary" className="!w-fit px-8">
              Log in
            </Button>
            <Button variant="primary" className="!w-fit px-4">
              Create account
            </Button>
          </div>
        </div>
      </ContainerLayout>
    </nav>
  );
};

export default ExtendedNav;
