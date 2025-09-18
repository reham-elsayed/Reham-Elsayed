"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const DiscoverButton = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center self-stretch'>
                <h2>ALL PROJECTS</h2>
                <div className='flex justify-end items-center flex-1 text-[1.2vw] align-top '>
                    <Link href="#" className='btn-arrow w-inline-block '>
                        <motion.div
                            whileHover="hover"
                            className='perspective-distant'
                        >
                            <motion.div
                                initial={{ y: 0 }}
                                variants={{
                                    hover: {
                                        scale: [1, 0.9, 1],   // pulls back, then returns
                                        y: [0, 0, 50],        // then moves down
                                    }
                                }}
                                transition={{
                                    duration: 1,           // total duration
                                    times: [0, 0.3, 1],    // control sequence inside one animation
                                    ease: "easeInOut"
                                }}
                                className='txt-btn__arrow-1  '>
                                DISCOVER1
                            </motion.div>
                            <motion.div
                                className="txt-btn__arrow-2 bg-red-700"
                                initial={{
                                    rotateX: 90,
                                    transition: { duration: 0.3 }
                                }}
                                variants={{
                                    hover: { rotateX: 0 }
                                }}
                                transition={{ duration: 0.5, delay: .6 }}
                            >
                                DISCOVER2
                            </motion.div>

                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DiscoverButton