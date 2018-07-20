<template>
    <div id="rightBar">
        <div class="showPic" v-if="classfiyProduct.list?classfiyProduct.list.isShowTopPic:false">
            <img class="" src="../../assets/showPic.jpg"/>
        </div>
        <div class="ProductList" v-if="classfiyProduct.list?classfiyProduct.list.productList:false">
            <div class="listBlock" v-for="praentList in classfiyProduct.list.productList">
                <p>{{praentList.bolckName}}</p>
                <ul>
                    <li v-for="childList in praentList.List">
                        <img src="../../assets/productPic.png"/>
                        <span>{{childList.productName}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShowTopPic:false
            }
        },
        created(){

        },
        computed:{
            classfiyProduct(){
                return this.$store.state.classfiy.currenClassfiy||{};
            }
        }
    }
</script>
<style scoped>
    #rightBar{
        left: 7rem;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background: rgba(255,255,255,.8);
        padding: 0 .2rem;
    }
    /*#rightBar */
    #rightBar .showPic{
        width: 100%;
        height: 7rem;
    }
    #rightBar .showPic img{
        width: 100%;
        height: 100%;
    }
    .listBlock p{
        font-size: 1.4rem;
        padding: 1rem 0;
        font-weight: bold;
    }
    .listBlock ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .listBlock li{
        float: left;
        width: 49.8%;
        background: rgba(255,255,255,.5);
        /* margin-bottom: 1px; */
        position: relative;
        text-align: center;
        color: #575757;
    }
    .listBlock li img{
        width: 100%;
    }

</style>