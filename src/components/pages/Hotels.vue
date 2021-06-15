<template>
  <div>
    <h3>HOTELS</h3>
    <hr>
    <div class="row">
      <div class="col-4" v-for="hotel in getHotels" :key="hotel.id">
            <PlaceCard :place="hotel"></PlaceCard>
      </div>
    </div>



  </div>
</template>

<script>
import PlaceCard from "@/components/shared/PlaceCard";
export default {
  name: "Hotels",
  components: {PlaceCard},
  data(){
    return{
      hotels:[]
    }
  },
  computed:{
    getHotels(){
      return this.$store.getters.getAllHotels
    }
  }
}
</script>

<style scoped>

</style>