<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    test: function() {
      console.log(1111)
    }
  }
}
</script>

<style src="../public/static/css/reset.css">
  a {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }

</style>
