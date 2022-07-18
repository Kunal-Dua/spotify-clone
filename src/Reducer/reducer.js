export const initialState = {
    user: null,
    id: null,
    playlists: [],
    follows_playlist: false,
    curr_playback_state:null,
    currentPlaylistID: "37i9dQZF1DX14CbVHtvHRB",
    duration:null,
    progress:null,
    playing: false,
    shuffle_state:null,
    item: null,
    volume: 70,
    discover_weekly: null,
    token: null
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
        case 'SET_CUURENT_USER_ID':
            return {
                ...state,
                id: action.id
            }
        case 'SET_CURRENT_PLAYLIST_ID':
            return {
                ...state,
                currentPlaylistID: action.currentPlaylistID
            }
        case 'FOLLOWS_PLAYLIST':
            return {
                ...state,
                follows_playlist: action.follows_playlist
            }
        case 'SET_VOLUME':
            return {
                ...state,
                volume: action.volume
            }
            case 'GET_CURRENT_PLAYBACK_STATE':
            return {
                ...state,
                curr_playback_state: action.curr_playback_state,
                duration:action.duration,
                shuffle_state:action.shuffle_state,
                playing:action.is_playing,
                progress:action.progress
            }
            case 'PLAYBACK_DURATION':
            return {
                ...state,
                duration:action.duration
            }
        default:
            return state;
    }
}

export default reducer;