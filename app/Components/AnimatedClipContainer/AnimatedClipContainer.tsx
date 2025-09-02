"use client"

import { motion, useAnimate, useScroll, useTransform } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Lenis from "lenis"

const AnimatedClipContainer = () => {
    const [scope, animate] = useAnimate()
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const { scrollYProgress } = useScroll()
    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 100])
    // ✅ Lenis stored in a ref
    const lenisRef = React.useRef<Lenis | null>(null)

    useEffect(() => {
        const lenisInstance = new Lenis({ duration: 1.2 })
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

    async function handleAnimate() {
        if (lenisRef.current) {
            // ✅ now you can modify lenis safely
            lenisRef.current.options.duration = 5
        }

        await animate(scope.current, { scale: 2 }, { duration: 1 })
    }

    useEffect(() => {
        if (inView) {
            handleAnimate()
        }
    }, [inView])

    return (
        <div className="h-[200vh]">
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div ref={ref} className="h-56" >
                    <motion.div
                        initial={{ y: "0" }}
                        style={{ y: -scrollY }}
                        transition={{ duration: 5 }}
                        className="w-56 h-56 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold"
                    >
                        Animated Box
                    </motion.div>
                    <motion.div
                        initial={{ y: "0" }}
                        style={{ y: scrollY }}
                        transition={{ duration: 5 }}
                        className="w-56 h-56 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold"
                    >
                        Animated Box
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedClipContainer
