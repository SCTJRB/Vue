<template>
    <div id="footer">
        <ul>
            <li>
                <router-link to="/" exact>
                    <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'classify'}">
                    <span>分类</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'order'}">
                    <span>订单</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'myCenter'}">
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #footer{
        width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-top: 1px solid #ccc;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    #footer ul{
        width: 100%;
        height: 100%;
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
    }
    #footer ul li{
        float: left;
        width: 25%;
        /*padding: 0 1.5rem;*/
        font-size: 1.5rem;
        text-align: center;
    }
    #footer ul li a{
        display: inline-block;
        width: 100%;
        /*padding: 0 1.5rem;*/
        color: #5b5b5b;
    }
    #footer ul li .router-link-active{
        color: #fff;
        background: #ff4776;
    }
</style>