'use client'
import React from 'react'
import ExpertiseCardContent from '../ExpertiseCardContent/ExpertiseCardContent'
import cam from '../../../public/cam.svg'
import { useScroll, useTransform, motion } from 'framer-motion'
const ParallexCardWrapper = () => {
    const { scrollYProgress } = useScroll()
    const rotate = useTransform(scrollYProgress, [0, 1], ['7deg', '0deg'])
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
    const rotateop = useTransform(scrollYProgress, [0, 1], ['-7deg', '0deg'])
    return (


        <div className='flex flex-col items-end pe-[15vw] pt-[9vh] relative justify-end   '>
            <div className="relative top-[25vh] h-[300vh] flex flex-col items-start"> {/* makes the page scrollable */}
                <div className="sticky top-[25vh] h-screen flex flex-col ">
                    <div className="sticky top[25vh] w-[38vw] h-96 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
                        Camera 1
                    </div>
                    <div className='absolute -z-10  w-[75vw] h-[36vw] pos  flex justify-start  items-center bg-black rounded-[20px] border-[#e5e2d633] border-3' >
                        <div className=' p-[2vw]  bg-red-500   ' >
                            {/*left side*/}
                            <div className='w-[32vw] h-[32vw]  bg-amber-500'></div>
                        </div>
                    </div>
                </div>
                <div
                    className="sticky top-[25vh] h-screen flex flex-col perspective-distant">
                    <motion.div
                        style={{ rotate, scale, transformStyle: "preserve-3d" }}
                        className="sticky top[25vh] w-[38vw] h-96 bg-amber-700 rounded-2xl flex items-center justify-center text-2xl font-bold">
                        Camera 2
                    </motion.div>
                </div>
                <div className="sticky top-[25vh] h-screen flex flex-col perspective-distant">
                    <motion.div
                        style={{ rotate: rotateop, scale, transformStyle: "preserve-3d" }}
                        className="sticky top[25vh] w-[38vw] h-96 bg-amber-700 rounded-2xl flex items-center justify-center text-2xl font-bold">
                        Camera 2
                    </motion.div>
                </div>
            </div>
        </div>

    );
}

export default ParallexCardWrapper