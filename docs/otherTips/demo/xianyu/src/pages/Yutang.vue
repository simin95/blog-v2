<template>
  <div class="container">
    <v-input/>
    <Banner/>

    <div class="interest">
      <div class="titlebox">
        <p class="title">你可能感兴趣的鱼塘</p>
      </div>
      <div ref="swiper" class="swiper-container">
        <div class="swiper-wrapper swiper">
          <div v-for="(item, index) in interests" :key="index" class="swiper-slide item" @click="toast">
            <img :src="item.img" class="img">
            <div class="name">{{ item.title }}</div>
            <div class="info">
              <p class="desc">{{ item.desc }}</p>
            </div>
            <button class="add">+ 加入</button>
          </div>
        </div>
      </div>
    </div>

    <div class="questions">
      <div class="titlebox">
        <p class="title">鱼塘问答</p>
        <span class="ask">去提问</span>
      </div>
      <div v-for="question in questions" :key="question.id" class="quesbox border-1px">
        <div class="title">{{ question.title }}</div>
        <div class="answer">
          <span class="da">答</span>
          <div class="text">{{ question.answer }}</div>
          <div v-if="question.img !== undefined" class="imgshow">
            <img :src="question.img" alt="">
          </div>
        </div>
        <div class="bottom">
          <div class="yutang">{{ question.yutang }}</div>
          <div class="toanswer">去回答</div>
        </div>
      </div>
    </div>

    <div class="interest">
      <div class="titlebox">
        <p class="title">土豪圈子都在玩</p>
      </div>
      <div ref="tuhao" class="swiper-container">
        <div class="swiper-wrapper swiper">
          <div v-for="(item, index) in tuhao" :key="index" class="swiper-slide item" @click="toast">
            <div v-if="item.img !== undefined" class="imgdisplay">
              <img :src="item.img" class="imgbig">
            </div>
            <div class="name">{{ item.title }}</div>
            <div class="info">
              <p class="desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>   

    <div class="interest">
      <div class="titlebox">
        <p class="title">厉害了我的中国风</p>
      </div>
      <div ref="china" class="swiper-container">
        <div class="swiper-wrapper swiper">
          <div v-for="(item, index) in china" :key="index" class="swiper-slide item" @click="toast">
            <div v-if="item.img !== undefined" class="imgdisplay">
              <img :src="item.img" class="imgbig">
            </div>
            <div class="name">{{ item.title }}</div>
            <div class="info">
              <p class="desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <div class="interest bottom2">
      <div class="titlebox">
        <p class="title">不可错过的鱼塘</p>
      </div>
      <div v-for="(item,index) in lists" :key="index" class="list border-1px">
        <img :src="item.img" class="image">
        <div class="info">
          <div class="head">
            <p class="tit">{{ item.title }}</p>
            <span class="level">{{ item.level }}</span>
          </div>
          <div class="text">
            <p class="desc">{{ item.desc }}</p>
          </div>
          <div class="hot">
            <span>人气{{ item.renqi }}·发布{{ item.fabu }}</span>
          </div>
        </div>
      </div>
    </div>

    <Nav-button/>

  </div>
</template>

<script>
import Banner from '@/components/Yutang/Banner';
import Input from '@/components/Yutang/input';
import NavButton from '@/components/NavButton/NavButton';

