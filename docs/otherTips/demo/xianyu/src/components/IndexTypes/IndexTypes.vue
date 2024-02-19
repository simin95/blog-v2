<template>
  <div class="typeWrapper">
    <ul>
      <li v-for="(item,index) in typeList" :key="index" class="item" @click="handleClick">
        <div class="left">
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.desc }}</p>
        </div>
        <img :src="item.src" class="right">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexTypes',
  props: {
    typeList: {
      type: Array,
      default() {
        return [2, 3, 3];
      },
    },
  },
  methods: {
    handleClick() {
      this.$toast('你点了没用的');
    },
  },
};
</script>

<style lang="stylus" scoped>
// 这段css写的不错，值得借鉴
.typeWrapper
  ul
    display flex
    flex-wrap wrap
    justify-content space-between
    .item
      width 50%
      box-sizing border-box
      padding .3rem
      display flex
      .left
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        .title
          font-size .4rem
          font-weight 600
          color #000
          margin-bottom .3rem
        .desc
          font-size .3rem
      .right
        width 1.3rem
        height 1.3rem
</style>
