<template>
  <div class="container">
    <!-- <div>{{news}}</div>
    <div>{{nears}}</div>
    <div>{{recoms}}</div> -->
    <div class="content">
      <router-link to="/new" tag="div" class="tab-item">
        <span>新鲜的</span>
      </router-link>
      <router-link to="/near" tag="div" class="tab-item">
        <span>附近的</span>
      </router-link>
    </div>
    <router-view :news="news" :nears="nears" :recoms="recoms"/>
  </div>
</template>

<script>
export default {
  name: 'IndexNav',
  props: {
    news: {
      type: Array,
      default() {
        return [];
      },
    },
    nears: {
      type: Array,
      default() {
        return [];
      },
    },
    recoms: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.router-link-active
  color #ffda44
  font-weight 700
  border-bottom 4px solid #ffda44
a
  text-decoration none 
.container
  .content
    display flex
    .tab-item
      flex 1
      text-align center
      padding .3rem 0
      font-size .4rem
</style>
