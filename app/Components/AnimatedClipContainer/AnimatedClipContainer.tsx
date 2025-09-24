"use client"

import { motion, useAnimate, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import TextHeroAnimated from "../TextHeroAnimated/TestHeroAnimated"
import hero from "../../../public/heroContent.json"
import IntroWrapper from "../Intro/IntroWrapper"
const AnimatedClipContainer = () => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const maxHeight = typeof window !== "undefined" ? window.innerHeight * 0.5 : 400
    const height = useTransform(scrollYProgress, [0, .2], ["1%", "80%"])
    const width = useTransform(scrollYProgress, [0, .2], ["85%", "100%"])


    const y = useTransform(scrollYProgress, [.2, .5], [0, 150]);//translate down
    const invertedY = useTransform(y, (v) => -v);
    const weight = useTransform(scrollYProgress, [0, .2, .5], [900, 700, 300]); // font weight
    const widthT = useTransform(scrollYProgress, [0, .2, .5], [160, 100, 85]); // font width
    const fontSize = useTransform(scrollYProgress, [0, .5], ["3.5vw", "1vw"]); // font size

    return (
        <div className=" relative bg-gray-200 ">


            <div className="bg-gray-200">
                <div className="relative  h-[470vh] container mx-auto">
                    <div className="   sticky left-0 right-0 top-0 w-full h-[100vh] overflow-hidden flex items-stretch justify-center">
                        <div className="overflow-hidden relative flex flex-col flex-1 items-center self-stretch justify-center " >
                            <div

                                className={` bg-red-100  w-full wrapper-h1 `}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div
                                    initial={{ translateY: 50 }}
                                    animate={{ translateY: 0 }}
                                    style={{
                                        fontVariationSettings: `"wght" ${weight}, "wdth" ${widthT}`,
                                        fontFamily: "Geist Variable, sans-serif", // must be a variable font
                                        fontSize: fontSize,
                                        y,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text2}
                                </motion.div>
                            </div>

                            <div

                                className={` bg-red-100  w-full wrapper-h1 `}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div
                                    initial={{ translateY: 50 }}
                                    animate={{ translateY: 0 }}
                                    style={{
                                        y,
                                        fontVariationSettings: `"wght" ${weight}, "wdth" ${widthT}`,
                                        fontFamily: "Geist Variable, sans-serif", // must be a variable font
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text1}
                                </motion.div>
                            </div>
                            <motion.div
                                style={{ height, width }}
                                transition={{ duration: 50 }}
                                id="clip-container"
                                className=" flex items-center justify-center bg-amber-400 z-50 w-[80vw] mx-auto"
                            >
                                <motion.h2
                                    className="text-3xl font-bold mt-4 "></motion.h2>

                            </motion.div>

                            <div

                                className={` bg-red-100  w-full wrapper-h1 `}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div

                                    style={{
                                        y: invertedY,
                                        fontVariationSettings: `"wght" ${weight}, "wdth" ${widthT}`,
                                        fontFamily: "Geist Variable, sans-serif", // must be a variable font
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text4}
                                </motion.div>
                            </div>
                            <div

                                className={` bg-red-100  w-full wrapper-h1 `}>
                                {/* Big scroll space so you can see effect */}
                                <motion.div

                                    style={{
                                        y: invertedY,
                                        fontVariationSettings: `"wght" ${weight}, "wdth" ${widthT}`,
                                        fontFamily: "Geist Variable, sans-serif", // must be a variable font
                                        fontSize: fontSize,
                                        transformStyle: "preserve-3d",
                                    }}
                                    transition={{ duration: 50 }}
                                    className="text-center hero-txt"
                                >
                                    {hero[0].text3}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedClipContainer
