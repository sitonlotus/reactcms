import * as constants from './actionTypes.js';

//默认的数据

const defaultState={
    loginStatus:false,
    username:"",
    userpwd:"",
    bannerData:[],
    teacherData:[],
    dishesData:[],
    newsData:[]
};
export default (state = defaultState,action) =>{
    switch (action.type) {
        case constants.LOGIN:
            // const newState=JSON.parse(JSON.stringify(state));
            // newState.loginStatus=action.tempLoginStatus;
            // console.log("state",state)
            // console.log("action",action)
            return {
                ...state,
                loginStatus:action.tempLoginStatus,
                username:action.username,
                userpwd:action.userpwd
            };
        case constants.BANNER:
            // console.log(action);
            return {
                ...state,
                bannerData:action.bannerData
            }
        case constants.TEACHER:
            // console.log("teacheraction",action)
            return {
                ...state,
                teacherData:action.teacherData
            }
        case constants.DISHES:
            // console.log("dishes-action",action)
            return {
                ...state,
                dishesData:action.dishesData
            }
        case constants.NEWS:
            // console.log("news-action",action)
            return {
                ...state,
                newsData:action.newsData
            }
        case constants.SEARCHNEWS:
            // console.log("search-news-action",action)
            return {
                ...state,
                newsData:action.searchNews
            }
        default:
            break;
    }
    return state;
}