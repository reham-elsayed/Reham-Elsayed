'use client'
import Lenis from 'lenis'
import React, { Children, useEffect } from 'react'

const LenisSetup = ({ children }: { children: React.ReactNode }) => {
    // ✅ Lenis stored in a ref
    const lenisRef = React.useRef<Lenis | null>(null)

    useEffect(() => {
        const lenisInstance = new Lenis({ duration: 2 })
        lenisRef.current = lenisInstance

        function raf(time: number) {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenisInstance.destroy()
            lenisRef.current = null
        }
    }, [])

    return <> {children}</>

}

export default LenisSetup