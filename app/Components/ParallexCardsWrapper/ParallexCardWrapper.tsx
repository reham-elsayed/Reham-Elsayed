'use client'
import React from 'react'
import ExpertiseCardContent from '../ExpertiseCardContent/ExpertiseCardContent'

import { useScroll, useTransform, motion } from 'framer-motion'
import ParallexCardSideImage from './ParallexCardSideImage'
import ParallexCards from './ParallexCards'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
const ParallexCardWrapper = () => {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const background = useTransform(scrollYProgress, [0, 1], ['#e5e2d6', '#292f33'])
    return (
        <motion.section
            ref={ref}
            style={{ backgroundColor: background }}
            className='relative '>
            <TextChangeColorSize />
            <ParallexCards />
        </motion.section>

    );
}

export default ParallexCardWrapper