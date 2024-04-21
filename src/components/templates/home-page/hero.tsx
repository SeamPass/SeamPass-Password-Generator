"use client";
import React, { useState } from "react";
import ContainerLayout from "../../ui/shared/layout/container-layout";
import Header from "../../ui/shared/components/typography/Header";
import Text from "../../ui/shared/components/typography/Text";
import PasswordGenerator from "./password-generators";
import GeneratorLayout from "./password-generators/generator-layout";
import MemorablePassword from "./password-generators/memorable-password";
import ComponentVisibility from "@/components/ui/shared/components/componentVisibility";
import RandomPassword from "./password-generators/random-password";
import Lock from "@/assets/icons/lock";

const Hero = () => {
  const [passwordGenerator, setPasswordGenerator] = useState<string>("random");

  return (
    <section className="">
      <ContainerLayout>
        <div className="flex flex-col items-center  text-center  relative">
          <div className=" absolute left-[254px] top-6 hidden xl:block">
            <Lock />
          </div>
          <Header
            weight="semibold"
            variant="primary-100"
            size="xl"
            className="w-full md:max-w-[600px] xl:max-w-[700px] leading-[28px] md:leading-[48px] lg:leading-[57px] "
          >
            <span className=" text-primary-500">PassSafe:</span> Your Essential
            Password Management Solution
          </Header>

          <Text
            size="lg"
            variant="primary"
            className="max-w-[401px] mt-3 md:mt-6 "
          >
            PassSafe provides you with the tools and features needed to assert
            control over your online presence.
          </Text>

          <div className="mt-3">
            <PasswordGenerator setPasswordGenerator={setPasswordGenerator} />
          </div>

          <div className=" absolute right-[241px] top-[120px] hidden xl:block">
            <Lock />
          </div>
        </div>
        <div className="flex  justify-center">
          {" "}
          <GeneratorLayout>
            <ComponentVisibility appear={passwordGenerator === "memorable"}>
              <MemorablePassword />
            </ComponentVisibility>
            <ComponentVisibility appear={passwordGenerator === "random"}>
              <RandomPassword />
            </ComponentVisibility>
          </GeneratorLayout>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Hero;
