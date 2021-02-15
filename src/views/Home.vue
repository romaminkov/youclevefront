<template>
  <div class="home">
    <h3>Катеории</h3>    
    <!-- <div class="slider">
        <div class="cat">
            <a href="#" class="slide" v-for="categ in listCategory" :key="categ.id">
                <div class="slider-img">
                    <img src="#" alt="IT">
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
            </a> 
        </div>    
    </div> -->
    <Slider :listCategory="listCategory"/>
    <h3>Зрители рекомендуют</h3>
    <div class="recomended">
        <div class="rec-list">
            <a href="#" class="course-item">
                <img class="course-img" src="img/p3.jpg" alt="course-img">
                <span class="course-title">Python для чайников</span>
                <div class="course-info">
                    <div class="col-time">
                        <div class="video-info">
                            <span class="col-video">10</span>
                            <span class="video">Видеоуроков(а)</span>
                        </div>
                        <div class="time-info">
                            <span class="sum-time">Общее время курса</span>
                            <span class="time">4:27:13</span>
                        </div>
                    </div>
                    <div class="raiting">
                        <span class="star fa fa-star"></span>
                        <span class="sr-raiting">4.8</span>
                    </div>
                </div>
                <div class="course-info">
                    <div class="author">
                        <button href="#" class="author-name">Академия ШАГ</button>
                    </div>
                    <div class="item-recomended">
                        <span class="col-like fa fa-thumbs-o-up"></span>
                        <span class="col-rec">12485</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider'
// import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

export default 
{
	name: 'Home',
    data(){
        return {
            listCategory:[]
        }
    },
	components: 
	{
        Slider
	},
	created()
	{
		this.loadListCategory()
	},
	methods:
	{
		async loadListCategory()
		{
			this.listCategory = await fetch(
				`${this.$store.getters.getServerUrl}/courses/category`
			).then(response => response.json())
			console.log(this.listCategory)
		}
	}

}
</script>

