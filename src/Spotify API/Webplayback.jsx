import React, { useState, useEffect } from "react";
import { useDataLayerValue, useSpotifyValue } from "../Context/DataLayer";

function WebPlayback(props) {
  const [player, setPlayer] = useState(undefined);
  const [{}, dispatch] = useDataLayerValue();

  const { spotify } = useSpotifyValue();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(props.token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);

        spotify.getMyDevices().then(
          function (response) {
            // console.log(response.devices.length);
            let element = [response.devices.length].fill("");
            let element_name = [response.devices.length].fill("");

            let count = true;

            for (let index = 0; index < response.devices.length; index++) {
              // console.log(response.devices[index].id);
              if (
                count === true &&
                response.devices[index].name === "Web Playback SDK"
              ) {
                count = false;
                element.push(response.devices[index].id);
                element_name.push(response.devices[index].name);
                dispatch({
                  type: "SET_DEVICE_ID",
                  device_id: response.devices[index].id,
                });
                continue;
              } else if (response.devices[index].name !== "Web Playback SDK") {
                element.push(response.devices[index].id);
                element_name.push(response.devices[index].name);
              }
              // element.push(response.devices[index].id);
            }
            dispatch({
              type: "GET_ALL_DEVICE_IDS",
              all_device_ids: element,
            });
            dispatch({
              type: "GET_ALL_DEVICE_NAMES",
              all_device_names: element_name,
            });
            // console.log("element ", element);
            // console.log("element ", element_name);
            // console.log("all_device_ids ", all_device_ids);
            // console.log("all_device_names ", all_device_names);
          },
          function (err) {
            console.error(err);
          }
        );

        // spotify.transferMyPlayback()
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
      player.addListener("ready", ({ device_id }) => {
        console.log("Connected with Device ID", device_id);
      });

      player.connect();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-wrapper"></div>
      </div>
    </>
  );
}

export default WebPlayback;
