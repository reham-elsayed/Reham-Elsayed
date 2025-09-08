
import { motion } from "framer-motion";
import AnimatedClipContainer from "./Components/AnimatedClipContainer/AnimatedClipContainer";
import TextChangeColorSize from "./Components/TextChaingeColorSize/TextChangeColorSize";
import ParallexCardWrapper from "./Components/ParallexCardsWrapper/ParallexCardWrapper";
import ProjectSliderWrapper from "./Components/ProjectsSliderComponent/ProjectSliderWrapper";
export default function Home() {
  return (
    <main className="flex flex-col min-h-[100vh] ">


      <AnimatedClipContainer />
      <ParallexCardWrapper />
      <ProjectSliderWrapper />
    </main>
  );
}
