<template>
    <div id="ArticleList" @contextmenu.prevent="mouseclick('右')">
        <TanTable :t_header="tHeader" :t_body="tBody" :options="options"></TanTable>
    </div>
</template>

<script>
    import TanTable from '/src/components/common/Tan_table.vue'
    import {useRoute,useRouter} from 'vue-router'
    import {computed, reactive, provide, ref, toRefs, onMounted} from 'vue'
    import {useStore} from 'vuex'
    import http from '/src/lib/http'

    export default {
        components: {
            TanTable
        },
        setup() {
            // 路由信息
            let route = useRoute()
            let router = useRouter()

            const state = reactive({
                tBody: []
            })
            const {tBody} = toRefs(state)
            http('get', '/article/articleList').then(res => {
                state.tBody = res.data
                console.log(res)
            })

            let tHeader = ref([
                    {title: 'title', name: 'title', width: '250'},
                    {title: 'id', name: 'id', width: '170'},
                    {title: 'category', name: 'category_title', width: '200'},
                    {title: 'time', name: 'input_time', width: '250'},
                    {title: 'hot', name: 'click_count', width: '250'},
                    // {title: 'options', name: 'options', width: '251'}
                ]),
                options = {
                    fixed: {left: 2, right: 1},
                    handle: [
                        {
                            title: '编辑',
                            fun: (id,title) => {
                                router.push({ name: 'ArticleEdit', params: { article_id: id }})
                                setHeaderTitle(title)
                            }
                        },
                        {
                            title: '删除',
                            fun: id => {
                                console.log('删除'+id)
                            }
                        },
                    ]
                }
            const mouseclick = (where) => {
                console.log(where)
            }

            // 更改顶部header title
            const store = useStore()
            const headerTitle = store.state.routeTitle
            const setHeaderTitle = title => {
                // store.commit('setRouteTitle', `${headerTitle} / ${title}`)
                store.commit('setRouteTitle', headerTitle + ' / ' + title)
            }

            onMounted(() => {
                store.commit('setRouteTitle', `ArticleList`)
            })

            return {
                tHeader, tBody, options, state,mouseclick,setHeaderTitle
            }
        }
    }
</script>

<style scoped lang="less">
    #ArticleList {
        position: relative;
        width: inherit;
        height: inherit;
        font-size: 30px;
        /*overflow-y: visible;*/
    }

</style>
