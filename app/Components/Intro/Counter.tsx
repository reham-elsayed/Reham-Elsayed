
import React from 'react'
import Percent from '../Icons/Percent';
const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            const interval = setInterval(() => {
                setCounter((prev) => (prev < 100 ? prev + 1 : prev));
                return () => clearInterval(interval);

            }, 300);
            300
        })
        return () => clearTimeout(timeOut);
    }, [])
    return (
        <div className='absolute right-0 -top-3 header '>
            <div className='flex items-center text-[6vw] text-blue-800 font-extrabold '>
                <span>{counter}</span>
                <Percent fill='#193cb8' width='9rem' height='9rem' />
            </div>
        </div>
    )
}

export default Counter