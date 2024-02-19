<template>
  <div ref="swiper" class="swiper-container">
    <div class="swiper-wrapper swiper">
      <div v-for="(item,index) in banner" :key="index" class="swiper-slide item">
        <img :src="item.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"/>
  </div>
</template>

<script>
import { getBanner, ERR_OK } from '@/api/data';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'Banner',
  data() {
    return {
      banner: [],
    };
  },
  created() {
    getBanner().then(res => {
      if (res.status === ERR_OK) {
        this.banner = res.data.banner;
        console.log(res)
        let swiper = this.$refs.swiper;
        this.$nextTick(() => {
          let mySwiper = new Swiper(swiper, {
            observer: true,
            observeParents: true,
            autoplay: {
              delay: 1000,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        });
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
.swiper
  height 3.2rem
  img 
    width 100%
    height 100%
</style>
