'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

const TextChangeColorSize = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    // Map scroll progress → animation values
    // const scale = useTransform(scrollYProgress, [0, 1], [1.5, .8]);//scale down
    // const width = useTransform(scrollYProgress, [0, 1, 1.5], [160, 100, 85]); // font width
    // const opacity = useTransform(scrollYProgress, [0, 1], [1, .8]); // fade out
    // const color = useTransform(scrollYProgress, [0, 1], ["blue", "grey"])

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])
    const y = useTransform(scrollYProgress, [0, 1], [100, 50]) // translate up
    const weight = useTransform(scrollYProgress, [0, 1], [900, 200]) // font wght
    const width = useTransform(scrollYProgress, [0, 1], [176, 50])   // font wdth
    const scale = useTransform(scrollYProgress, [0, 1], [0, .8])    // optional bump
    const color = useTransform(scrollYProgress, [0, 1], ["rgb(79, 82, 190)", "rgb(41, 47, 51)"])    // color change
    const textSize = useTransform(scrollYProgress, [0, 1], ["5vw", "15vw"]); // <-- Use this instead


    // const textSize = useTransform(scrollYProgress, [0, 1], ["1.5rem", "20vw"]); // font size
    return (
        <div className=''>
            <motion.div
                ref={ref}
                className='pt-40 h-[100vh] text-center items-center overflow-hidden'
            >
                <motion.h1

                    style={{
                        opacity,
                        scale,
                        color,
                        fontSize: textSize,
                        transformStyle: "preserve-3d",
                        fontVariationSettings: `"wght" ${weight.get()},"wdth" ${width.get()}`,
                    }}
                    className=' font-GeistVariable font-bold flex-1  will-change-scroll '
                >EXPERTIRES</motion.h1>
            </motion.div>
        </div>
    )
}

export default TextChangeColorSize