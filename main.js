// 引入vue
import Vue from 'vue';
import * as Axios from './config/axios.js';
// 引入vue-router路由插件
import VueRouter from 'vue-router';
import store from './store/index.js';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(VueRouter); // 安装插件
Vue.use(MintUI);
Vue.prototype.$Axios = Axios;
import App from './compontens/App.vue';
import Header from './compontens/header.vue';
import Home from './compontens/Home/home.vue';
import Classify from './compontens/classify/classify.vue';
import Orders from './compontens/orders/order.vue';
import MyCenter from './compontens/myCenter/myCenter.vue';

let router = new VueRouter();
router.addRoutes([
    {
        path: '/',
        components: {         //多页面显示不同header使用命名视图router   components
            default:Home,
            header:Header
        }
    },
    {
        name:'classify',
        path: '/classify',
        components: {
            default:Classify,
            header:Header
        },
    },
    {
        name:'order',
        path: '/orders',
        component: Orders,
    },
    {
        name:'myCenter',
        path: '/myCenter',
        component: MyCenter,
    }
]);

// 加入到vue实例中
new Vue({
    el: '#app',
    router,
    store,
    render: (c) => c(App)
});