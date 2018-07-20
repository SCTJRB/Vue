<template>
    <div id="leftBar">
        <ul>
            <!--<li class="LiActive">热门推荐</li>-->
            <li v-for="(list,index) in classfiyList" :id="list.classfiyId" :class="{LiActive:index==indexs}" @click="queryClassfiy(index,list.classfiyId)">
                {{list.classfiyName}}
            </li>

        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                classfiyList:[],
                indexs:0
            }
        },
        methods:{
            queryClassfiy:function (res,id) {
                this.indexs = res;
                let _this = this;
                let classfiy = this.$store.state.classfiy;
                let classfiyProduct = classfiy.classfiyProduct;
                let s = classfiyProduct.some(function (curren,index,arr) {
                    if(curren.classfiyId == id){
                        _this.$store.dispatch('setCurrenClassfiy',curren);
                    }
                    return curren.classfiyId == id;
                });
                if(!s){
                    this.$store.dispatch('classfiyProduct',id)
                }
            }
        },
        created(){
            let _this = this;
            this.$store.dispatch('classfiy').then((res)=>{
                _this.classfiyList = res.classfiy;
                _this.queryClassfiy(0,res.classfiy[0].classfiyId)
            })
        }
    }
</script>
<style scoped>
    #leftBar{
        display: inline-block;
        width: 10rem;
        height: 100%;
        overflow-y: auto;
        border-right: 1px solid #ccc;
        background: rgba(255,255,255,.8);
    }
    #leftBar ul li{
        padding: 1.2rem .5rem;
        text-align: center;
    }
    #leftBar ul .LiActive{
        background: #ebebeb;
        color: red;
    }
</style>