import React from 'react'
import "./Login.css"
import {loginUrl} from '../spotify_login_url';
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