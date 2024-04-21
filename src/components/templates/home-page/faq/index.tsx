import { Accordion } from "@/components/ui/accordion";
import Header from "@/components/ui/shared/components/typography/Header";
import Text from "@/components/ui/shared/components/typography/Text";
import ContainerLayout from "@/components/ui/shared/layout/container-layout";
import React from "react";
import Accord from "./Accordion";

const FAQ = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="flex flex-col items-center mt-[64px] lg:mt-[124px]">
          <Header weight="medium" size="lg">
            Frequently asked questions
          </Header>
          <Text
            variant="primary"
            className="w-full lg:w-[768px] mt-2 text-center"
            size="xl"
          >
            Everything you need to know about the product and billing.
          </Text>
        </div>
        <Accord />
      </ContainerLayout>
    </section>
  );
};

export default FAQ;
