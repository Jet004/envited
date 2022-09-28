import React from 'react'

const Blurb = () => {
  return (
    <div className={ styles.container }>
        <h1 className={ styles.heading }>Imagine if <div className={ styles.highlight }>Snapchat</div> had events.</h1>
        <div className={ styles.text }>Easily host and share events with your friends across any social media.</div>
    </div>
  )
}

export default Blurb

// Component Styles
const styles = {
    container: "flex flex-col items-center md:items-end md:max-w-50%",
    heading: "heading-text text-center md:text-right mt-[94] md:mt-0",
    highlight: "heading-highlight",
    text: "heading-subtext max-w-full text-center md:text-right sm:max-w-[70%]"
}