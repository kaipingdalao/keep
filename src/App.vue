<template>
  <router-view></router-view>
</template>

<script>

  import * as echarts from 'echarts'
  import {provide} from 'vue'

  export default {
    name: 'App',
    setup() {
      provide('ec',echarts)//provide
      return {

      }
    }
  }
</script>

<style src="../public/static/css/reset.css">
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

</style>
