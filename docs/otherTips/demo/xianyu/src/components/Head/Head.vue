<template>
  <div class="header">
    <div class="scanner">
      <img src="../../assets/images/二维码.png" alt="扫码图">
      <input type="file" name="file" capture="camera">
    </div>
    <router-link to="/search" class="search">
      <input type="search" placeholder="搜索鱼塘/宝贝/用户">
    </router-link>
    <div class="category" @click="handleCategory">
      <img src="../../assets/images/分类.png" alt="分类">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCategory() {
      this.$router.push({path: '/category'})
    }
  }
};            
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    top 0
    display flex
    justify-content space-around
    align-items center
    height 1.6rem
    width 10rem
    z-index 200
    background-color #ffda44
    .scanner
      display flex
      align-items center
      box-sizing border-box
      width .6rem
      height .6rem
      margin-left .3rem
      margin-right .3rem
      img 
        width .6rem
        height .6rem
      input
        display none 
    .search
      flex 1
      display flex
      align-items center
      background-color #fff
      border-radius .11rem
      input
        height 1rem
        padding-left 1rem
        background-image url('../../assets/images/search.png') no-repeat .26rem 50%
        background-size .6rem .6rem
        border-radius .11rem
        outline none
        border none 
    .category
      width .6rem
      height .6rem
      margin 0 .3rem
      display flex
      align-items center
      img 
        width .6rem
        heigh .6rem
</style>
