import {createRouter, createWebHistory} from 'vue-router'
//组件模块
import HomeIndex from '../components/home/Index.vue'
// article
import ArticleIndex from '../components/home/article/Index.vue'
import ArticleCategory from '../components/home/article/Category.vue'
import ArticleSearch from '../components/home/article/Search.vue'
import ArticleContent from '../components/home/article/Content.vue'
// log
import Log from '../components/home/log/Index.vue'
// admin
import AdminLogin from '../components/admin/Login.vue'
import AdminNav from '../components/admin/Nav.vue'
import AdminIndex from '../components/admin/Index.vue'
import ArticleAdd from '../components/admin/module/article/add.vue'
import ArticleEdit from '../components/admin/module/article/edit.vue'
import ArticleList from '../components/admin/module/article/list.vue'
import AdminLog from '../components/admin/module/log/index.vue'
import AdminToDo from '../components/admin/module/todo/index.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {path: '/', name: 'HomeIndex', component: HomeIndex, meta: {title: "HomeIndex"}},
    // article
    {path: '/article', name: 'ArticleIndex', component: ArticleIndex, meta: {title: "ArticleIndex"}},
    {
      path: '/article/:category',
      name: 'ArticleCategory',
      component: ArticleCategory,
      meta: {title: "ArticleCategory"}
    },
    {
      path: '/article/search/:keyword',
      name: 'ArticleSearch',
      component: ArticleSearch,
      meta: {title: "ArticleSearch"}
    },
    {
      path: '/article/:category/:article',
      name: 'ArticleContent',
      component: ArticleContent,
      meta: {title: "ArticleContent"}
    },
    // day_log
    {
      path: '/log',
      name: 'Log',
      component: Log,
      meta: {title: "Log"},
    },
    // admin
    {
      path: '/admin',
      name: 'AdminNav',
      component: AdminNav,
      meta: {title: "AdminNav"},
      // 重定向
      redirect: { name: 'AdminIndex' },
      children: [
        {
          path: 'AdminIndex', name: 'AdminIndex', component: AdminIndex, meta: {title: "admin", icon: 'admin_icon.svg'}
        },
        {
          path: 'ArticleAdd', name: 'ArticleAdd', component: ArticleAdd, meta: {title: "添加文章", icon: 'add_icon.svg'}
        },
        {
          path: 'ArticleEdit', name: 'ArticleEdit', component: ArticleEdit, meta: {title: "编辑文章", icon: 'edit_icon.svg'}
        },
        {
          path: 'ArticleList', name: 'ArticleList', component: ArticleList, meta: {title: "文章列表", icon: 'list_icon.svg'}
        },
        {
          path: 'LogShow', name: 'LogShow', component: AdminLog, meta: {title: "日总结", icon: 'log_show_icon.svg'}
        },
        {
          path: 'ToDo', name: 'ToDo', component: AdminToDo, meta: {title: "ToDo", icon: 'todo_icon.svg'}
        },
      ],
    },
    {path: '/admin/login', name: 'AdminLogin', component: AdminLogin, meta: {title: "AdminLogin"}},

  ]
})

export default router
