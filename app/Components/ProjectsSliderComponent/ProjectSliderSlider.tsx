'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import DiscoverButton from '../DiscoverButton/DiscoverButton'

const ProjectSliderSlider = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,

    })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"])
    return (
        <div

            className='h-screen overflow-hidden w-full flex flex-col justify-center items-stretch'>
            <div className='w-full w-layout-blockcontainer h-[45vh] flex '>
                <div
                    ref={ref}
                    className='relative h-full'>
                    <motion.div
                        style={{ x }}
                        className=' relative flex justify-center h-full items-stretch mb-4  bg-amber-700'>
                        {Array(100).fill(null).map((_, i) => <div key={i} className='cl-list-vhs-small  hover:scale-x-105'>
                            <div className='flex items-center justify-center '>
                                logo

                            </div>
                            <div className=' flex-1 flex flex-col items-center justify-center flex-nowrap  p-5 writing'> project name</div>
                            <div className='flex items-center justify-center'> react</div>
                            <div className='absolute -z-10 inset-0 bg-gray-100 border-2 border-black rounded-lg '></div>
                        </div>)}

                    </motion.div>
                </div>

            </div>
            <DiscoverButton />
        </div>
    )
}

export default ProjectSliderSlider