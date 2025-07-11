import Footer from "@/components/templates/home-page/footer";
import Hero from "@/components/templates/home-page/hero";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen pt-[107px] md:pt-[150px] lg:pt-[197px] flex flex-col">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex-1">
          <Hero />

          {/* <WhyPassSafe /> */}
          {/* <FAQ /> */}
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