import {
  getInterests,
  getQuestions,
  getTuhao,
  getChina,
  getLists,
  ERR_OK,
} from '@/api/data';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  components: {
    Banner,
    'v-input': Input,
    NavButton,
  },
  data() {
    return {
      // 可能感兴趣的鱼塘
      interests: [],
      // 鱼塘问答
      questions: [],
      // 土豪圈子都在玩
      tuhao: [],
      // 厉害了我的中国风
      china: [],
      // 不可错过的鱼塘
      lists: [],
    };
  },
  created() {
    // 拿 感兴趣的鱼塘 数据
    getInterests()
      .then(res => {
        if (res.status === ERR_OK) {
          this.interests = res.data.interests;
          this.$nextTick(() => {
            let swiper = this.$refs.swiper;
            let mySwiper = new Swiper(swiper, {
              effect: 'coverflow',
              slidesPerView: 1,
              centeredSlides: true,
              observer: true,
              observeParents: true,
              autoplay: {
                delay: 1000,
              },
              loop: true,
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    getQuestions()
      .then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data)
          this.questions = res.data.questions;
        }
      })
      .catch(err => {
        console.log(err);
      });
    // 拿 土豪圈 的数据
    getTuhao()
      .then(res => {
        if (res.status === ERR_OK) {
          this.tuhao = res.data.tuhao;
          this.$nextTick(() => {
            let tuhao = this.$refs.tuhao;
            let mySwiper = new Swiper(tuhao, {
              effect: 'coverflow',
              slidesPerView: 3,
              centeredSlides: true,
              observer: true,
              observeParents: true,
              loop: true,
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    getChina()
      .then(res => {
        if (res.status === ERR_OK) {
          this.china = res.data.chinas;
          this.$nextTick(() => {
            let china = this.$refs.china;
            let mySwiper = new Swiper(china, {
              effect: 'coverflow',
              slidesPerView: 3,
              centeredSlides: true,
              observer: true,
              observeParents: true,
              loop: true,
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    getLists()
      .then(res => {
        if (res.status === ERR_OK) {
          this.lists = res.data.lists;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    toast() {
      this.$toast('没做呢 (///口///) ');
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';

.container
  background-color #f7f7f7
  .interest, .questions
    margin-top .5rem
    background-color #fff
    width 10rem
    padding .33rem .51rem
    box-sizing border-box
    .titlebox
      box-sizing border-box
      width 10rem
      margin-bottom .3rem
      display flex
      .title
        flex 1
        font-size .42rem
        font-weight 600
        &:before
          display inline-block
          content ''
          width .2rem
          height .41rem
          background-color #ffda44
          vertical-align top
          margin-right .11rem
    .list
      padding-top .4rem
      box-sizing border-box
      padding-bottom .3rem
      border-1px(#eee)
      display flex
      .image
        width 1.6rem
        height 1.6rem
      .info
        flex 1
        margin-left .3rem
        .head
          display flex
          margin-bottom .13rem
          .tit
            font-size .4rem
            font-weight 600
            flex 1
          .level
            font-size .3rem
            width 1.2rem
            height .66rem
            line-height .66rem
            background: url('../assets/images/标签.png') no-repeat;
            background-size cover
            background-position 110% 77%
            padding-left .3rem
            box-sizing border-box
            color #fff
        .text
          font-size .4rem
          font-weight 450
          margin-bottom .2rem
        .hot
          font-size .33rem
          color #666

    .swiper-container
      .item
        width 10rem
        height auto 
        padding .3rem .2rem .2rem .2rem
        box-sizing border-box
        margin-bottom .12rem
        text-align center
        .imgbig
          width 100%
          height 1.64rem
          margin-bottom .2rem
        .img
          width 1rem
          height 1rem
          margin-bottom .2rem
        .name
          color #000
          font-size .4rem
          font-weight 600
          margin-bottom .13rem
        .desc
          color #888
          font-size .4rem
          font-weight 600
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          margin-bottom .2rem
        .add
          width 100%
          height .6rem
          background-color #ffda44
          outline none 
          border none 
        
  .questions
    background-color #fff
    .ask
      font-size .45rem
      font-weight 700
      background url('../assets/images/提问.png') no-repeat
      background-size 0.5rem 0.5rem
      width 2rem
      height .53rem
      padding-left .6rem
      // box-sizing border-box
    .quesbox
      padding-top .4rem
      padding-bottom .4rem
      border-1px(#efefef)
      .title
        font-size .4rem
        font-weight 600
      .answer
        display flex
        font-size .35rem
        margin-top .2rem
        color #666
        .da
          background-color #ffda44
          display inline-block
          width .6rem
          height .6rem
          display flex
          justify-content center
          align-items center
          font-weight 600
          margin-right .3rem
          color #333
        .text
          vertical-align middle
          flex 1
          font-weight 500
        img
          width 1.3rem
          height 1.3rem
          margin-left .3rem
      .bottom
        display flex
        margin-top .2rem
        font-size .266rem
        .yutang
          flex 1
          color #888
        .toanswer
          color #7dc5eb
          font-weight 700

  .bottom2
    margin-bottom 2rem

</style>
