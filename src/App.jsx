import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());
    const [event, setEvent] = useState(null);
    console.log(event)

    // Handle screen resize for conditional logic
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(getScreenWidth());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={ styles.page }>
        <Outlet context={{screenWidth: screenWidth, setEvent: setEvent, event: event}} />
    </div>
  )
}

export default App

// Component styles
const styles = {
    page: "flex h-full min-w-[375px]",
};

// Helper functions
const getScreenWidth = () => window.innerWidth;