import React from "react";
import BaixarSection from "./BaixarSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import PlanosSection from "./PlanosSection";
import * as S from "./styles";
import VantagensSection from "./VantagensSection";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <VantagensSection />
      <BaixarSection />
      <PlanosSection />
      <FAQSection />
    </main>
  );
};

export default Main;
