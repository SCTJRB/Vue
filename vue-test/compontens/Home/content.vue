<template>
    <div id="content">
        <banner></banner>
        <product-list></product-list>
    </div>
</template>
<script>
    import banner from './banner.vue'
    import ProductList from './productList.vue'
    export default {
        components:{
            banner,
            ProductList
        }
    }
</script>
<style>
    #content{
        position: fixed;
        top: 3.5rem;
        bottom: 3.5rem;
        width: 100%;
        background: url("../../assets/music.png") no-repeat center center;
        background-size: 100%;
        overflow: auto;
        background: rgba(255,255,255,.5);
    }
</style>