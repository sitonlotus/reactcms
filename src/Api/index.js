import axios from 'axios';
import qs from 'qs';


//BASE_URL是默认的url地址，如果你安装了webpack，可以在webpack配置全局变量
//axios.defaults.baseURL = BASE_URL;

//如果没有安装webpack，就使用下面这种写法
// axios.defaults.baseURL = "https://www.qhdlink-student.top"
var baseURL = "http://www.qhdlink-student.top";


export const getData = (url, data) => {
    return (
        axios({
            method:'GET',
            url:baseURL+`${url}`, 
            data:qs.stringify(data),
            header:{
                'Content-Type':'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin":"*"
            }
        })
    );
}

export const postData = (url, data) => {
    return (
        axios({
            method:'POST',
            url:baseURL+`${url}`, 
            data:qs.stringify(data),
            header:{
                'Content-Type':'application/x-www-form-urlencoded',
                // "Access-Control-Allow-Origin":"*"
            }
        })
    );
}