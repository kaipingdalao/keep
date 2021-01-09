<template>
    <p>test</p>
    <p>{{props.test}}</p>
</template>

<script>
    import { inject, watchEffect, reactive, toRefs } from 'vue'
    export default {
        props: {
            t_header: Array,
            t_body: Array,
            options: Object,
            test: String
        },

        setup(props, context) {
            // var {
            //     t_header: t_header,
            //     t_body: t_body,
            //     options: options,
            //     // test: test
            // } = props

            const state = reactive({
                test: props.test
            })
            let {test} = toRefs(state)
            watchEffect(() => {
                console.log('====')
                console.log(props.test)
                console.log(test)
                console.log('=====')
            })
            const customVal = inject("customVal");
            return {
                 test,customVal,props,state
            }
        }
    }
</script>

<style scoped lang="less">
    p {
        color: #000;
    }
</style>
