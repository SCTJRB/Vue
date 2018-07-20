import Axios from 'axios';
Axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/14408/MockJD/api';
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        Axios.post(url, params,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        Axios.get(url, {params: param})
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
