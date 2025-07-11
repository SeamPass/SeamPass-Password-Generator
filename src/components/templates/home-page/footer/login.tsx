"use client";
import { Button } from "@/components/ui/shared/components/button";
import Header from "@/components/ui/shared/components/typography/Header";
import auth from "@/utils/auth";
import React from "react";

const Login = () => {
  const { handleLogin, handleCreateAccount } = auth();

  return (
    <div className="w-[1112px] flex flex-col items-center h-[218px] lg:h-[271px] px-[20px] lg:px-0 pt-[30px] lg:pt-[57px] bg-white rounded-[8px] shadow-[0px_20px_40px_0px_rgba(212,212,212,0.25)]">
      <Header
        weight="medium"
        size="md"
        variant="primary-100"
        className="w-full md:w-[80%] lg:w-[60%] text-center lg:leading-[48px]"
      >
        Log in to our platform and enjoy the confidence that you need
      </Header>
      <div className="w-fit flex items-center gap-[10px] mt-7 ">
        <Button onClick={handleCreateAccount} className="!w-fit px-4 bg-primary-500 text-white">
          Create account
        </Button>
        <Button onClick={handleLogin} variant="tertiary" className="!w-fit px-8">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
