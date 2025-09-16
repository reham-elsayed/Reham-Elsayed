"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import TextHeroAnimated from "../TextHeroAnimated/TestHeroAnimated"

const AnimatedClipContainer = () => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const maxHeight = typeof window !== "undefined" ? window.innerHeight * 0.5 : 400
    const height = useTransform(scrollYProgress, [0, .2], ["1%", "100%"])
    const width = useTransform(scrollYProgress, [0, .2], ["85%", "100%"])


    const y = useTransform(scrollYProgress, [.2, .5], [0, 150]);//translate down
    const invertedY = useTransform(y, (v) => -v);
    const weight = useTransform(scrollYProgress, [0, 2, .5], [300, 700, 300]); // font weight
    const widthT = useTransform(scrollYProgress, [0, .2, .5], [160, 100, 85]); // font width
    const fontSize = useTransform(scrollYProgress, [0, .2], ["2.5rem", "1.8rem"]); // font size

    return (
        <div className="bg-gray-100  ">
            <div className="relative  h-[270vh] container mx-auto">
                <div className="   sticky left-0 right-0 top-0 w-full h-[100vh] overflow-hidden flex items-stretch justify-center">
                    <div className="overflow-hidden relative flex flex-col flex-1 items-center self-stretch justify-center " >
                        <div

                            className={` bg-red-100  w-full wrapper-h1 `}>
                            {/* Big scroll space so you can see effect */}
                            <motion.div

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
                                reham elsayed
                            </motion.div>
                        </div>

                        <div

                            className={` bg-red-100  w-full wrapper-h1 `}>
                            {/* Big scroll space so you can see effect */}
                            <motion.div

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
                                reham elsayed
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
                                    y,
                                    fontVariationSettings: `"wght" ${weight}, "wdth" ${widthT}`,
                                    fontFamily: "Geist Variable, sans-serif", // must be a variable font
                                    fontSize: fontSize,
                                    transformStyle: "preserve-3d",
                                }}
                                transition={{ duration: 50 }}
                                className="text-center hero-txt"
                            >
                                reham elsayed
                            </motion.div>
                        </div>
                        <div

                            className={` bg-red-100  w-full wrapper-h1 `}>
                            {/* Big scroll space so you can see effect */}
                            <motion.div

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
                                reham elsayed
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedClipContainer
