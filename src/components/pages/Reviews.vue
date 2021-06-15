<template>
  <div>

    <div class="last-reviews-wrapper">
      <div class="row">

        <div class="col-md-8 col-sm-8 col col-lg-8">
          <h3>Last Reviews</h3>
          <hr>
          <div v-for="review in getLastReviews" :key="review.id">
            <ReviewCard :review="review"></ReviewCard>
          </div>
        </div>

        <div class="col">
          <h2 class="d-flex justify-content-center">Most Rated</h2>
          <div class="section-right">

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import ReviewCard from "@/components/shared/ReviewCard";
export default {
  name: "Reviews",
  components: {ReviewCard},
  data(){
    return{
      lastReviews:[],
      mostRated:[]
    }
  },
  computed:{
    getLastReviews(){
      return this.$store.getters.getLastReviews
    }
  },
  created() {


  }
}
</script>

<style scoped>
.section-right{
  padding-left: 10px;
}
</style>