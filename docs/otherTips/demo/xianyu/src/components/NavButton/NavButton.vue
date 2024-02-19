<template>
  <div class="footer">
    <div class="item item2" @click="handleHomeClick">
      <img v-show="footerIndex !== 0" class="sm-img" src="../../assets/images/home.png" alt="闲置">
      <img v-show="footerIndex === 0" class="sm-img" src="../../assets/images/home1.png" alt="闲置">
      <p>闲置</p>
    </div>
    <div class="item item2" @click="handleYutangClick">
      <img v-show="footerIndex !== 1" class="sm-img" src="../../assets/images/yutang.png" alt="鱼塘">
      <img v-show="footerIndex === 1" class="sm-img" src="../../assets/images/yutang1.png" alt="闲置">
      <p>鱼塘</p>
    </div>
    <div class="item item1">
      <!-- 这里需要块级元素？ -->
      <div>
        <span class="outbox" @click="open">
          <img src="../../assets/images/加.png">
        </span>
      </div>
      <p>发布</p>
    </div>

    <!-- 弹出页面 -->
    <transition name="fade">
      <div v-if="showFloatLayer" class="login">
        <div class="head">
          <h1 class="guide">闲鱼赚钱指南</h1>
          <ul class="navbar">
            <li v-for="(item, index) in infomation" :key="index">
              <p class="title">{{ item.title }}</p>
              <p class="tip">{{ item.tip }}</p>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="type" @click="tosell">
            <div class="image">
              <img src="../../assets/images/收纳盒.png">
            </div>
            <p class="explain">卖闲置</p>
          </div>
          <div class="type" @click="tosell">
            <div class="image">
              <img src="../../assets/images/房子.png">
            </div>
            <p class="explain">出租房屋</p>
          </div>
          <div class="type" @click="tosell">
            <div class="image">
              <img src="../../assets/images/头像.png">
            </div>
            <p class="explain">发布服务</p>
          </div>
        </div>
        <div class="closebox" @click="close">
          <img class="close" src="../../assets/images/X.png">
        </div>
      </div>
    </transition>

    <div class="item item2" @click="handleMessageClick">
      <img v-show="footerIndex !== 3" class="sm-img" src="../../assets/images/message.png" alt="消息">
      <img v-show="footerIndex === 3" class="sm-img" src="../../assets/images/meaasge1.png" alt="闲置">
      <p>消息</p>
    </div>
    <div class="item item2" @click="handleMyClick">
      <img v-show="footerIndex !== 4" class="sm-img" src="../../assets/images/my.png" alt="我的">
      <img v-show="footerIndex === 4" class="sm-img" src="../../assets/images/my1.png" alt="闲置">
      <p>我的</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'NavButton',
  data() {
    return {
      footerIndex: 0,
      active: false,
      showHome: false,
      showYutang: true,
      showMessage: true,
      showMy: true,
      showFloatLayer: false,
      infomation: [
        { title: '卖什么更赚', tip: '教你卖什么更赚钱' },
        { title: '拍照相机', tip: '看看家里的东西值多少钱' },
        { title: '淘宝一键转卖', tip: '剁手多了回回血' },
      ],
    };
  },
  computed: {
    ...mapGetters(['login']),
  },
  mounted() {
    this.footerIndex = this.$store.state.curIndex;
  },
  methods: {
    ...mapMutations(['SETCURINDEX']),
    handleHomeClick() {
      this.footerIndex = 0;
      this.$store.commit('SETCURINDEX', this.footerIndex);
      // this.$store.dispatch('setCurIndex',this.footerIndex)
      this.$router.push({ path: '/' });
    },

    handleYutangClick() {
      this.footerIndex = 1;
      this.$store.commit('SETCURINDEX', this.footerIndex);
      this.$router.push({ path: '/yutang' });
    },
    handleMessageClick() {
      if (this.$store.state.isLogin) {
        this.footerIndex = 3;
        this.$store.commit('SETCURINDEX', this.footerIndex);
        this.$router.push({ path: '/message' });
      } else {
        this.$router.push({ path: '/login' });
      }
    },
    handleMyClick() {
      this.footerIndex = 4;
      this.$store.commit('SETCURINDEX', this.footerIndex);
      this.$router.push({ path: '/my' });
    },

    // 显示浮层方法
    open() {
      // this.$router.push({path: '/login'});
      if (this.$store.state.isLogin) {
        this.showFloatLayer = true;
      } else {
        this.$router.push({ path: '/login' });
      }
    },

    // 关闭浮层方法
    close() {
      this.showFloatLayer = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
// 图片大小复用
.sm-img {
  width: 0.8rem;
  height: 0.8rem;
}

// 浮层的动画
// 动画显示过程设置
.fade-enter-active {
  transition: transform 0.5s;
  transform: scale(1);
  opacity: 1;
}

// 动画隐藏过程设置
.fade-leave-active {
  transition: transform 0.7s;
  transform: scale(1);
  opacity: 0.7;
}

// 动画的显示开始和隐藏结束状态（一般是一个状态）
.fade-enter, .fade-leave-to {
  transform: scale(0);
}

.footer {
  position: fixed;
  // width: 100%;
  width: 10rem;
  height: 1.6rem;
  z-index: 500;
  display: flex;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  background-color: #fff;

  // box-sizing border-box
  .item {
    width: 100%;
    height: 100%;
    color: #888;
    font-size: 0.3rem;
    text-align: center;

    &.item2 {
      margin-top: 0.2rem;
      // line-height .5rem
    }

    &.item1 {
      position: relative;
      padding-bottom: 0.8rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .outbox {
        position: relative;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        display: block;
        margin: 0.15rem auto;
        z-index: 500;
        background-color: #ffda44;

        // background-size .8rem .8rem
        // background-position 50% 50%
        img {
          margin-top: 0.2rem;
          width: 0.8rem;
          height: 0.8rem;
        }
      }
    }
  }

  .login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 600;
    background-color: #fff;

    .head {
      width: 100%;

      .guide {
        margin-top: 1.5rem;
        font-size: 0.5rem;
        width: 100%;
        color: #000;
        padding-left: 0.4rem;
        box-sizing: border-box;
      }

      .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
        padding-left: 0.3rem;

        li {
          margin-right: 0.4rem;
          list-style: none;

          .title {
            font-size: 0.4rem;
            font-weight: 500;
            color: #000;
            margin-bottom: 0.2rem;

            // 这个纯使用css边框写的图标，可以借鉴
            &:after {
              content: '';
              display: inline-block;
              height: 0.16rem;
              line-height: 0.16rem;
              width: 0.16rem;
              border-width: 0px 2px 2px 0px;
              border-color: #ffda44;
              border-style: solid;
              transform: rotate(45deg);
              position: relative;
              margin-left: 0.066rem;
              margin-bottom: 0.08rem;
            }
          }

          .tip {
            font-size: 0.3rem;
            color: #888;
          }
        }
      }
    }

    .content {
      display: flex;
      margin-top: 5rem;

      .type {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .image {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          // 使用flex时子项居中的方法
          align-items: center;
          vertical-align: middle;
          border-radius: 50%;
          background-color: #ffda44;

          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .explain {
          margin-top: 0.3rem;
          color: #333;
          font-size: 0.35rem;
        }
      }
    }

    .closebox {
      width: 3rem;
      height: 3rem;
      position: fixed;
      bottom: 0;
      left: 50%;
      margin-left: -1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .close {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
}
</style>
