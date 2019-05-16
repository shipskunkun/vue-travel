<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.src">
    </swiper-slide>
    <!-- <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div> <!--这个是拿来做按钮区的 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>  左右箭头 这里不需要-->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> 显示滚动条的 这不需要 -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
      return {
        swiperOption: {
          autoplay: {
            // delay: 3000,
            // disableOnInteraction: false,
            //stopOnLastSlide: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observeParents: true,
          observer: true
        },
        mylist: this.list
      }
  },
  watch: {
    list(newval, oldval) {
      this.mylist =  newval;
      console.log("执行watch");
    }
  },
  updated() {
    console.log('执行updated');

  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  mounted() {
    console.log('list=', this.list);
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 26.6vw
    bakcground-color #eee
    .swiper-img
      width 100%
    .swiper-pagination-bullet-active
      background-color: #fff
</style>
