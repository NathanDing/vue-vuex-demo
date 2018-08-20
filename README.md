# vue-vuex-demo

> vue demo工程。 使用webstorm（IDE）创建，vue-cli 版本是2.9.6。


## Build Setup（官方build步骤说明）

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# 默认已经安装vue-router
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 开发说明
> 本demo中主要介绍 vue + vuex。demo例子比较简单
``` bash
本次demo工程主要关注的文件与目录
----demo_path/index.html:应用的入口文件，（为啥又是它？单页面应用开发不就是一个html么！具体为啥么……好像是要把配置文件暴露出来才能看到，不深究啦）
------------------------------------------------------------------------------------------------
    
    ##########  index.html代码如下    ##########
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>vue-vuex-demo</title>
      </head>
      <body>
        <!-- 这个div是应用的开始，请记住他的ID是：“app”（小写的哦，与“APP”是不用的） -->
        <div id="app"></div> 
      </body>
    </html>
------------------------------------------------------------------------------------------------    

----demo_path/src
------------------------------------------------------------------------------------------------    

    ##########  App.vue代码如下    ##########
    // 声明template（模板）
    <template>
      <div id="app">
        <img src="./assets/logo.png">
        <router-view/> <!-- router相关知识，此处作为路由出口 -->
      </div>
    </template>
    
    <script>
    export default {
      name: 'App' // 给它（模板）取了一个名字叫做“App”
    }
    </script>
------------------------------------------------------------------------------------------------ 
    ##########  main.js代码如下（本项目的核心文件，重要） ##########
    import Vue from 'vue'
    import App from './App' //引入组件App
    import store from './store'
    import router from './router'
    Vue.config.productionTip = false
    // 创建一个vue组件，这是一个根组件
    new Vue({
      /** 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。
       * 可以是 CSS 选择器，也可以是一个 HTMLElement 实例。
       * 在实例挂载之后，元素可以用 vm.$el 访问。**/
      el: '#app', 
      /** Vuex相关知识点，全局只有一个 **/
      store,
      /** vue-router相关知识点，此处作为vue实例的一个选项 **/
      router,
      /** 该实例包含的vue组件，“App” 指的是“import App from './App'”中的App **/
      components: { App },
      /** 该实例的的template（模板）指的是App.vue内的template **/
      template: '<App/>'
    })
------------------------------------------------------------------------------------------------   
    ##########  ./store/index.js代码如下（本项目的store核心文件，暂时未涉及action） ########## 
    // 组装模块并导出 store 的地方
    import Vue from 'vue'
    import Vuex from 'vuex'
    // make sure to call Vue.use(Vuex) if using a module system
    
    Vue.use(Vuex) // 这个很重要
    
    const myMutation = {
      increment: state => state.count++,
      changeName: (state, v) => {
        state.name1 = v
      },
      decrement: state => state.count--
    }
    // const myActions = {}
    const store = new Vuex.Store({
      state: {
        count: 10,
        name1: 'vue1',
        name2: 'vue2'
      },
      // actions: myActions,
      mutations: myMutation
    })
    export default store

```
