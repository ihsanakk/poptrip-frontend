<template>
  <div>
    <h3>RESTAURANTS</h3>
    <hr>
    <div class="row">
      <div class="col-4" v-for="restaurant in restaurants" :key="restaurant.id">
        <PlaceCard :place="restaurant"></PlaceCard>
      </div>
    </div>



  </div>
</template>

<script>
import PlaceCard from "@/components/shared/PlaceCard";
import PlaceService from '@/services/place.service'
export default {
  name: "Restaurants",
  components: {PlaceCard},
  data(){
    return{
      restaurants:[]
    }
  },
  created() {
    PlaceService.getAllRestaurants()
    .then(res=>this.restaurants=res.data)
    .catch(err=>console.log(err))
  }
}
</script>

<style scoped>

</style>