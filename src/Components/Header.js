import React from 'react'
import { useDataLayerValue } from '../Context/DataLayer';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './CSS/Header.css'
const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className='header'>
            <div className="header_left">
                <ArrowBackIosIcon className="header_left_btn" />
                <ArrowForwardIosIcon className="header_left_btn" />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url } alt="Remy Sharp" />
                <h5>{user.display_name}</h5>
            </div>
        </div>
    )
}

export default Header