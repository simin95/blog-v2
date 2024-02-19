<template>
  <div class="container">
    <ul>
      <li v-for="(list,index) in nears" :key="index" class="list">
        <div class="header">
          <img :src="list.avatar">
          <div class="info">
            <p class="title">{{ list.name }}</p>
            <p class="time">{{ list.time }}</p>
          </div>
          <div class="price">
            <span>{{ list.price }}</span>
          </div>
        </div>
        <div class="imgbox">
          <img :src="list.img">
        </div>
        <div class="detail border-1px">
          <p class="desc">{{ list.desc }}</p>
        </div>
        <div class="footer">
          <div class="addr">{{ list.add }}</div>
          <div class="kind">{{ list.kind }}</div>
          <div class="star">{{ list.star }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Near',
  props: {
    nears: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.container
  padding .2rem
  .list
    width 100%
    display flex
    flex-direction column
    margin-bottom .4rem
    &:last-child
      margin-bottom 1.6rem
    .header
      height 1.02rem
      display flex
      img 
        height 1rem
        width 1rem
        border-radius 50%
      .info
        font-size .4rem
        flex 1
        margin-left .4rem
        display flex
        flex-direction column
        justify-content space-around
        font-weight 500
        .time
          background url('../../assets/images/arrow.png')
          background-repeat no-repeat
          background-position 0 87%
          background-size 14px 14px
          padding-left .44rem
          font-size .2rem
          color #999
      .price
        display flex
        justify-content center
        align-content center
        font-size .4rem
        color red
        font-weight 700
        width 1.5rem
        margin-right .3rem
    .imgbox
      margin-top .1rem
      img 
        width 6rem
        height 6rem
    .detail
      margin-top .2rem
      font-size .4rem
      font-weight 700
      // border-bottom solid 1px #f3f3f3
      border-1px(#f3f3f3)
      .desc
        margin-bottom .15rem
    .footer
      padding .2rem 0
      display flex
      font-size .3rem
      color #7dc5eb
      font-weight 700
      .kind
        flex 1
        margin-left .3rem
      .star
        color #888

</style>

