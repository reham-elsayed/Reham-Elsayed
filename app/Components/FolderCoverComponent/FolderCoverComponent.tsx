import React from 'react'

const FolderCoverComponent = () => {
    return (
        <div className='relative h-dvh w-full '>
            <div className='absolute inset-0  h-full w-full'>
                <div className='grid grid-cols-6 h-full w-full'>

                    <div className='col-span-1 bg-amber-200 w-full h-full'></div>
                    <div className='col-span-1 bg-amber-400 w-full h-full'></div>
                    <div className='col-span-1 bg-amber-700 w-full h-full'></div>
                    <div className='col-span-3 bg-amber-950 w-full h-full'></div>
                </div>
            </div>
        </div>
    )
}

export default FolderCoverComponent