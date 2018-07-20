<template>
    <div id="likeList">
        <p class="BlockName">猜你喜欢</p>
        <div class="BlockList">
            <ul>
                <li v-for="list in likeProduct">
                    <img src="../../assets/prductPic3.jpg"/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                likeProduct:[]
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('likeProduct').then((res)=>{
                _this.likeProduct = res.likeProduct;
            })
        }
    }
</script>
<style scoped>
    #likeList .BlockName{
        padding: .8rem ;
        font-size: 1.3rem;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        text-align: center;
        letter-spacing: 3px;
        color: #ff4776;
    }
    #likeList .BlockList{
        width: 100%;
        overflow-x: auto;
    }
    #likeList .BlockList ul{
        display: flex;
        /*justify-content: space-between;*/
    }
    #likeList .BlockList li:nth-child(1){
        border-left: none;
    }
    #likeList .BlockList li{
        height: 10rem;
        background: #fff;
        border-left: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    #likeList .BlockList li img{
        width: 12rem;
        height: 100%;
    }
</style>