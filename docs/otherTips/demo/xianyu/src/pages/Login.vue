<template>
  <div class="container">
    <div class="head">
      <div class="back" @click="goback">
        <img src="../assets/images/返回.png" alt="返回">
      </div>
      <div class="title">账户登录</div>
      <div class="setting"/>
    </div>
    <div class="login-form">
      <div class="avatar" @click="addPic">
        <img :src="imgUrl" alt="avatar">
        <span class="uploadAvatar">上传照片</span>
        <input 
          ref="file" 
          type="file" 
          hidden 
          accept="image/jpeg,image/jpg,image/png"
          capture="camera"
          @change="handleFileInput">
      </div>

      <form class="form">
        <div class="input-box border-1px">
          <lable for="name" class="lable">账户</lable>
          <input id="name" v-model="username" name="username" type="text" placeholder="手机号/会员号/邮箱">
        </div>
        <div class="input-box border-1px">
          <lable for="password" class="lable">密码</lable>
          <input id="password" v-model="password" name="password" type="password" placeholder="请输入密码">
        </div>
        <div class="button">
          <div class="login" @click="handleLogin">登录</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// lrz为图片压缩库
import lrz from 'lrz';
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      imgUrl: '../../static/avatar.jpg',
      username: '',
      password: '',
    }
  },
  computed: {},
  methods: {
    // 路由返回
    goback() {
      this.$router.go(-1);
    },

    // 选择，处理，上传，替换图片，这部分代码参考价值高
    // 点击头像上传图片
    addPic() {
      this.$refs.file.click();
    },
    // 处理上传的图片，压缩
    handleFileInput(e) {
      let files = e.target.files;
      console.log(files);
      if(!files.length) return
      this.createImage(files, e);
    },
    createImage(files, e) {
      lrz(files[0], { width:480 }).then(rst => {
          // let self = this;
          // self.imgUrl = rst.base64;
          this.imgUrl = rst.base64;
          console.log(self)
        })
        .catch(err => {
          console.log(err);
        })
        .always(() => {
          e.target.value = null;
        })
    },
    // 登录按钮事件
    handleLogin() {
      if(this.username === '') {
        this.$toast('请输入用户名');
      } else if(this.password === '') {
        this.$toast('密码不能为空');
      } else if(this.password.length < 9) {
        this.$toast('密码不能少于9位');
      } else {
        window.localStorage.setItem('username', this.username);
        window.localStorage.setItem('password', this.password);
        this.$store.dispatch('hasLogin');

        let obj = {};
        obj.avatar = this.imgUrl;
        obj.username = this.username;
        obj.password = this.password;
        this.$store.dispatch('setUserName', this.username);
        this.$store.dispatch('setUserInfo', obj);
        
        this.$toast({
          message: '登录成功',
          duration: 500,
        });

        setTimeout(() => {
          this.$router.push('/')
        }, 600);
        this.$store.dispatch('setCurIndex', 0);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';

.container
  width 10rem 
  // height 2rem
  // background-color #ccc
  .head
    position relative
    height 1.6rem
    display flex
    justify-content center
    align-items center
    background-color #f3f3f3
    .back
      position absolute
      left .2rem
      // top .4rem
      width 1rem
      height 1rem
      img 
        width .8rem
        height .8rem
    .title
      font-size .4rem
      font-weight 700
  .login-form
    .avatar
      width 100%
      font-size .45rem
      font-weight 700
      display flex
      flex-direction column
      align-items center
      margin 1.4rem 0
      img 
        width 2rem 
        height 2rem 
        border-radius 50%
        margin-bottom .2rem
    .form 
      .input-box
        border-1px(#000)
        padding .33rem .33rem
        margin-bottom .5rem
        display flex
        align-items center
        .lable
          width 2.5rem
          font-size .5rem
          font-weight 600
        input 
          flex 1
          // 边框
          border none
          // 选中边框 
          outline none 
          background-color #fff
          font-size .4rem
          color #666
      .button 
        width 10rem
        padding .25rem .25rem
        box-sizing border-box
        .login 
          width 100%
          height 1.3rem
          display flex
          align-items center
          justify-content center
          font-size .45rem
          letter-spacing .2rem
          color #777
          background-color #ffda44
          

</style>
