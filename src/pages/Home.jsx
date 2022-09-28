import React from 'react'
import { useOutletContext } from 'react-router-dom';

// Import components
import Blurb from "../components/Blurb"
import Button from "../components/Button"
import Image from "../components/Image"


const Home = () => {
    const { screenWidth } = useOutletContext()

    const image = <Image  
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220928T025731Z&X-Amz-Expires=86400&X-Amz-Signature=4f592f01944dfb3032a0b56928decbe570665e5a0c520c01de5d1628d54531b6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" 
        styles={ styles.image }
        view={ screenWidth }
        />
  return (
    <div className={ styles.page }>
        { screenWidth > 960 && ( image )}
        <div className={ styles.container }>
            <Blurb />
            { screenWidth < 961 && ( image )}
            <Button />
        </div>
    </div>
  )
}

// Component styles
const styles = {
    page: "md:flex md:items-center h-full min-w-[375px]",
    container: "flex flex-col items-center md:items-end md:pr-[8%] md:pt-[60] px-[46] w-full",
    image: "max-w-[440px]"
};

export default Home