<template>
    <div id="ArticlEedit">
        <textarea id="logTextarea" v-model="content"></textarea>
        <div id="logContent" class="md-box">
            <vue3-markdown-it class="markdown-css" :source="content"/>
        </div>
    </div>

</template>

<script>
    import {computed, reactive, toRefs, onMounted} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import http from '/src/lib/http'
    import scrollLinkage from '/src/lib/scroll-linkage'
    import {useStore} from 'vuex'
    import "/src/components/common/css/markdown.less"
    import 'highlight.js/styles/github-gist.css';

    export default {
        name: "edit",
        setup() {
            // 路由信息
            let route = useRoute()
            let router = useRouter()
            const store = useStore()

            let state = reactive({
                title: '',
                content: ''
            })
            let {title, content} = toRefs(state)
            let {article_id} = route.params
            !(!article_id && router.push({name: 'ArticleList', params: {}}))
            &&
            http('get', `/article/article/${article_id}`).then(res => {
                state.title = res.data.title
                state.content = res.data.content
                store.commit('setRouteTitle', `Edit / ` + res.data.title)
            })


            onMounted(() => {
                // 滚动条同步
                let logContent = document.getElementById('logContent'),
                    logTextarea = document.getElementById('logTextarea')
                scrollLinkage(logContent,logTextarea)

            })

            return {
                title,
                content,
                article_id
            }
        }
    }
</script>

<style scoped lang="less">
    #ArticlEedit {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;

        /*background-color: #eb7350;*/
        /*overflow: hidden;*/

        textarea {
            width: 50%;
            min-height: 100%;
            max-height: 100%;
            font-size: 14px;
            box-sizing: border-box;
            padding: 20px;
            border: 0px #b0b0b0 solid;
            border-top: 1px #b0b0b0 solid;
            // 抗锯齿渲染
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;

            color: #333;
            letter-spacing: 0.1px;
        }

        .md-box {
            border-top: 1px #b0b0b0 solid;
            min-width: 50%;
            height: 100%;
            overflow: scroll;
            overflow-x: auto;
            position: relative;
        }
        .md-box::-webkit-scrollbar {
            display:none;
        }
    }
</style>
