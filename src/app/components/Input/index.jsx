import React, { useEffect, useState } from 'react'

const Input = ({ onChange }) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (value) {
                onChange(value)
            }
        }, 300)
        return () => clearTimeout(timerId)
    }, [value])

    return (
        <input className='input' onChange={(e) => setValue(e.target.value)} />
    )
}

export default Input
