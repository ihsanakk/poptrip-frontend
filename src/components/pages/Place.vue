<template>
  <div class="place-more-wrapper">
    <div class="place-title">
      <h3>{{place.placeTitle}} <span class="icon-thumbs-up"><font-awesome-icon icon="thumbs-up"/></span>{{place.likes}}
        <span class="icon-thumbs-up"><font-awesome-icon icon="comment"/></span>{{place.numberOfReviews}}</h3>
    </div>
    <div class="place-image d-flex justify-content-center">
      <img :src="this.place.imageUrl" alt="">
    </div>
    <div class="place-about">
        <p>{{place.placeDescription}}</p>
        <p>{{place.createdAt}}</p>
      <button class="btn btn-outline-dark" @click="getPlaceReviews(place.id)">Reviews</button>
      <div class="reviews-wrapper">
        <ul class="list-group">
          <li class="list-group-item row" v-for="review in placeReviews" :key="review.id">
            <span class="col-8">{{review.reviewText}}</span>
            <span class="col-4">{{review.username}}</span>
          </li>
        </ul>
      </div>
    </div>



  </div>
</template>

<script>
import PlaceService from '@/services/place.service'

export default {
  name: "Place",
  components: {},
  data(){
    return{
      place:{},
      placeReviews:[]
    }
  },
  methods:{
    getCurrentPlaceId(){
      return this.$route.params.id;
    },
    getPlaceReviews(placeId){
      PlaceService.getPlaceReviews(placeId)
      .then(res=> this.placeReviews = res.data)
      .catch(err=>console.log(err))
    }
  },
  watch:{

  },
  created() {
    PlaceService.getPlaceById(this.getCurrentPlaceId())
        .then(res=> this.place = res.data)
        .catch(err => console.log(err))
  },
  mounted() {



  }
}
</script>

<style scoped>

.place-more-wrapper{
  padding: 1rem;

}
.icon-thumbs-up{
  margin-left: 2rem;
  margin-right: 10px;
}
.place-title{
  padding: 10px;
  display: grid;
  justify-content: center;
}

.place-image{
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.reviews-wrapper{
  margin-top: 10px;
}


</style>