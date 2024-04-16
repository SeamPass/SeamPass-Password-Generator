import React from "react";
import ContainerLayout from "../../../ui/shared/layout/container-layout";
import Header from "../../../ui/shared/components/typography/Header";
import Text from "../../../ui/shared/components/typography/Text";
import Cards from "./cards";

const WhyPassSafe = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="mt-[124px]">
          <Header variant="primary-100" weight="semibold" size="lg">
            Why PassSafe
          </Header>
          <Text variant="primary" className="max-w-[560px] mt-2" size="lg">
            Your digital identity holds immense value, and safeguarding it is of
            uttermost importance
          </Text>
        </div>
        <Cards />
      </ContainerLayout>
    </section>
  );
};

export default WhyPassSafe;
