import * as types from './mutation-type.js';
export default {
    [types.CLASSFIY_PRODUCT](state,obj){
        let arr = state.classfiy.classfiyProduct;
        let p = {};
        let a = [];
        state.classfiy.classfiyProduct.push({classfiyId:obj.classfiyId,list:obj.res});
        arr.reduce(function (cur,next) {
            p[next.classfiyId] ? '' : p[next.classfiyId] = true && a.push(next);
        },a);
        state.classfiy.classfiyProduct = a;
        state.classfiy.currenClassfiy = {classfiyId:obj.classfiyId,list:obj.res};
    },
    [types.SET_CURREN_CLASSFIY](state,obj){
        state.classfiy.currenClassfiy = obj
    },
    [types.SET_SEARCH](state,val){
        state.search.searchList.push(val);
        let arr = state.search.searchList;
        let s = arr.filter(function (item,index,array) {
            return array.indexOf(item) === index
        });
        if(s.length>=5){s.shift()}
        state.search.searchList = s;
    },
    [types.CLEAR_ALL](state){
        state.search.searchList = [];
    }
}
