import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    title: "What is a password generator",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
  {
    title: "How do password generator’s work",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
  {
    title: "Are password generators safe?",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
  {
    title: "Is it safe to generate password online",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
  {
    title: "What are the requirements for a strong password",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
  {
    title: "What is a bad password",
    desc: "A password generator is a web tool that creates unique and random passwords based on security recommendations. The best password generators are the ones that allow you to customize settings according to your requirements. Our tool has plenty of options for the best result.",
  },
];
const Accord = () => {
  return (
    <div className="mt-[24px] xl:mt-[64px]">
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.title}
            value={faq.title}
            className=" py-[16px] lg:py-[24px]"
          >
            <AccordionTrigger className="text-[#101828] text-[14px] font-normal md:text-[20px]">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-[#667085] text-[14px] md:text-base">
              {faq.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accord;
