import * as constants from './actionTypes.js';
import {message} from 'antd';
import {postData} from './../Api/index.js';
//获取登录结果
export const loginDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/login.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            // console.log(res)
            if(res.data==="ok"){
                const tempLoginStatus = true;
                dispatch({
                    type:constants.LOGIN,
                    tempLoginStatus,
                    username,
                    userpwd
                })
            }
        })
        .catch(()=>{
            message.error('登录失败！')
        })
    }
};

export const bannerDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/banner.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            // console.log("bannerdata",res);

            if(res.status===200){
                const bannerData = res.data;
                dispatch({
                    type:constants.BANNER,
                    bannerData
                })
            }
        }).catch(()=>{
            message.error('获取数据失败！')
        })
    }
}


export const teacherDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/coach.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            if(res.status===200){
                const teacherData = res.data;
                dispatch({
                    type:constants.TEACHER,
                    teacherData
                })
            }
        }).catch(()=>{
            message.error('获取数据失败！')
        })
    }
}


export const dishesDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/coacha.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            if(res.status === 200){
                // console.log("dishesres",res);
                const dishesData = res.data;
                dispatch({
                    type:constants.DISHES,
                    dishesData
                });
            }
        }).catch(()=>{
            message.error('获取数据失败！')
        })
    }
}

export const newsDataAction = ([username,userpwd]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/newsa.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            // console.log(res);
            if(res.status === 200){
                // console.log("dishesres",res);
                const newsData = res.data;
                dispatch({
                    type:constants.NEWS,
                    newsData
                })
            }

        }).catch(()=>{
            message.error('获取数据失败！')
        })
    }
}
export const searchNewsDataAction = ([username,userpwd,keywords]) =>{
    return (dispatch) => {
        //请求网络接口
        postData('/student/newsa.php',{
            username:username,
            userpwd:userpwd,
            userclass:48,
            type:2
        }).then( res =>{
            let searchNews = [];
            if(res.status === 200){
                for(let item in res.data){
                    if(res.data[item].title_news.includes(keywords)){
                        searchNews.push(res.data[item]);
                    }
                }
                dispatch({
                    type:constants.SEARCHNEWS,
                    searchNews
                })
            }

        }).catch(()=>{
            message.error('获取数据失败！')
        })
    }
}