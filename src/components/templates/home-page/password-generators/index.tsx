import React, { FC, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PasswordGeneratorProps {
  setPasswordGenerator: React.Dispatch<React.SetStateAction<string>>;
}
const PasswordGenerator: FC<PasswordGeneratorProps> = ({
  setPasswordGenerator,
}) => {
  return (
    <Tabs
      defaultValue="random"
      onValueChange={(value: string) => setPasswordGenerator(value)}
      className="w-full "
    >
      <TabsList className="bg-[#F3F9FF] h-[64px] w-full md:w-[573px] p-2">
        <TabsTrigger
          className="h-[42px] w-full text-[12px] md:text-[16px] text-primary-100 data-[state=active]:text-[#F6FAFF] data-[state=active]:bg-primary-500 cursor-pointer"
          value="random"
        >
          Generate Random password
        </TabsTrigger>
        <TabsTrigger
          className="h-[42px] w-full text-[12px] md:text-[16px] text-primary-100 data-[state=active]:text-[#F6FAFF] data-[state=active]:bg-primary-500 cursor-pointer"
          value="memorable"
        >
          Generate Memorable password
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PasswordGenerator;
