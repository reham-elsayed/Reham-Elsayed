import React from 'react'

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const timeOut = setTimeout(() => {
            const interval = setInterval(() => {
                setCounter((prev) => (prev < 100 ? prev + 1 : prev));
                return () => clearInterval(interval);

            }, 5000);
            30000
        })
        return () => clearTimeout(timeOut);
    }, [])
    return (
        <div className='absolute right-0 top-0'>
            <div>{counter}  % </div>
        </div>
    )
}

export default Counter