// 引入第三方包
import Vue from 'vue';


// 引入组件
import Home from './components/home/home.vue';
import App from './App.vue';
import Vip from './components/vip/Vip.vue';
import Shopcar from './components/shopcar/Shopcar.vue';
import Search from './components/search/Search.vue';
import NewList from './components/news/newsList.vue';
import NewDetail from './components/news/newsDetail.vue';
import PhotoList from './components/photo/photoList.vue';
import PhotoDetail from './components/photo/photodetail.vue';
// Mintui 引入
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// 启用MintUi
Vue.use(MintUi);



// 全局组件的操作
import NavBar from './components/commons/NavBar.vue';
import Comment from './components/commons/Comment.vue';
Vue.component('NavBar',NavBar);
Vue.component('Comment',Comment);
// Mui 引入
import './static/libs/mui-master/dist/css/mui.css';


//VuePreview: 开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//VuePreview: 结束


// Moment引入
import Moment from 'moment';
// 声明全局过虐器
Vue.filter('converDate',function(value){
    return Moment(value).format('YYYY-MM-DD');
})

// VueRouter 引入
import VueRouter from'vue-router';
Vue.use(VueRouter);
let router = new VueRouter ({
    linkActiveClass:'mui-active',
    routes:[
        {path:'/',redirect:{name:'home'}},
        {name:'home',path:'/home',component:Home},
        {name:'vip',path:'/vip',component:Vip},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search},
        {name:'new.list',path:'/news/list',component:NewList},
        {name:'new.detail',path:'/news/detail',component:NewDetail},
        {name:'photo.list',path:'/photo',component:PhotoList},
        {name:'photo.detail',path:'/photo/detail/:imgId',component:PhotoDetail},
    ]
})

// Axios 引入
import Axios from 'axios';
Vue.prototype.$ajax=Axios;
Axios.defaults.baseURL='http://182.254.146.100:8899/api/'
// 设置拦截器
Axios.interceptors.request.use(config=>{
    MintUi.Indicator.open({
        text:'加载中...',
        spinnerType:'fdaing-circle'
    });
    return config;
});
// 响应拦截器
Axios.interceptors.response.use(response=>{
    MintUi.Indicator.close();//关闭looding图标
    return response;
})

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})