'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

const ProjectSliderSlider = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,

    })
    const x = useTransform(scrollYProgress, [0, 1], ["-110%", "120%"])
    return (
        <div className='min-h-screen'>
            <div
                ref={ref}
                className='w-layout-blockcontainer '>
                <div className='layout-vhs-home'>
                    <div className='cl-list-wrapper-small'>

                        {/* responsive div here*/}
                        <div className='cl-list-wrapper-small '>{/* animation here*/}
                            <motion.div
                                style={{ x }}
                                className='cl-layout-vhs-small  overflow-hidden '>
                                {Array(100).fill(null).map((_, i) => <div key={i} className='cl-list-vhs-small'> data</div>)}

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSliderSlider