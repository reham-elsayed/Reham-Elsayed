'use client'
import React, { useEffect } from 'react'
import { useLenis } from '../LenisSetup/LenisSetup'
import FolderCoverComponent from '../FolderCoverComponent/FolderCoverComponent'
import { motion, useAnimate } from 'framer-motion'
const IntroWrapper = () => {

    const { stop, start } = useLenis()
    const [scope, animate] = useAnimate()
    // useEffect(() => {
    //     async function handleOnLoadAnimation() {
    //         await animate(scope.current, { translateY: 1500, opacity: .5 }, { duration: 5 })
    //     }
    //     handleOnLoadAnimation()
    // }, [animate])

    useEffect(() => {
        stop()
        const timer = setTimeout(() => start(), 50000)
        return () => clearTimeout(timer)
    }, [stop, start])

    return (<div className='relative overflow-hidden'>

        <motion.div
            ref={scope}
            className=''
        >
            <FolderCoverComponent />
        </motion.div>
    </div>)




}

export default IntroWrapper