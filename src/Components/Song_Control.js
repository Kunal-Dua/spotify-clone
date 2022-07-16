import React from 'react'
import './CSS/Song_Control.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Song_Control = () => {
  return (
    <div className='SongControl'>
      <PlayCircleFilledIcon className='PlayCircleFilledIcon'/>
      <FavoriteIcon className='FavoriteIcon'/>
      <MoreHorizIcon className='MoreHorizIcon'/>
    </div>
  )
}

export default Song_Control