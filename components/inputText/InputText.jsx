import React from 'react'

const InputText = ({type,labelText,placeholder,onChange}) => {

    return (
        <label>
            <span className="block text-sm font-medium text-gray-700">{labelText}</span>
            <input type={type} placeholder={placeholder} className='mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com' onChange={onChange} />
        </label>
    )
}

export default InputText
