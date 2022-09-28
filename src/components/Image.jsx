import React from 'react'

const Image = ({ view, src, rounded, styles }) => {
    view =  view > 960 ? view : null
    rounded = rounded === false ? "" : "rounded-2xl sm:rounded-[33px]"
    return (
        <img className={ `${styles} ${view ? "ml-[170px]" : "mt-[36]" } ${rounded}` } src={ src } alt="event image" />
    )
}

export default Image
