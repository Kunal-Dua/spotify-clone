import React from 'react';
import './CSS/Sidebar.css';
import { useDataLayerValue } from '../Context/DataLayer';
import spotify_logo from '../img/Spotify_Logo_RGB_White.png'
import Sidebar_Option from './Sidebar_Option';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';  
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className="sidebar_logo" src={spotify_logo} alt="spotify logo" />

      <Sidebar_Option title="Home" Icon={HomeIcon} />
      <Sidebar_Option title="Search" Icon={SearchIcon} />
      <Sidebar_Option title="Your Libary " Icon={LibraryMusicIcon} />

      <strong className="sidebar_title">Playlists</strong>
      <hr />

      <div className='playlist_options'>

      {playlists?.items?.map(playlist => (
        <Sidebar_Option title={playlist.name}/>
      ))}
      </div>

    </div>
  )
}

export default Sidebar