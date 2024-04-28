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
    desc: "Password generators create random combinations of characters based on user settings like length and character types. They use algorithms to ensure unpredictability and avoid common patterns. Good generators analyze password strength and store passwords securely.",
  },
  {
    title: "Are password generators safe?",
    desc: "Yes, password generators are generally safe when used from reputable sources. Ensure they use strong encryption, randomization, and securely store passwords.",
  },
  {
    title: "Is it safe to generate password online",
    desc: "Yes, if you use a reputable online password generator that employs strong encryption and randomization techniques, it's generally safe.",
  },
  {
    title: "What are the requirements for a strong password",
    desc: "For a strong password, aim for at least 16 characters, including a mix of uppercase letters, lowercase letters, numbers, and symbols.",
  },
  {
    title: "What is a bad password",
    desc: "A bad password is one that is short, easily guessable, or commonly used.",
  },
];
const Accord = () => {
  return (
    <div className="mt-[24px] xl:mt-[64px]">
      {faqs.map((faq, index) => (
        <Accordion key={faq.title} type="single" collapsible>
          <AccordionItem value={faq.title} className="py-[16px] lg:py-[24px]">
            <AccordionTrigger className="text-[#101828] text-[20px] text-start font-normal ">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-[#667085] text-base  ">
              {faq.desc}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Accord;
