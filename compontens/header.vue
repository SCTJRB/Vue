<template>
    <div id="AppHeader">
        <span class="goBack" v-if="isShow" @click="goBack"> < </span>
        <input ref="inputSearch" @focus="handleinput" @blur="blurInput" type="text" placeholder="请输入您要搜索的商品"/>
        <button @click="search">搜索</button>

        <div class="searchList" v-if="isShowSearchList">
            <ul>
                <li v-for="list in Search.searchList" @click="selectLi(list)">
                    {{list}}
                </li>
                <li @click="clearAll">清空搜索记录...</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
          return{
              isShowSearchList:false
          }
        },
        computed:{
            isShow(){
                return this.$route.name == 'classify' ? true : false;
            },
            Search(){
                return this.$store.state.search;
            }
        },
        methods:{
            goBack:function () {
                this.$router.go(-1)
            },
            handleinput:function(){
                if(this.Search.searchList.length > 0){
                    this.isShowSearchList = true;
                }
            },
            blurInput:function(){
                // this.isShowSearchList = false;
            },
            search:function () {
                if(this.$refs.inputSearch.value){
                    this.$store.dispatch('SetSearch',this.$refs.inputSearch.value);
                }else {
                    this.isShowSearchList = false;
                }

            },
            clearAll:function () {
                this.$refs.inputSearch.value = null;
                this.$store.dispatch('clearAllSearch');
            },
            selectLi:function (val) {
                this.$refs.inputSearch.value = val;
                this.isShowSearchList = false;
            }
        }
    }
</script>
<style scoped>
    #AppHeader{
        position: fixed;
        width: 100%;
        height: 3.5rem;
        border-bottom:1px solid #ccc ;
        display: flex;
        align-items: center;
        justify-content:flex-end;
        /*padding: 0 1rem;*/
        z-index: 999;
    }
    #AppHeader .goBack{
        position: absolute;
        left: 1rem;
        font-size: 2rem;
        font-weight: bold;
        color: #848484;
    }
    #AppHeader input{
        width: 50%;
        height: 2rem;
        border-radius: 0.3rem;
        border: 1px solid #ccc;
        outline: none;
        margin-right: 1rem;
        background: url("../assets/sousuo.png") no-repeat  left center;
        background-size: 2rem;
        padding: 0 0 0 2rem;
        font-size: 1.2rem;
        color: #8a8a8a;
    }
    #AppHeader button{
        font-size: 1.2rem;
        height: 2rem;
        border-radius: .3rem;
        border: 1px solid #ccc;
        padding: 0 1rem;
        outline: none;
        color: #fff;
        background: #ff4776;
        margin-right: 1rem;
    }
    #AppHeader .searchList{
        position: absolute;
        top: 3.6rem;
        width: 100%;
        background: #ffffff;
        text-align: center;
        color: #adadad;
    }
    #AppHeader .searchList li{
        padding: .5rem 0;
        border-bottom: 1px solid #eeeeee;
    }
</style>