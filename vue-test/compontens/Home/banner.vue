<template>
    <div id="banner">
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="img in bannerData">
                    <img :id="img.id" :src="img.imgSrc"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                bannerData:[]
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('banner').then((res)=>{
                _this.bannerData = res.banner;
            });
        }
    }
</script>
<style scoped>
    #banner{
        height: 15rem;
        background: rgba(255,255,255,.8);
    }
    #banner .swipe{
        height: 100%;
    }
    #banner .swipe img{
        height: 100%;
        width: 100%;
    }
</style>