import ajax from "./ajax";
import jsonp from "jsonp";
import { message } from "antd";

// 登录
export const reqLogin = (username, password) => ajax("/login", { username, password }, "POST")
// 添加用户
export const reqAddUser = user => ajax("/manage/user/add", user, "POST")
// 获取天气
export const reqWeather = (cityCode,param={}) =>{
    new Promise((resolve, reject) => {

        jsonp(`https://restapi.amap.com/v3/weather/weatherInfo?key=3feaf49fac8bca998d37f01b00d4cc1c&city=${cityCode || '110000'}`,param,
        (err,data)=>{
            if(!err){
                resolve(data)
            }else{
                message.error("请求出错：" + err)
            }
        })
    })
}
reqWeather()