"use client"

import { motion, scale, useAnimate, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import lenis from "lenis"
const AnimatedClipContainer = () => {
    const [scope, animate] = useAnimate()
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true


    })

    useEffect(() => {
        const lenisInstance = new lenis({
            duration: 1.2,
        })
        console.log(lenisInstance)
        function raf(time: number) {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenisInstance.destroy()
        }
    }, [])
    async function handleAnimate() {
        if (lenisInstance?.options) {
            lenisInstance.options.duration = 20
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
            <div

                className="h-screen flex items-center justify-center bg-gray-100"
            >

                <div ref={ref} className="h-56">

                    <motion.div
                        animate={{ y: inView ? "-100%" : " 0" }}
                        transition={{ duration: 5 }}
                        className="w-56 h-56 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold"
                    >
                        Animated Box
                    </motion.div>
                    <motion.div
                        animate={{ y: inView ? "100%" : " 0" }}
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
