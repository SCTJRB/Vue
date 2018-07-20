<template>
    <div id="userInfo">
        <div class="userHead">
            <img src="../../assets/headerPic.jpg">
            <div class="userName">
                <p>{{userInfo.userName}}</p>
                <p>用户名：{{userInfo.userAccount}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                userInfo:{}
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('userInfo').then((res)=>{
                _this.userInfo = res
            })
        }
    }
</script>
<style>
    #userInfo{
       padding: .3rem;
    }
    #userInfo .userHead{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: linear-gradient(90deg,#eb3c3c,#ff7459);
        height: 8rem;
        border-radius: .5rem;
    }
    #userInfo .userHead img{
        width: 6rem;
        height: 6rem;
        border-radius: 100%;
    }
    #userInfo .userHead .userName{
        margin:0 1rem;
        color: #fff;
        font-size: 1.3rem;
    }
</style>