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

      <Sidebar_Option key={"Home"} title="Home" Icon={HomeIcon} />
      <Sidebar_Option key={"Search"} title="Search" Icon={SearchIcon} />
      <Sidebar_Option key={"Your Libary"} title="Your Libary" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />
      <div className='playlist_options'>

        {playlists?.items?.map(playlist => (
          <Sidebar_Option key={playlist.id} title={playlist.name} id={playlist.id} />
        ))}
      </div>

    </div>
  )
}

export default Sidebar