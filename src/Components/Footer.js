import React from 'react'
import './CSS/Footer.css'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_left">

      </div>
      <div className="footer_center">
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleFilledWhiteOutlinedIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item >
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer