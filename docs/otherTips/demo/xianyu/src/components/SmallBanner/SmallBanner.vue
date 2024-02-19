<template>
  <div ref="smallSwiperBanner" class="small-banner">
    <div class="swiper-wrapper swiper">
      <div 
        v-for="(item,index) in smBanner" 
        :key="index" 
        class="swiper-slide item">
        <img :src="item.src">
      </div>
    </div>
    <div class="swiper-pagination"/>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'SmallButton',
  props: {
    smBanner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    this.$nextTick(() => {
      let smallSwiperBanner = this.$refs.smallSwiperBanner;
      let mySwiper = new Swiper(smallSwiperBanner, {
        observer: true,
        observerParents: true,
        autoplay: {
          delay: 2000,
        },
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });
  },
};
</script>

<style lang="stylus" scoped>
.small-banner {
  height: 2.88rem;
  width: 10rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

.swiper-pagination {
  bottom: -0.2rem;
}
</style>
