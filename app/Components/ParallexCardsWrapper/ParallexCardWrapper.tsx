'use client'
import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import ParallexCards from './ParallexCards'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
const ParallexCardWrapper = () => {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const background = useTransform(scrollYProgress, [0.5, 0.7, 1],
        ["#e5e2d6", "#8a8d87", "#2c3236"])
    return (
        <motion.section
            ref={ref}
            style={{ backgroundColor: background }}
            className='relative '>
            <TextChangeColorSize colorStart="rgb(79, 82, 190)" colorEnd="rgb(41, 47, 51)" />
            <ParallexCards />
        </motion.section>

    );
}

export default ParallexCardWrapper