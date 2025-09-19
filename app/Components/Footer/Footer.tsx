import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="relative h-screen">
            <div className='h-screen w-full fixed inset-0 -z-50 bg-blue-950 text-white'>
                <div className='h-screen flex flex-col gap-5 absolute inset-0  justify-end'>
                    <div className='w-[90vw] mx-auto'>
                        <div className='flex justify-between items-center'>
                            <div className=''> phone</div>
                            <div className=''>
                                <Image
                                    width={250}
                                    height={250}
                                    src='/rounded-name.svg' alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[40vw] text-9xl'>
                        REHAM SHIPL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer