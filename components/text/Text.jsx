import React from 'react'

const Text = ({text,textStyle}) => {
    return (
        <p className={`text-xs sm:text-sm lg:text-base ${textStyle}`}>
            {text}
        </p>
    )
}

export default Text
