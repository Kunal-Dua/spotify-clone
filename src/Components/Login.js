import React from 'react'
import "./CSS/Login.css"
import {loginUrl} from '../Spotify API/spotify_login_url';
import spotify_logo from '../img/Spotify_Logo_RGB_Green-768x231.png'

const Login = () => {
    return (
        <div className="login">
            <img src={spotify_logo} alt="" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login