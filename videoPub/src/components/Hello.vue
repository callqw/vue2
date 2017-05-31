<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <h2 id="h2">Essential Links</h2>
    <mu-flat-button label="登出" class="demo-flat-button" @click="logout" secondary/>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import jwt from 'jsonwebtoken'
  export default {
    name: 'hello',
    data () {
      return {
        name: '', // 用户名改为空
        todos: '',
        activeName: 'first',
        list: [],
        count: 0,
        id: '' // 新增用户id属性，用于区别用户
      };
    },
    created() {
      const userInfo = this.getUserInfo(); // 新增一个获取用户信息的方法
      console.info(userInfo);
      if (userInfo != null) {
        this.id = userInfo.id;
        this.name = userInfo.user;
      } else {
        this.id = '';
        this.name = ''
      }
    },
    methods: {
      logout() {
        sessionStorage.setItem('demo-token', null); // 将token清空
        this.$router.push('/')
      },
      getUserInfo(){
        const token = sessionStorage.getItem('demo-token');
        if (token != null && token != 'null') {
          let decode = jwt.verify(token, 'vue-koa-demo');
          return decode
        } else {
          return null
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  html {
    font-size: 100px;
  }

  .hello {

  #h2 {
    color: red;
    font-size: 2rem;
  }

  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
