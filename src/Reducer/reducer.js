export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // FIXME: Change token to null after development
    token: null
    // token:"BQAT2hnnmJ1VL1zB3iRic8WCIVfTppRA6aZfT5cc6sK0-H0FMr5qy25s2FkESgyem4u0Ixviy3GaN3_NfUrVPG2lb1iMs8geTriOZr3VJhNgyGB-AhimzfnSFM8ALyni0F0mUYkfS2_sLJvNGoF6eCoQKeU6RCq7rvreckVzxL7hlBvy1qh_agSux2d1bXBMX3BxZ4gwqtvp6tOnF_F0PVbmJvNJTb_lsvv_HJRMxNrNjiL4zkH1rdkFR73jfDHVYe-dYcsvk-KAfUKAC6gKwtDN-ac"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        default:
            return state;
    }
}

export default reducer;