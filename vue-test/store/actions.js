import * as Axios from '../config/axios.js'
import * as types from './mutation-type.js';
export default {
    banner({commit}){
      return Axios.fetchGet('/banner').then((res)=>{
         return res;
      });
    },
    hotProduct({commit}){
        return Axios.fetchGet('/hotProduct').then((res)=>{
            return res;
        })
    },
    likeProduct({commit}){
        return Axios.fetchGet('/likeProduct').then((res)=>{
            return res;
        })
    },
    similarProduct({commit}){
      return Axios.fetchGet('/similarProduct').then((res)=>{
          return res;
      })
    },


    classfiy({commit}){
        return Axios.fetchGet('/classfiy').then((res)=>{
            return res;
        })
    },
    classfiyProduct({commit} , obj){
       return Axios.fetchPost('/classfiyProduct',{classfiyId:obj}).then((res)=>{
           commit(types.CLASSFIY_PRODUCT,{classfiyId:obj,res});
           return res;
        });
    },
    setCurrenClassfiy({commit},obj){
        commit(types.SET_CURREN_CLASSFIY,obj)
    },

    userInfo({commit}){
        return Axios.fetchGet('/userBasicInfo').then((res)=>{
            return res;
        })
    },

    SetSearch({commit},val){
        commit(types.SET_SEARCH,val)
    },
    clearAllSearch({commit}){
        commit(types.CLEAR_ALL)
    }
}