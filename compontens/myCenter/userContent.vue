<template>
    <div id="userContent">
        <user-info></user-info>
        <order-info></order-info>
        <addr-info></addr-info>
    </div>
</template>
<script>
    import userInfo from './userInfo.vue'
    import orderInfo from './orderInfo.vue'
    import addrInfo from './addrInfo.vue'
    export default {
        components:{
            userInfo,
            orderInfo,
            addrInfo
        }
    }
</script>
<style scoped>
    #userContent{
        margin-top: 3.5rem;
        width: 100%;
        background-size: 100%;
        overflow: auto;
    }
</style>