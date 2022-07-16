import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './CSS/Song_nav.css'
const Song_nav = () => {
    return (
        <div className='song_nav'>
            <h6>#</h6>
            <h6>TITLE</h6>
            <h6>ALBUM</h6>
            <h6>DATE ADDED</h6>
            <h6 className='AccessTimeIcon'><AccessTimeIcon /></h6>
        </div>
    )
}

export default Song_nav