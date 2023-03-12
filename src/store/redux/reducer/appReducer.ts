import ACTION_TYPE from "../action/type";

const initState = {
    appLoading: false,
    liveMarket: [],
}

const AppReducer = (state = initState, action: any)=>{
    switch (action.type) {
        case ACTION_TYPE.APP_LOADER:
            return {...state, appLoading: action.payload}
            break;

        case ACTION_TYPE.APP_LIVE_MARKET:
            return {...state, liveMarket: action.payload}
            break;

        default:
            return state;
            break;
    }
}

export default AppReducer;