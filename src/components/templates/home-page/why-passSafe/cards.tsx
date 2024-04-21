import React from "react";
import generation from "@/assets/why-passsafe/generation.png";
import storage from "@/assets/why-passsafe/storage.png";
import ux from "@/assets/why-passsafe/user-experience.png";
import Image from "next/image";
import Text from "@/components/ui/shared/components/typography/Text";
import Header from "@/components/ui/shared/components/typography/Header";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Password Generation",
    img: generation,
    desc: "Our platform enables users to customize their passwords and generate random passwords for heightened security",
  },
  {
    title: "Password Storage",
    img: storage,
    desc: "Your digital identity holds immense value, and safeguarding it is of utmost importance. ",
  },
];
const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[48px]">
        {cards.map((card) => {
          const titleParts = card.title.split(" ");
          return (
            <div key={card.title}>
              <div className="mb-6">
                {" "}
                <Image src={card.img} alt={card.title} />
              </div>
              {titleParts.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    "text-[20px] md:text-[24px] xl:text-[32px] font-medium",
                    index === 1 ? "text-primary-500" : ""
                  )}
                >
                  {word}

                  {index < titleParts.length - 1 && " "}
                </span>
              ))}

              <Text variant="primary" size="xl" className="mt-4">
                {" "}
                {card.desc}
              </Text>
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <div className="mb-6">
          <Image src={ux} alt="Good User Experience" />
        </div>
        <Header weight="medium" variant="primary-100" size="md">
          Good <span className=" text-primary-500">User Experience</span>
        </Header>
        <Text size="xl" variant="primary" className="mt-4 w-full lg:w-[587px]">
          Our platform ensures accessible navigation and easily comprehensible
          terms, accompanied by intuitive affordances throughout
        </Text>
      </div>
    </div>
  );
};

export default Cards;
