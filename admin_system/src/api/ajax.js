
/* 
  封装ajax库
  统一处理请求出错的问题，出错时不会将错误暴露在外，而是提示错误
*/
import axios from "axios";
import { message } from "antd";

export default function ajax(url, data = {}, type = "GET") {
    return new Promise((resolve, reject) => {
        let promise
        if (type === "GET") {
            promise = axios.get(url, {
                params: data
            })
        } else if (type === "POST") {
            promise = axios.post(url, data)
        }
        // 将错误统一处理，而不是返回
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            message.error("请求出错：" + err)
        })
    })
 
}