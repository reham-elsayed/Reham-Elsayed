import React from 'react'
import Counter from './Counter'
import Logo from '../Icons/Logo'

const IntroHeader = () => {

    return (
        <div className='relative flex justify-center items-center w-full h-dvh bg-[var(--white-smoke)] '>
            <div className='h-full w-[90vw] mx-auto absolute inset-0 flex justify-center items-center'>
                <div className='h-[15vw] w-[90vw] rounded-md justify-end p-6 flex items-center bg-[var(--black)]'>
                    <div className=' w-[80vw] h-full rounded-md flex justify-end items-center bg-[var(--white-smoke)] p-11 '>
                        <div className='text-[3.5vw]'><Logo /></div>
                        <div className='flex flex-col gap-2 w-full h-full relative ps-6 pb-2.5 justify-end flex-stretch'>
                            <div className='border-b-[1px] pt-2 pb-[.2rem] border-b-black  w-full '>
                                <div> RehamShipl.com</div>
                            </div>
                            <div className='header border-b-[1px] pt-2 pb-[.2rem] border-b-black  w-full '>
                                <div>loading...</div>
                            </div>
                            <Counter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroHeader