<template>
    <div id="listBlock">
        <p class="BlockName">火爆推荐</p>
        <div class="BlockList">
            <ul>
                <li v-for="list in hotProduct">
                    <img src="../../assets/productPic5.jpg"/>
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
                hotProduct:[]
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('hotProduct').then((res)=>{
                _this.hotProduct = res.hotProduct
            });
        }
    }
</script>
<style scoped>
     #listBlock{
        padding:0 1px;
        /*background: #e3e3e3;*/
    }
     #listBlock .BlockName{
        padding: .8rem ;
        font-size: 1.3rem;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        text-align: center;
        letter-spacing: 3px;
         color: #ff4776;
    }
    #listBlock .BlockList{
        /*background: #fff;*/
    }
    #listBlock .BlockList ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    #listBlock .BlockList ul:after{
        display:block;
        content:"clear";
        height:0;
        clear:both;
        overflow:hidden;
        visibility:hidden;
    }
    #listBlock .BlockList ul li{
        float: left;
        width: 49.8%;
        height: 15rem;
        background: #fff;
        /*margin-bottom: 1px;*/
        position: relative;
    }
    #listBlock .BlockList img{
        width: 100%;
        height: 100%;
    }
    #listBlock .BlockList .productInfo{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,71,118,.4);
        color: #fff;
        padding: .2rem;
    }
    #listBlock .BlockList .productInfo>.productName{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #listBlock .BlockList .productInfo>.productPrice{
        color: red;
        padding: .5rem 0 0 0;
    }
    #listBlock .BlockList .productInfo>.productPrice>del{
        margin-left: 1rem;
    }

</style>