'use client'
import React from 'react'
import TextChangeColorSize from '../TextChaingeColorSize/TextChangeColorSize'
import { useAnimate } from 'framer-motion'

const ProjectSliderWrapper = () => {

    const [isDark, setIsDark] = React.useState(false)
    //  const scope = React.useRef(null)

    const [scope, animate] = useAnimate()
    const handleClick = () => {
        setIsDark(prev => !prev)
        if (isDark) {
            animate(scope.current, { backgroundColor: "#292f33" }, { duration: 0.8 });

        }
        animate(scope.current, { backgroundColor: "#e5e2d6" }, { duration: 0.8 });

    };
    return (
        <div
            ref={scope}
            onClick={handleClick}
        >

            <TextChangeColorSize colorStart={isDark ? "rgb(79, 82, 190)" : "rgb(79, 82, 190)"} colorEnd={isDark ? "rgb(79, 82, 190)" : "rgb(41, 47, 51)"} />

            <div className='layout-vhs-home'></div>

        </div>

    )
}

export default ProjectSliderWrapper