import React from 'react'
import './CSS/Sidebar_Option.css'

const Sidebar_Option = ({ title, Icon }) => {
    const handleClick = () => {
        console.log("clicked!!!"); 
        
    }
    return (
        <div className='Sidebar_Option'>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h6 onClick={handleClick}> {title}</h6> : <p onClick={handleClick}> {title}</p>}
        </div>
    )
}

export default Sidebar_Option