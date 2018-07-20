<template>
    <div id="content">
        <user-head></user-head>
        <userContent></userContent>
        <similar-product></similar-product>
    </div>
</template>
<script>
    import userHead from './userHead.vue'
    import userContent from './userContent.vue'
    import SimilarProduct from "../../compontens/Home/similarProduct.vue";
    export default {
        components:{
            userHead,
            userContent,
            SimilarProduct
        }
    }
</script>
<style scoped>
    #content{
        position: fixed;
        top: 0;
        bottom: 3.5rem;
        width: 100%;
        background: url("../../assets/music.png") no-repeat center center;
        background-size: 100%;
        overflow: auto;
    }
    #similarList{
        margin-top: 2rem;
        border-top: 1px solid #e3e3e3;
    }
</style>