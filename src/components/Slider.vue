<template>
 <div class="for-swipe">
  <swiper class="swiper for-swipe" :options="swiperOption">
    <swiper-slide class="slide" v-for="categ in listCategory" :key="categ.id">
          <div class="slider-img">
              <img :src="`${baseUrl}${categ.photo}`" alt="IT">
          </div>
          <div class="slider-title">
              <span>{{categ.title}}</span>
          </div>
          <div class="slider-disc">
              <span>{{categ.description}}</span>
          </div>
          <div class="slider-btn">                   
              <span class="slider-btn-a">Открыть</span>    
          </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    props: {
      listCategory: Array
    },
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
      baseUrl(){
        return this.$store.getters.getServerUrl
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          // centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }       
        }
      }
    }
  }
</script>

<style scoped>
  .for-swipe{
    height: 530px;
    margin:0 30px;
  }
</style>