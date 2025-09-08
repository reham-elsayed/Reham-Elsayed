import React from 'react'

const ProjectSliderSlider = () => {
    return (
        <div>
            <div className='w-layout-blockcontainer'>
                <div className='layout-vhs-home'>
                    <div className='cl-list-wrapper-small'>

                        {/* responsive div here*/}
                        <div className='cl-list-wrapper-small'>{/* animation here*/}
                            <div className='cl-layout-vhs-small'>
                                {Array(20).fill(null).map((_, i) => <div key={i} className='cl-list-vhs-small'> data</div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSliderSlider