
import AnimatedClipContainer from "./Components/AnimatedClipContainer/AnimatedClipContainer";
import DividerSlider from "./Components/DividerSlider/DividerSlider";
import Footer from "./Components/Footer/Footer";
import ParallexCardWrapper from "./Components/ParallexCardsWrapper/ParallexCardWrapper";
import ProjectSliderWrapper from "./Components/ProjectsSliderComponent/ProjectSliderWrapper";
export default function Home() {
  return (
    <main className=" min-h-[100vh] relative">


      <AnimatedClipContainer />
      <ParallexCardWrapper />
      <ProjectSliderWrapper />
      <DividerSlider />
      <Footer />
    </main>
  );
}
