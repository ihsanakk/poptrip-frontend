<script>
import PlaceCard from "@/components/shared/PlaceCard";
export default {
  name: "Restaurants",
  components: {PlaceCard},
  data(){
    return{
      restaurants:[]
    }
  },
  computed:{
    getRestaurants() {
      return this.$store.getters.getAllRestaurants;
    }
  },
  created() {

  }
}
</script>
<template>
  <div>
    <h3>RESTAURANTS</h3>
    <hr>
    <div class="row">
      <div class="col-4" v-for="restaurant in getRestaurants" :key="restaurant.id">
        <PlaceCard :place="restaurant"></PlaceCard>
      </div>
    </div>



  </div>
</template>
<style scoped>

</style>