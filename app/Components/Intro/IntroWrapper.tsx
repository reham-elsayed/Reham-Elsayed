'use client'
import React, { useEffect } from 'react'
import { useLenis } from '../LenisSetup/LenisSetup'
import FolderCoverComponent from '../FolderCoverComponent/FolderCoverComponent'
import { motion, useAnimate } from 'framer-motion'
import IntroHeader from './IntroHeader'
const IntroWrapper = () => {

    const { stop, start } = useLenis()
    const [scope, animate] = useAnimate()
    const [scope1, animate1] = useAnimate()
    useEffect(() => {
        async function handleOnLoadAnimation() {
            stop()
            await animate(scope.current, { translateY: 1500, opacity: .5 }, { duration: 5 })
            await animate1(scope1.current, { translateY: -1500, rotate: "-5deg", opacity: .5 }, { duration: 5 })

        }
        handleOnLoadAnimation()
    }, [animate])

    // useEffect(() => {
    //     stop()
    //     const timer = setTimeout(() => start(), 50000)
    //     return () => clearTimeout(timer)
    // }, [stop, start])

    return (<div className='relative overflow-hidden h-screen w-full'>
        <motion.div
            ref={scope1}
            className='z-10 absolute inset-0 bg-black'
        >

        </motion.div>
        <motion.div
            ref={scope}
            className='z-40 absolute inset-0'
        >
            <FolderCoverComponent />
        </motion.div>

        <div className='absolute inset-0 -z-40'>
            <IntroHeader />
        </div>
    </div>)




}

export default IntroWrapper