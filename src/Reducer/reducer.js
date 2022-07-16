export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //FIXME: Change token to null after development
    token: null
    // token: 'BQC54u7JIWn8wTfm_KJfX5ttO-qosw8QqACDZbqmjrTv2kQ43lu6yQuT2CqstsT7i5QQ5LLERBztaCCxKnw5VbOSvPRESHRlKF7M7JmGFvotk9_tLHwYo1PAoa8osSIPVJiSzf4BQIXLn4REud4ELu1Zx42wyFIutW-S2kXkWL9MQDGw_lEA6-EzbqS9fDcGUdm_5XlEpOcVNPI'
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