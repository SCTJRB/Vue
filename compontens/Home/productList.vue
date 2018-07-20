<template>
    <div id="productList">
        <hot-product></hot-product>
        <like-product></like-product>
        <similar-product></similar-product>
    </div>
</template>
<script>
    import HotProduct from "./HotProduct.vue";
    import LikeProduct from "./likeProduct.vue";
    import SimilarProduct from "./similarProduct.vue";
    export default {
        components: {
            HotProduct,
            LikeProduct,
            SimilarProduct
        }
    }
</script>