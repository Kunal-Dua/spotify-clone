import React, { useEffect, useState } from "react";
import "./CSS/Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useDataLayerValue, useSpotifyValue } from "../Context/DataLayer";

const Footer = () => {
  const [{ item, playing, volume, duration, progress }, dispatch] =
    useDataLayerValue();
  const { spotify } = useSpotifyValue();

  const [_item, setItem] = useState(null);
  const [_playing, setPlaying] = useState(null);

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      // console.log(r);
      setItem(r.item);
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [item]);

  const handlePlayPause = () => {
    console.log("Play/Pause");
    if (playing) {
      spotify.pause().then(
        function (data) {
          setPlaying(false);
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        },
        function (err) {
          alert("Spotify Prenimum is needed to pause songs");
          console.error(err);
        }
      );
    } else {
      spotify.play().then(
        function (data) {
          setPlaying(true);
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        },
        function (err) {
          alert("Spotify Prenimum is needed to play songs");
          console.error(err);
        }
      );
    }
  };

  const skipNext = () => {
    console.log("Skipped");
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    console.log("Previous");
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const volumeChange = () => {
    spotify.setVolume(0).then(
      function (data) {
        // console.log(data);
        dispatch({
          type: "SET_VOLUME",
          volume: 0,
        });
      },
      function (err) {
        alert("Spotify Premium required to mute song");
        console.log(err);
      }
    );
  };
  const volumeMute = () => {
    spotify.setVolume(70).then(
      function (data) {
        // console.log(data);
        dispatch({
          type: "SET_VOLUME",
          volume: 70,
        });
      },
      function (err) {
        alert("Spotify Premium required to change volume");
        console.log(err);
      }
    );
  };
  const handleChange = (event, newValue) => {
    spotify.setVolume(newValue).then(
      function (data) {
        // console.log(data);
        dispatch({
          type: "SET_VOLUME",
          volume: newValue,
        });
      },
      function (err) {
        alert("Spotify Premium required to change volume");
        console.log(err);
      }
    );
  };

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_left_artist_cover"
          src={item?.album.images[0].url}
          alt="artist cover"
        />
        {item ? (
          <div className="footer_left_song_info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_left_song_info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
        <div className="footer_left_curr_song_favorite">
          <FavoriteIcon />
        </div>
      </div>

      <div className="footer_center">
        <div className="playback_icons">
          <ShuffleIcon className="footer_green" fontSize="medium" />
          <SkipPreviousIcon
            className="footer_icon"
            onClick={skipPrevious}
            fontSize="medium"
          />

          {!playing ? (
            <PlayCircleFilledIcon
              fontSize="large"
              className="footer_icon filled_icon"
              onClick={handlePlayPause}
            />
          ) : (
            <PauseCircleFilledIcon
              fontSize="large"
              className="footer_icon filled_icon"
              onClick={handlePlayPause}
            />
          )}

          <SkipNextIcon
            className="footer_icon"
            fontSize="medium"
            onClick={skipNext}
          />
          <RepeatIcon className="footer_green" fontSize="medium" />
        </div>
        <div className="playback_slider">
          <Slider
            aria-label="Playback"
            size="small"
            defaultValue={0}
            min={0}
            max={duration}
            value={progress}
          />
        </div>
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer_right_icon" />
          </Grid>
          <Grid item>
            {volume === 0 ? (
              <VolumeOffIcon
                className="footer_right_icon"
                onClick={volumeMute}
              />
            ) : (
              <VolumeDownIcon
                className="footer_right_icon"
                onClick={volumeChange}
              />
            )}
          </Grid>
          <Grid item xs>
            <Slider
              className="footer_slider footer_volume_slider"
              defaultValue={70}
              aria-label="Volume"
              value={volume}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
