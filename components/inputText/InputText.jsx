import React from 'react'

const InputText = ({type,labelText,placeholder,onChange}) => {

    return (
        <label>
            <span className="text-sm sm:text-base lg:text-xl">{labelText}</span>
            <br />
            <input type={type} placeholder={placeholder} className='border rounded-lg outline-none p-2 w-full' onChange={onChange} />
        </label>
    )
}

export default InputText
