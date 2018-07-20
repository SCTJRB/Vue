<template lang="html">
    <div>
        <router-view name="header"></router-view>
        <router-view></router-view>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import HomeFooter from './footer.vue'
    export default {
        components: {
            HomeFooter
        }
    }
</script>

<style lang="css" scoped>

</style>
