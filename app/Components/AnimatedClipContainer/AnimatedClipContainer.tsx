"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const AnimatedClipContainer = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.5, // trigger when 50% of section is visible
        triggerOnce: true

    })
    const [locked, setLocked] = useState(false)

    useEffect(() => {
        const runAnimation = async () => {
            if (inView && !locked) {
                setLocked(true)
                document.body.style.overflow = "hidden"

                await controls.start({
                    scale: 1.5,
                    height: 50,
                    transition: { duration: 3, repeat: 0 },
                })

                document.body.style.overflow = "auto"
                setLocked(false)
            }
        }
        runAnimation()
    }, [inView, locked, controls])

    return (
        <div className="h-[200vh]">
            <div

                className="h-screen flex items-center justify-center bg-gray-100"
            >
                <motion.div
                    initial={{ scale: 1, rotate: 0 }}
                    animate={controls}
                    className="w-40 h-5 bg-blue-500 rounded-lg"
                />
            </div>
            <div ref={ref} className="h-56"></div>
        </div>
    )
}

export default AnimatedClipContainer
