export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // FIXME: Change token to null after development
    token: null
    // token:"BQB1C6JRyRS_4OmJZ3Pvm16wcgr9SHWv-r3LvgDUAuxcAtwAKBCsQELjxXlhfo9YAYpir9tRLx6GHu0KMVRJhN5grBNHkAiARW3riAJPT30u8zPodSq6O15ADx8T9DBHmHPSeXSALMFZblsYXnNWC4ciGMp1vpqXxH28H_iXAQIhkVLVsAJ0MMOitXgDFOE"
}

const reducer = (state, action) => {
    // console.log(action);
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
        default:
            return state;
    }
}

export default reducer;