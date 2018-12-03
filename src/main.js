// 这是入口文件   

//  导入 vue 框架文件
import Vue from "vue";
//1.1 配置路由  导入路由包
import VueRouter from "vue-router"
//1.2 安装路由
Vue.use(VueRouter);

//2.1  导入 vue-resource  
import VueResource from "vue-resource";
Vue.use(VueResource);

// 安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);



//定义全局过滤器    /使用 nodeJs 中的 moment  安装 npm i moment -s  
// 导入格式化时间插件
import moment from "moment";
Vue.filter("dateFormat", function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//导入 app 根组件 
import App from "./App.vue"
//导入 mint-UI 中的组件   按需导入 并且手动注册按需导入的组件
// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from "mint-ui";
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUi from "mint-ui";
Vue.use(MintUi);
import "mint-ui/lib/style.css"; 



// 导入 底部菜单栏所需要的 mui文件
import "./lib/mui/css/mui.css";
// 导入 底部图标所有到的css
import "./lib/mui/css/icons-extra.css"


// 1.3 导入自身定义的路由文件  router.js 模块
import router from "./router.js"

// var login = {
//     template: "<h1>测试一下下 {{ this.msg }}</h1>"
// }
var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router //1.4挂载路由对象到 vm 实例
     
})