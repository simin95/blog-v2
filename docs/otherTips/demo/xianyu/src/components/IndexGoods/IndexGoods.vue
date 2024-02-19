<template>
  <div class="goodsbox">
    <ul>
      <li 
        v-for="(item, index) in iconList" 
        :key="index" 
        class="item"
        @click="handleSelect">
        <img :src="item.src" alt="图标" class="image">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexGoods',
  props: {
    iconList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleSelect() {
      this.$toast('你点了也没用哈哈哈');
    },
  },
};
</script>

<style lang="stylus" scoped>
// @import '../../commom/stylus'

.goodsbox
  height 2.67rem
  border-bottom .4rem solid #f3f3f3
  ul
    display flex
    .item
      list-style none 
      flex 1
      display flex
      flex-flow column nowrap
      align-items center
      .image
        width 1rem
        height 1rem
        margin .1rem 0 
      .title
        font-size .4rem
        color #000
        font-weight 400
        padding .2rem 0
      .desc
        font-size .3rem
        color #666
</style>
