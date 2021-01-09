<template>
    <div id="ArticlEedit">
        <p v-model="input"></p>
        <textarea v-model="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>

</template>

<script>
    import Tan_table from  '../../../../components/common/Tan_table.vue'
    import marked from 'marked'
    export default {
        name: "edit",
        components:{Tan_table},
        data() {
            return {
                input: ``
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.input, { sanitize: true });
            }
        }

    }
</script>

<style scoped>
    #ArticlEedit {
        width: 100%;
        height: 100%;
        /*background-color: #eb7350;*/
        /*overflow: hidden;*/
    }
</style>
