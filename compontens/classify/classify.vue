<template>
    <div id="content">
        <left-bar></left-bar>
        <right-bar></right-bar>
    </div>
</template>
<script>
    import leftBar from './leftBar.vue';
    import rightBar from './rightBar.vue';
    export default {
        components:{
            leftBar,
            rightBar
        },
        data(){
            return{
                // classfiyList:[]
            }
        },
        mounted(){
            // console.log(this.$route)
        },
        created(){
            // let _this = this;
            // this.$store.dispatch('classfiy').then((res)=>{
            //     _this.classfiyList = res.classfiy;
            // })
        }
    }
</script>
<style scoped>
    #content{
        display: flex;
        position: fixed;
        top: 3.5rem;
        bottom: 3.5rem;
        width: 100%;
        background: url("../../assets/music.png") no-repeat center center;
        background-size: 100%;
        overflow: auto;
    }
</style>