import React from 'react'

const IntroHeader = () => {
    return (
        <div className='relative flex justify-center items-center w-full h-dvh bg-yellow-600'>
            <div className='h-full w-[90vw] mx-auto absolute inset-0 flex justify-center items-center'>
                <div className='h-[15vw] w-[90vw] rounded-md justify-end p-6 flex items-center bg-gray-200'>
                    <div className=' w-[80vw] h-full rounded-md flex justify-end items-center bg-green-600 p-11 '>
                        <div className='text-[3.5vw]'>image</div>
                        <div className='flex flex-col gap-2 w-full h-full relative '>
                            <div className='border-b-2 p-2 border-b-black  w-full '>
                                RehamShipl.com
                            </div>
                            <div className='border-b-2 p-2 border-b-black  w-full '>
                                loading...
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHeader