import React from 'react'
import { useOutletContext } from 'react-router-dom'

// Import Componente
import Image from "../components/Image"
import { BsCalendar4Week } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"

const Event = () => {
    const { event } = useOutletContext()
  return (
    <div className={ styles.page }>
        <Image 
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220928T025738Z&X-Amz-Expires=86400&X-Amz-Signature=654a94d480fe182174d1cd42919784c4c7945c0bc40ae06c92d5d5661345a115&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" 
            rounded={false}
        />
        <h1 className={ styles.heading }>{ event?.event }</h1>
        <div className={ styles.text }>Hosted By: { event?.host }</div>
        <div className={ styles.eventData }>
            <div className={ styles.eventDetail }>
                <BsCalendar4Week />
                <div>
                    <div>{ `${event?.start} - ${event?.end}` }</div>
                </div>
                <div>
                    <div>{ event?.location }</div>
                </div>
            </div>
            <div className={ styles.eventDetail }>
                <HiOutlineLocationMarker />
            </div>
        </div>

    </div>
  )
}

export default Event

const styles = {
    page: "md:flex md:items-center h-full min-w-[375px]",
    container: "flex flex-col items-center md:items-end md:pr-[8%] md:pt-[60] px-[46] w-full",
    image: "w-full sm:w-[80%]",
    heading: "heading-text text-left md:text-right mt-[94] md:mt-0 pl-2 sm:pl-0",
    text: "heading-subtext max-w-full text-left md:text-right sm:max-w-[70%] pl-2 sm:pl-0",
    eventData: "p-2 mt-6",
    eventDetail: "p-4"
}