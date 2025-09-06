import React from 'react'
import ExpertiseCardContent from '../ExpertiseCardContent/ExpertiseCardContent'
import cam from '../../../public/cam.svg'
const ParallexCardWrapper = () => {
    return (
        <div className=''>
            {/*right side*/}
            <div className=' relative  '>
                <div className="relative top-0 w-full h-[300vh]"> {/* makes the page scrollable */}
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                        <div className="w-80 h-96 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
                            Camera 1
                        </div>
                        <div className='absolute -z-10 h-screen  top-0 flex justify-center  items-center' >
                            <div className=' p-[2vw]  w-[80vw] h-[40vw] border-3 border-[#e5e2d633] rounded-[20px]' >
                                {/*left side*/}
                                <div className='w-[26vw] h-[26vw]  bg-amber-500'></div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                        <div className="w-80 h-96 bg-amber-700 rounded-2xl flex items-center justify-center text-2xl font-bold">
                            Camera 2
                        </div>
                    </div>
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                        <div className="w-80 h-96 bg-amber-900 rounded-2xl flex items-center justify-center text-2xl font-bold">
                            Camera 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParallexCardWrapper

{/*container*/ }
// <div className='flex justify-center  relative p-[2vw] overflow-hidden' >
//     {/*left side*/}
//     <div className='w-[26vw] h-[26vw]  bg-amber-50'>

//     </div>
//     {/*right side*/}
//     <div className='flex flex-col items-start  flex-1  bg-amber-100  overflow-hidden'>





//     </div>
//   <div className='wrapper-all-mea__expertise'>
//                 <div className='layout-etiquette-expertise-first'>
//                     <div className='layout-etiquette-expertise'>
//                         <div className='txt-expertise'>word</div>
//                     </div>
//                     <div className='wrapper-content__etiquette'>
//                         <div className='txt-expertise'> another word</div>

//                     </div>
//                     <div className='wrapper-content__etiquette'>
//                         <div className='txt-expertise'> another word</div>

//                     </div>
//                     <div className='wrapper-content__etiquette'>
//                         <div className='txt-expertise'> another word</div>

//                     </div>
//                     <div className='wrapper-content__etiquette'>
//                         <div className='txt-expertise'> another word</div>

//                     </div>

//                 </div>
//                 <div className='wrapper-btn-etiquette'>  <a href="#" className='btn-arrow w-inline-block'>
//                     <div className='txt-btn__arrow-1 '>button /</div>
//                     <div className='txt-btn__arrow-2 '>button2</div>
//                 </a></div>
//                 <div className='card-film'>
//                     <div className="card-film-header">
//                         <div className="bottom-top-bettacam">
//                         </div>
//                         <img src={cam} /> </div>
//                 </div>
//                 <div className='wrapper-mea-prod '></div>

//             </div>