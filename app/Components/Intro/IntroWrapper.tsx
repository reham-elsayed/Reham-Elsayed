'use client'
import React, { useEffect } from 'react'
import { useLenis } from '../LenisSetup/LenisSetup'

const IntroWrapper = () => {
    const { stop, start } = useLenis()

    // useEffect(() => {
    //     stop()
    //     const timer = setTimeout(() => start(), 30000)
    //     return () => clearTimeout(timer)
    // }, [stop, start])

    return (<div>
        <button onClick={() => { stop() }}>stop</button>
        <button onClick={() => { start() }}>start</button>
        <h1 className='h-screen'>Scroll is disabled for 3s</h1>
    </div>)




}

export default IntroWrapper