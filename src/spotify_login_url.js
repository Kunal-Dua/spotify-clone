const endPoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000";
const client_id = 'b49adde5dde446e8ac28f4691742331a';
const scope = [
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played"
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        },{});
}

export const loginUrl = `${endPoint}?response_type=token&client_id=${client_id}&scope=${scope.join("%20")}&redirect_uri=${redirect_uri}&show_dialog=true`;