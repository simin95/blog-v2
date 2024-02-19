<template>
  <div class="container">
    <div class="wrapper border-1px" @click="toast">
      <div class="img-wrapper">
        <img src="../assets/images/通知.png" alt="通知" class="avatar">
      </div>
      <div class="text">
        <p class="name">通知</p>
        <div class="desc">
          <p class="detail">闲鱼奇葩说 </p>
          <span class="time">| 18小时前</span>
        </div>
      </div>
    </div>

    <NavButton/>
  </div>
</template>

<script>
import NavButton from '@/components/navbutton/NavButton'

export default {
  name: 'Message',
  components: {
    NavButton,
  },
  methods: {
    toast() {
      this.$toast('功能待完善 (//口//) ')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';

.container
  width 10rem
  background-color #fff
  .wrapper
    width 100%
    height 2.5rem
    display flex
    align-items center
    color #000
    padding 0 .4rem
    border-1px(#f7f7f7)
    .img-wrapper
      width 2rem
      height 2rem
      background-color pink 
      border-radius 50%
      display flex
      justify-content center
      align-items center
      img 
        width 1.4rem
    .text
      margin-left .3rem
      .name
        font-size .4rem
        font-weight 600
        margin-bottom .3rem
      .desc
        display flex
        font-size .3rem
        color #888
        .time
          margin-left .3rem
      

</style>
