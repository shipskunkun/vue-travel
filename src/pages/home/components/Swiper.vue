<template>
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data() {
    return {
        swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoPlay: true
          }
    }
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
</style>
