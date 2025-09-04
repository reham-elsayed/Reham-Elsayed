'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react'

const TextChangeColorSize = () => {
    const { scrollYProgress } = useScroll()

    // Map scroll progress → animation values
    // const scale = useTransform(scrollYProgress, [0, 1], [1.5, .8]);//scale down
    // const width = useTransform(scrollYProgress, [0, 1, 1.5], [160, 100, 85]); // font width
    // const opacity = useTransform(scrollYProgress, [0, 1], [1, .8]); // fade out
    // const color = useTransform(scrollYProgress, [0, 1], ["blue", "grey"])

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]) // translate up
    const weight = useTransform(scrollYProgress, [0, 1], [200, 900]) // font wght
    const width = useTransform(scrollYProgress, [0, 1], [167, 50])   // font wdth
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2])    // optional bump
    const color = useTransform(scrollYProgress, [0, 1], ["#000000", "#FF0000"])    // color change
    const textSize = useTransform(scrollYProgress, [0, 1], ["2.5rem", "5rem"]); // font size
    return (
        <motion.div>
            <motion.h1
                style={{
                    opacity,
                    y,
                    scale,
                    color,
                    fontSize: textSize,
                    transformStyle: "preserve-3d",
                    fontVariationSettings: `"wght" ${weight.get()},"wdth" ${width.get()}`,
                }}
                className='h-screen font-GeistVariable font-bold text-center flex items-center justify-center perspective-distant'
            >EXPERTIRES</motion.h1>
        </motion.div>
    )
}

export default TextChangeColorSize