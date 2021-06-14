<template>
  <div>
    <h3>HOTELS</h3>
    <hr>
    <div class="row">
      <div class="col-4" v-for="hotel in hotels" :key="hotel.id">
            <PlaceCard :place="hotel"></PlaceCard>
      </div>
    </div>



  </div>
</template>

<script>
import PlaceService from '@/services/place.service'
import PlaceCard from "@/components/shared/PlaceCard";
export default {
  name: "Hotels",
  components: {PlaceCard},
  data(){
    return{
      hotels:[]
    }
  },
  created() {
    PlaceService.getAllHotels()
    .then(res=>this.hotels=res.data)
    .catch(err=>console.log(err))
  }
}
</script>

<style scoped>

</style>