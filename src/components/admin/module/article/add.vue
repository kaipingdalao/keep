<template>
  <div id="ArticleAdd">
    <div class="article-form">
      <div>
        <input placeholder="Tiele" v-model="title"/>
      </div>

      <div class="content">
        <textarea v-model="content" placeholder="Content"></textarea>
        <div class="md-box">
          <vue3-markdown-it class="markdown-css" :source="content"/>
        </div>
      </div>

      <div class="submit">
        <button>
          <i>选择图片</i>
          <input type="file" @change="getFile($event)" multiple="multiplt">
        </button>
        <select v-model="categoryActive" @change="changeProduct($event)">
          <option v-for="(item,index) in categoryList" :key="index" :value='item.id'>{{item.title}}</option>
        </select>
        <button @click="submit">add</button>
      </div>
    </div>

  </div>

</template>

<script>
  import {reactive, toRefs, onMounted} from 'vue'
  import http from '/src/lib/http'
  import "/src/components/common/css/markdown.less"
  import 'highlight.js/styles/github-gist.css';
  import axios from 'axios'

  export default {
    setup() {
      let {categoryList, defaultId} = getCategoryList()
      let categoryActive = defaultId//获取被选中的value值 默认选中的是1(北京)

      const data = reactive({
        title: '',
        content: '',
        categoryId: defaultId,
        articleImg: ''
      })
      const {title, content} = toRefs(data)

      const changeProduct = (event) => {
        console.log(categoryList)
        data.categoryId = event.target.value; //获取option对应的value值
      }

      const submit = () => {
        if (!data.title || !data.content || !data.categoryId) {
          console.log('内容不能为空')
          return
        }
        const formData = new FormData();
        formData.append('title',data.title)
        formData.append('content',data.content)
        formData.append('categoryId',data.categoryId)
        formData.append('articleImg',data.articleImg)
        // TODO 封装的axios formData 为空
        axios({ method:"post", url:"http://127.0.0.1:3003/article/add", data:formData })
          .then(res => {
            console.log(res)
          })
      }

      const getFile = (event) => {
        data.articleImg = event.target.files[0]
      }

      return {
        categoryList, categoryActive, changeProduct, title, content, submit, getFile
      }
    }
  }

  function getCategoryList() {
    const data = reactive({
      categoryList: [],
      defaultId: 0
    })
    onMounted(() => {
      http('get', '/article/category').then(res => {
        data.categoryList = res.data
        data.defaultId = res.data[0].id
      })
    })
    return toRefs(data)
  }
</script>

<style scoped lang="less">
  #ArticleAdd {
    .article-form {
      height: calc(100% - 60px);
      margin: 30px;
      display: block;
      background-color: #fff;
      display: flex;
      flex-direction: column;

      input {
        /*display: block;*/
        width: calc(100% - 40px);
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 14px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        cursor: text;
        transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
        margin: 20px 20px 0px 20px;
      }

      .content {
        flex-grow: 1;
        width: 100%;
        height: calc(100% - 200px);
        display: flex;
        justify-content: flex-start;

        textarea {
          width: 50%;
          line-height: 1.5;
          padding: 4px 7px;
          font-size: 14px;
          border: 1px solid #dcdee2;
          border-radius: 4px;
          color: #515a6e;
          background-color: #fff;
          background-image: none;
          cursor: text;
          transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
          resize: none;
          margin: 20px 20px 0px 20px;
        }

        .md-box {
          min-height: calc(100% - 40px);
          height: calc(100% - 40px);
          max-height: calc(100% - 40px);
          min-width: 50%;
          overflow: scroll;
          overflow-x: auto;
          position: relative;
          border-radius: 7px;
          margin: 20px 20px 0px 0px;
        }

        .md-box::-webkit-scrollbar {
          display: none;
        }
      }

      .submit {
        height: 60px;
        line-height: 60px;
        text-align: right;

        button {
          position: relative;
          overflow: hidden;
          input {
            width: 100%;
            height: 100%;
            position: absolute;
            font-size: 100px;
            right: 0;
            top: -60px;
            opacity: 0;
          }
        }

        select {
          display: inline-block;
          margin: 0px 20px 0px 20px;
          background-color: #f8f8f9;
          border: 1px #DCDEE2 solid;
          padding: 4px 4px;
          border-radius: 4px;
          font-size: 14px;
          color: #515a6e;
          text-align: center;
        }

        button {
          display: inline-block;
          margin: 0px 20px 0px 20px;
          padding: 4px 20px;
          border: 1px solid transparent; //自定义边框
          outline: none; //消除默认点击蓝色边框效果
          background-color: #2d8cf0;
          border-radius: 4px;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
</style>
