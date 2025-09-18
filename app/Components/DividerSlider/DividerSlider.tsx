"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const DividerSlider = () => {
    const target = useRef(null)
    const { scrollYProgress } = useScroll({
        target,
        offset: ["start end", "end start"]
    })
    const x = useTransform(scrollYProgress, [0, .5], [0, -500])
    return (
        <div>
            <div
                ref={target}
                className='flex flex-col overflow-hidden h-[100vh]'>
                <div className='relative '>
                    <motion.div
                        style={{ x }}
                        transition={{ duration: 5 }}
                        className='relative flex items-stretch justify-center w-full h-full text-9xl text-nowrap'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque nostrum odio sit, voluptatibus consectetur dicta perspiciatis nam est cumque?

                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default DividerSlider