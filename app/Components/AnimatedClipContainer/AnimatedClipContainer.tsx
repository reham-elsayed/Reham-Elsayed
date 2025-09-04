"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import TextHeroAnimated from "../TextHeroAnimated/TestHeroAnimated"

const AnimatedClipContainer = () => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()
    const maxHeight = typeof window !== "undefined" ? window.innerHeight * 0.5 : 400
    const scrollY1 = useTransform(scrollYProgress, [0, 0.2], [10, maxHeight])
    const scaleX = useTransform(scrollYProgress, [.2, .5], [1, 1.01])

    return (
        <div className="relative w-full">
            <div className="h-screen max-w-lvw flex items-center justify-center bg-gray-100  sticky inset-0.5">
                <div ref={ref} className="h-full w-full flex flex-col items-center justify-center " >
                    <TextHeroAnimated text="REHAM ELSAYED" className="z-10" moveDown={true} />
                    <TextHeroAnimated text="FRONTEND DEVELOPER" className="z-20" moveDown={true} />
                    <motion.div
                        style={{ height: scrollY1, scaleX: scaleX }}
                        transition={{ duration: 10 }}
                        id="clip-container"
                        className="w-full flex items-center justify-center bg-amber-400 z-50"
                    >
                        <motion.h2
                            className="text-3xl font-bold mt-4 ">Scroll to Animate</motion.h2>

                    </motion.div>
                    <TextHeroAnimated text="REHAM ELSAYED" moveDown={false} className="z-20" />
                    <TextHeroAnimated text="FRONTEND DEVELOPER" moveDown={false} className="z-10" />
                </div>
            </div>
        </div>
    )
}

export default AnimatedClipContainer
