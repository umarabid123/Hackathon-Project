import React from 'react'

const Heading = ({level,heading}) => {
const Tag = `h${level}`
    return (
        <Tag className ="font-bold text-3xl sm:text-3xl lg:text-4xl">
            {heading}
        </Tag>
    )
}

export default Heading
