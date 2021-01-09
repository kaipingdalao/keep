<template>
  <div id="AdminIndex">
    <div class="layout-sider" :class="{'layout-sider-active': sider, 'layout-sider-quiet': !sider}">
      <div class="app-logo">
        <div>
          <input/>
        </div>
      </div>
      <ul class="nav">
        <router-link class="nav-item"
                     v-for="item in fun"
                     :to="item.path"
                     :class="{'nav-item-active':route.name == item.name ,'nav-item-quiet': route.name != item.name}">
          <embed :src="'/public/static/img/icon/' + item.meta.icon"
                 @click="setRouterTitle(item.name)"
                 class="nav-icon"
                 :class="
                           [
                                {'nav-icon-left':sider},
                                { 'nav-icon-center':!sider},
                                {'nav-icon-left-active':route.name == item.name},
                                {'nav-icon-center-quite':route.name != item.name}
                            ]"
          />
          <span class="nav-title"
                :class="{'nav-title-open':sider, 'nav-title-close':!sider}"
                @click="setRouterTitle(item.name)">
                        {{item.meta.title}}
                    </span>
        </router-link>
      </ul>
    </div>

    <div class="layout-header">
      <i class="icon-copy" @click="() => {sider = !sider}"></i>
      <i class="header-title">{{routeTitle}}</i>
    </div>

    <div class="layout-content">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {useRoute, useRouter} from 'vue-router'
  import {reactive, toRefs, computed} from 'vue'
  import {useStore} from 'vuex'

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

      // 开关管理
      let state = reactive({
        sider: true, // 侧边栏开关
      })
      const {sider} = toRefs(state)

      // 状态管理
      const store = useStore()
      const routeTitle = computed(() => store.state.routeTitle)

      function setRouterTitle(title) {
        store.commit('setRouteTitle', title)
      }

      return {
        fun,
        route,
        router,
        sider,
        routeTitle, setRouterTitle
      }
    }
  }
</script>

<style scoped lang="less">
  @layout-header-height: 90px;


  #AdminIndex {
    background-color: #F0F2F5;
    width: 100vw;
    height: 100vh;
  }

  .layout-sider {
    float: left;
    background-color: #001528;
    height: 100vh;
    position: relative;
    transition: all 100ms linear 0s;

    .app-logo {
      width: calc(100% - 40px);
      padding: 20px 20px;

      div {
        background-color: #334453;
        width: 100%;
        height: 50px;
      }
    }

    .nav {
      width: 100%;

      .nav-item {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #A6ADB4;
        transition: all 300ms linear 0s;
        padding: 0px 0px 0px 0px;
        overflow: hidden;

        .nav-icon {
          width: 26px;
          height: 50px;
          display: block;
          float: left;
          transition: all 300ms linear 0s;
          pointer-events: none;
        }

        .nav-icon-left {
          margin: 0px 10px 0px 30px;
        }

        .nav-icon-center {
          float: none;
          margin: auto;
        }

        .nav-title {
          color: #ddd;
          display: block;
          font-weight: 300;
          font-size: 14px;
          /*-webkit-font-smoothing: antialiased;*/
          transition: all 150ms linear 0s;
          overflow: hidden;
        }

        .nav-title-open {
          display: block;
        }

        .nav-title-close {
          display: none;
        }
      }

      // 冗余代码
      .nav-item:hover .nav-title {
        filter: drop-shadow(#fff 0px 0);
      }

      /*.nav-item:hover .nav-icon {*/
      /*    filter: drop-shadow(#fff 0px 0);*/
      /*}*/

      .nav-item-active {
        filter: drop-shadow(#fff 0px 0);
      }

      .nav-item-quiet {
        opacity: 1;
      }

      .nav-icon-left-active {
        /*filter: drop-shadow(#fff 1px 0);*/
      }

      .nav-icon-left-quite {
        opacity: 1;
      }
    }
  }

  .layout-sider-active {
    width: 13%;
    min-width: 230px;
    max-width: 300px;
  }

  .layout-sider-quiet {
    width: 6%;
    min-width: 110px;
    max-width: 130px;
  }

  .layout-header {
    height: @layout-header-height;
    line-height: @layout-header-height;
    background-color: #fff;
    margin: 0px 0px 0px 0px;

    /*  图标样式  */

    .icon-copy {
      margin: 0px 0px 0px 20px;
      display: inline-block;
      height: 1em;
      width: 1em;
      font-size: 20px;
      box-sizing: border-box;
      text-indent: -9999px;
      vertical-align: middle;
      position: relative;
      cursor: pointer;
      color: #5e5e5e;
    }

    .icon-copy:hover {
      color: #0092F9;
    }

    .icon-copy::before,
    .icon-copy::after {
      content: '';
      box-sizing: inherit;
      position: absolute;
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .icon-copy::before {
      width: .7em;
      height: .7em;
      border: 2px solid;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-radius: .1em;
      left: 40%;
      top: 36%;
      top: 33%;
    }

    .icon-copy::after {
      width: .7em;
      height: .7em;
      border: 2px solid;
      border-radius: .1em;
      left: 60%;
      top: 58%;
      top: 53%;
    }

    .header-title {
      color: #3C3C3C;
      font-size: 20px;
      display: inline-block;
      margin: 0px 0px 0px 15px;
      position: relative;
      top: 3%;
    }
  }

  .layout-content {
    color: #cccccc;
    height: calc(100vh - @layout-header-height);
    overflow: auto;

    div {
      width: inherit;
      height: 100%;
      margin: auto auto;
      overflow: hidden;
    }
  }
</style>
