<template>
    <h1> home index</h1>
    <router-link to="/article">article</router-link>
    <router-link to="/article/1">article1</router-link>
    <router-link to="/article/search/1">search</router-link>
</template>

<script>
    import {useRoute, useRouter} from 'vue-router'
    export default {
        setup() {
            // 路由信息
            let route = useRoute()
            let router = useRouter()
            // 子路由
            let fun = useRoute().matched[0].children
            fun.forEach((val) => {
                val.intactPath = useRoute().path + '/' + val.path
            })
            return {
                fun
            }
        }
    }
</script>

<style scoped>

</style>
