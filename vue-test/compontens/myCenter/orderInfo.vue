<template>
    <div id="orderInfo">
        <ul>
            <li>待付款</li>
            <li>待收货</li>
            <li>待评价</li>
            <li>全部订单</li>
        </ul>
    </div>
</template>
<style scoped>
    #orderInfo{
        background: rgba(255,255,255,.8);
        height: 4rem;
        line-height: 4rem;
        margin-top: 1rem;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
    }
    #orderInfo li{
        width: 25%;
        text-align: center;
        color: #646464;
        font-size: 1.3rem;
        float: left;
    }
</style>