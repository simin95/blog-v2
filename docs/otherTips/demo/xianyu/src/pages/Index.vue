<template>
  <div class="container">
    <Head style="margin-bottom:1.5rem"/>
    <IndexBanner/>
    <IndexGoods :iconList="iconList"/>
    <IndexTypes :typeList="typeList"/>
    <SmallBanner :smBanner="smBanner"/>
    <IndexNav :news="news" :nears="nears" :recoms="recoms"/>
    <NavButton/>
  </div>
</template>

<script>
import {
  getIconlist,
  getTypelist,
  getSmBanner,
  getIndexNav,
  ERR_OK,
} from '@/api/data';
import Head from '@/components/Head/Head';
import IndexBanner from '@/components/IndexBanner/IndexBanner';
import IndexGoods from '@/components/IndexGoods/INdexGoods';
import IndexTypes from '@/components/IndexTypes/IndexTypes';
import SmallBanner from '@/components/SmallBanner/SmallBanner';
import IndexNav from '@/components/IndexNav/IndexNav';
import NavButton from '@/components/NavButton/NavButton';

export default {
  name: 'Index',
  components: {
    Head,
    IndexBanner,
    IndexGoods,
    IndexTypes,
    SmallBanner,
    IndexNav,
    NavButton,
  },
  data() {
    return {
      iconList: [],
      typeList: [],
      smBanner: [],
      news: [],
      nears: [],
      recoms: [],
    };
  },
  created() {
    getIconlist().then(res => {
      if (res.status === ERR_OK) {
        this.iconList = res.data.iconlist;
      }
    });
    getTypelist().then(res => {
      if (res.status === ERR_OK) {
        this.typeList = res.data.typelist;
        console.log(this.typeList)
      }
    });
    getSmBanner().then(res => {
      if (res.status === ERR_OK) {
        this.smBanner = res.data.banner;
      }
    });
    getIndexNav().then(res => {
      if (res.status === ERR_OK) {
        this.news = res.data.news;
        this.nears = res.data.nears;
        this.recoms = res.data.recoms;
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
.container
  width 10rem
  height 100%
</style>
