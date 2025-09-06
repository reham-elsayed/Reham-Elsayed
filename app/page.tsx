
import { motion } from "framer-motion";
import AnimatedClipContainer from "./Components/AnimatedClipContainer/AnimatedClipContainer";
import TextChangeColorSize from "./Components/TextChaingeColorSize/TextChangeColorSize";
import ParallexCardWrapper from "./Components/ParallexCardsWrapper/ParallexCardWrapper";
export default function Home() {
  return (
    <main className="flex flex-col min-h-[100vh] max-w-lvw m-auto  p-24 gap-7 ">


      <AnimatedClipContainer />
      <TextChangeColorSize />
      <ParallexCardWrapper />
    </main>
  );
}
