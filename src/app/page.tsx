import FAQ from "@/components/templates/home-page/faq";
import Footer from "@/components/templates/home-page/footer";
import Hero from "@/components/templates/home-page/hero";
import WhyPassSafe from "@/components/templates/home-page/why-passSafe";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mt-[107px] md:mt-[150px] lg:mt-[197px]">
      <Suspense fallback={<>Loading...</>}>
        <Hero />
        <WhyPassSafe />
        <FAQ />
        <Footer />
      </Suspense>
    </main>
  );
}
