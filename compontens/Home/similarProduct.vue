<template>
    <div id="similarList">
        <p class="BlockName">为你推荐</p>
        <div class="BlockList">
            <ul>
                <li v-for="list in similarProduct">
                    <img src="../../assets/productPic4.jpg"/>
                    <div class="productInfo">
                        <p class="productName">{{list.productName}}</p>
                        <p class="productPrice">￥{{list.price}}<del>￥{{list.origePrice}}</del></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                similarProduct:[]
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('similarProduct').then((res)=>{
                _this.similarProduct = res.similarProduct;
            })
        }
    }
</script>
<style scoped>
    #similarList .BlockName{
        padding: .8rem ;
        font-size: 1.3rem;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        text-align: center;
        letter-spacing: 3px;
        color: #ff4776;
    }
    #similarList{
        padding: 0 1px;
    }
    #similarList .BlockName{
        padding: .8rem ;
        font-size: 1.3rem;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        text-align: center;
        letter-spacing: 3px;
    }
    #similarList .BlockList ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    #similarList .BlockList ul:after{
        display:block;
        content:"clear";
        height:0;
        clear:both;
        overflow:hidden;
        visibility:hidden;
    }
    #similarList .BlockList ul li{
        float: left;
        width: 49.8%;
        height: 15rem;
        background: #fff;
        margin-bottom: 1px;
        position: relative;
    }
    #similarList .BlockList img{
        width: 100%;
        height: 100%;
    }
    #similarList .BlockList .productInfo{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,71,118,.4);
        color: #fff;
        padding: .2rem;
    }
    #similarList .BlockList .productInfo>.productName{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #similarList .BlockList .productInfo>.productPrice{
        color: red;
        padding: .5rem 0 0 0;
    }
    #similarList .BlockList .productInfo>.productPrice>del{
        margin-left: 1rem;
    }
</style>