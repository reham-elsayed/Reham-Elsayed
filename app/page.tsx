
import { motion } from "framer-motion";
import AnimatedClipContainer from "./Components/AnimatedClipContainer/AnimatedClipContainer";
import TextChangeColorSize from "./Components/TextChaingeColorSize/TextChangeColorSize";
export default function Home() {
  return (
    <main className="flex min-h-[100vh] max-w-lvw m-auto flex-col items-center justify-between p-24 gap-7 ">


      <AnimatedClipContainer />
      <TextChangeColorSize />
    </main>
  );
}
