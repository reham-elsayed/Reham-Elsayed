'use client'
import React from 'react'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
import { useAnimate } from 'framer-motion'
import ProjectSliderSlider from './ProjectSliderSlider'
import Link from 'next/link'

const ProjectSliderWrapper = () => {

    const [isDark, setIsDark] = React.useState(false)
    //  const scope = React.useRef(null)

    const [scope, animate] = useAnimate()
    const handleClick = () => {
        const nextIsDark = !isDark
        setIsDark(nextIsDark)

        animate(
            scope.current,
            {
                backgroundColor: nextIsDark ? "#2c3236" : "#e5e2d6",
            },
            { duration: 0.8 }
        )
    }

    return (
        <div ref={scope} onClick={handleClick} className="min-h-screen ">
            <TextChangeColorSize
                colorStart={isDark ? "rgb(79, 82, 190)" : "#292f33"}
                colorEnd={isDark ? "rgb(79, 82, 190)" : "#292f33"}
            />

            <ProjectSliderSlider />
            <div>
                <div className='flex justify-between items-center h-[10vw] bg-cyan-200'>
                    <h2>ALL PROJECTS</h2>
                    <div>
                        <Link href="#" className='btn-arrow w-inline-block perspective-distant hover: '>
                            <div className='txt-btn__arrow-1 hover:scale-75 hover:translate-full hover:rotate-y-90 duration-500 transform-3d '>
                                DISCOVER
                            </div>
                            <div className='txt-btn__arrow-2'>
                                DISCOVER
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectSliderWrapper