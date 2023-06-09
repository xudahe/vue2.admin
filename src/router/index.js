import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from "@/views/login/index"
import Layout from "@/views/layout/index"


//路由懒加载：减少首次加载时从服务器请求的组件，当路由被访问时，再从服务器请求对应组件。
//使用动态的import()语法,不是必须加载的组件使用懒加载
const
  Home = () => import('@/views/home/index'),
  personal = () => import('@/views/other/personal/index'),
  Error_500 = () => import('@/views/other/error/500'),
  Error_403 = () => import('@/views/other/error/403'),
  Error_404 = () => import('@/views/other/error/404');

//动态添加的路由
let addRouter = [];

//异步挂载的路由
getRoutes(require.context('@/views/operation', true, /\.vue$/));
getRoutes(require.context('@/views/system', true, /\.vue$/));
getRoutes(require.context('@/views/tools', true, /\.vue$/));
getRoutes(require.context('@/views/pages', true, /\.vue$/));
getRoutes(require.context('@/views/map', true, /\.vue$/));

//自动注册路由
function getRoutes(req) {
  req.keys().map(val => {
    // 获取组件配置
    const componentConfig = req(val);

    // 第一种方法，剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const name = val.replace(/^\.\//, '').replace(/\.vue$/, '');
    // 第二种方法，此处的name,是组件属性定义的name  
    // const name = componentConfig.default.name;

    // 全局注册组件
    const component = Vue.component(
      name,
      // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
      componentConfig.default || componentConfig
    );

    addRouter.push({
      path: '/' + name,
      name: name,
      component,
    })
  });
}

//默认路由
let defaultRouter = [{
    path: '/login',
    name: 'login',
    meta: {
      title: "登录"
    },
    hidden: true,
    component: Login,
  },
  {
    path: "/",
    meta: {
      title: "重定向"
    },
    redirect: "/login", //默认重定向到登录
    hidden: true,
  },
  {
    path: "/layout",
    name: 'layout',
    meta: {
      title: "主页"
    },
    iconCls: "fa fa-dashboard", // 图标样式class
    component: Layout,
    children: [{
        path: "/home",
        name: "home",
        meta: {
          title: "首页"
        },
        component: Home,
      },
      {
        path: "/personal",
        name: "personal",
        meta: {
          title: "个人中心"
        },
        component: personal,
        // keepAlive: true,  //缓存页面，也可使用<keep-alive></keep-alive>
      },

      {
        path: "/workflow",
        name: "workflow",
        component: () => import("@/views/workflow/index.vue"),
      },
      {
        path: "/workSpace",
        name: "workSpace",
        component: () => import("@/views/workflow/WorkSpace/index.vue"),
      },
      {
        path: "/formsPanel",
        name: "formsPanel",
        component: () => import("@/views/workflow/admin/FormsPanel.vue"),
      },
      {
        path: "/formProcess",
        name: "formProcess",
        component: () => import("@/views/workflow/admin/FormProcess.vue"),
      },
    ]
  },
  {
    path: "/403",
    name: "403",
    component: Error_403,
  },
  {
    path: "/404",
    name: "404",
    component: Error_404,
  },
  {
    path: "/500",
    name: "500",
    component: Error_500,
  },
]


// 防止连续点击多次路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
};

//创建路由
export const createRouter = () => new VueRouter({
  // mode: 'history', //去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }), //作用是将页面滚动位置重置为顶部（y 坐标为 0）
  routes: defaultRouter
})
const Router = createRouter() // 获得 route 实例

export default Router

export {
  defaultRouter,
  addRouter
}