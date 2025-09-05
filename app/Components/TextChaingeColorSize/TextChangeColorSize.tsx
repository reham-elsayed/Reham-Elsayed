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
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]) // translate up
    const weight = useTransform(scrollYProgress, [0, 1], [200, 900]) // font wght
    const width = useTransform(scrollYProgress, [0, 1], [50, 176])   // font wdth
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1])    // optional bump
    const color = useTransform(scrollYProgress, [0, 1], ["rgb(79, 82, 190)", "rgb(41, 47, 51)"])    // color change
    // const textSize = useTransform(scrollYProgress, [0, 1], ["1.5rem", "20vw"]); // font size
    return (
        <div>
            <motion.div
                ref={ref}
                className='pt-40 w-full h-[100vh] flex items-center justify-center'
            >
                <motion.h1

                    style={{
                        opacity,
                        scale,
                        color,

                        transformStyle: "preserve-3d",
                        fontVariationSettings: `"wght" ${weight.get()},"wdth" ${width.get()}`,
                    }}
                    className=' font-GeistVariable font-bold flex-1 flex-nowrap will-change-scroll text-[20vw]'
                >EXPERTIRES</motion.h1>
            </motion.div>
        </div>
    )
}

export default TextChangeColorSize