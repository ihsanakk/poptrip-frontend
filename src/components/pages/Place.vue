<script>
import PlaceService from '@/services/place.service'

export default {
  name: "Place",
  components: {},
  data() {
    return {
      place: {},
      placeReviews: []
    }
  },
  methods: {
    getCurrentPlaceId() {
      return this.$route.params.id;
    },
    convertDateFormat(placeCreatedDate){

      let createdDate =  new Date(placeCreatedDate);
      let dateFormat = createdDate.getUTCDay() +'/'+ createdDate.getMonth() +'/'+ createdDate.getFullYear();
      return dateFormat

    }

  },
  watch: {},
  created() {
    PlaceService.getPlaceById(this.getCurrentPlaceId())
        .then(res => this.place = res.data)
        .catch(err => console.log(err));


    PlaceService.getPlaceReviews(this.getCurrentPlaceId())
        .then(res => this.placeReviews = res.data)
        .catch(err => console.log(err))
  },
  mounted() {


  }
}
</script>

<template>
  <div class="place-more-wrapper">
    <div class="place-title">
      <h3 style="font-size: 3rem">{{ place.placeTitle }}</h3>
    </div>
    <div class="place-image d-flex justify-content-center">
      <img :src="this.place.imageUrl" alt="">
    </div>
    <div class="reviews-likes d-flex justify-content-center mb-3" style="font-size: 3rem">
      <span style="cursor: pointer" class="icon-thumbs-up"><font-awesome-icon icon="thumbs-up"/></span>{{ place.likes }}
      <span style="cursor: pointer" class="icon-thumbs-up"><font-awesome-icon icon="comment"/></span>{{ place.numberOfReviews }}
    </div>
    <div class="place-about">
      <p>{{ place.placeDescription }}

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consectetur dolorem doloribus ducimus, et eveniet exercitationem ipsam molestiae natus nihil nisi optio, quas quia rerum sequi tenetur vitae voluptate.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores eligendi impedit perspiciatis ratione reiciendis saepe sapiente sit! Accusamus debitis necessitatibus nesciunt perspiciatis, quaerat quo. Doloribus dolorum explicabo fugiat incidunt!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur blanditiis est fugit labore nesciunt odio sunt, totam ullam ut vitae voluptatibus? Dolorum eaque error iste, officiis qui quisquam sunt?

      </p>
      <p>{{ convertDateFormat(place.createdAt) }}</p>

      <div class="reviews-wrapper">

        <div v-if="placeReviews.length===0" class="text-muted">This place has no reviews yet</div>

          <div class="row my-5 border-bottom" v-for="review in placeReviews" :key="review.id">
            <span class="col-8">{{ review.reviewText }}</span>
            <span class="col-4">{{ review.username }}</span>
          </div>
      </div>



    </div>


  </div>
</template>
<style scoped>

.place-more-wrapper {
  padding: 1rem;

}

.icon-thumbs-up {
  margin-left: 2rem;
  margin-right: 10px;
}

.place-title {
  padding: 10px;
  display: grid;
  justify-content: center;
}

.place-image {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.place-about{
  font-size: 40px;
}
.reviews-wrapper {
  font-size: 30px;
  margin-top: 10px;
}


</style>