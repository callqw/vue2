<template>
  <div class="container">
    <form :model="form">
      <mu-text-field label="帐号" v-model="form.user" hintText="请输入帐号" labelFloat/>
      <br/>
      <mu-text-field label="密码" v-model="form.password" hintText="请输入密码" type="password" labelFloat/>
      <br/>
      <mu-text-field label="验证码" hintText="请输入验证码" labelFloat/>
      <br/>
      <mu-flat-button label="登录" class="demo-flat-button" @click="submit" secondary/>
    </form>
    <mu-dialog :open="dialog" title="温馨提示">
      {{message}}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
  </div>
</template>

<script>
  import md5 from 'md5'
  export default {
    name: 'hello',
    data () {
      return {
        dialog: false,
        message: false,
        form: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      close () {
        this.dialog = false
      },
      submit() {
        let obj = {
          user: this.form.user,
          password: md5(this.form.password),
        }
        this.$http.post('/server/todologin/', obj).then((res)=> {
            if (res.data.success) {
              sessionStorage.setItem('demo-token', res.data.token)   //用sessionStorage把token 存起来
              this.dialog = true
              this.message = '登录成功!'
              this.$router.push('/hello') // 进入首页页面，登录成功
            } else {
              this.dialog = true
              this.message = res.data.info; // 登录失败，显示提示语
              sessionStorage.setItem('demo-token', null); // 将token清空
            }
          }, (err)=> {
            this.dialog = true
            this.message = '请求错误！'
            sessionStorage.setItem('demo-token', null); // 将token清空
          }
        )
      }
    }
  }
</script>

<style lang="css">
  .file-button {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }

  .demo-flat-button-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .demo-flat-button {
    margin: 12px;
  }
</style>
