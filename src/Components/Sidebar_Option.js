import React from 'react'
import './CSS/Sidebar_Option.css'

const Sidebar_Option = ({ title, Icon }) => {
    return (
        <div className='Sidebar_Option'>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h6> {title}</h6> : <p> {title}</p>}
        </div>
    )
}

export default Sidebar_Option