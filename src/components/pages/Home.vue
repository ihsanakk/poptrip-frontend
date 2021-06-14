<template>

  <div>

    <div class="random-places-cards-wrapper row mb-4">

      <h3>Discover</h3>
      <hr>
      <div v-for="place in discoverPlaces" :key="place.placeId" class="col-md-8 col-sm-8 col-lg-4">
        <PlaceCard :place="place"></PlaceCard>
      </div>

    </div>

    <div class="search-section mb-5">
      <h3>Search</h3>
      <hr>
      <div class="input-group input-group-lg">
        <input v-model="searchingValue" type="text" class="search-input form-control" placeholder="Search" @keypress.enter="handleSearch">
        <div class="input-group-append"> <span class="input-group-text search-icon"><font-awesome-icon @click="handleSearch" class="fontawesome-search-icon" icon="search"/></span></div>
      </div>
    </div>

    <div class="most-liked-restaurants row mb-5">
      <h3>Most Liked Restaurants</h3>
      <hr>

      <div v-for="place in mostLikedRestaurants" :key="place.placeId" class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard :place="place"></PlaceCard>
      </div>

    </div>

    <div class="most-liked-hotels row mb-5">
      <h3>Most Liked Hotels</h3>
      <hr>

      <div v-for="place in mostLikedHotels" :key="place.placeId" class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard :place="place"></PlaceCard>
      </div>
    </div>





  </div>

</template>

<script>

import PlaceService from '@/services/place.service'

import PlaceCard from "@/components/shared/PlaceCard";
export default {
  name: "Home",
  components: {PlaceCard},
  data(){
    return{
      searchingValue:'',
    //  TODO mostLikedHotels[], mostLikedRestaurant[], discover[]

      discoverPlaces:[],
      mostLikedHotels:[],
      mostLikedRestaurants:[]


    }
  },
  created() {

    PlaceService.discoverPlaces()
    .then(res=> this.discoverPlaces = res.data)
    .catch(err=>console.log(err));

    PlaceService.getMostLikedHotels()
    .then(res =>  this.mostLikedHotels=res.data)
    .catch(err=>console.log(err));

    PlaceService.getMostLikedRestaurants()
    .then(res=> this.mostLikedRestaurants = res.data)
    .catch(err=>console.log(err))

  },
  methods:{
    handleSearch(){
      if(this.searchingValue===''){
      //
      }else{
        if(this.searchingValue.includes(' ')){
          let newSearchingValue='';
          newSearchingValue = this.searchingValue.replaceAll(" ", "-")
          this.$router.push('/searchResult/'+`${newSearchingValue}`);
        }else{
          this.$router.push('/searchResult/'+`${this.searchingValue}`);
        }

      }
    },
  // TODO Develop request services to fill place Arrays JSON Objects
  }
}
</script>

<style scoped>
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ced4da;
  outline: 0;
  box-shadow: 0 0 0 0 !important;
}

.form-control {
  border-right: 0 !important;
  border-left: 0 !important;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

}
.input-group-append {
  margin-left: -2px !important
}
.search-icon{
  border-top-right-radius: 32px !important;
  border-bottom-right-radius: 32px !important;
  background-color: #fff;
  padding: 15px;
}
.fontawesome-search-icon{
  cursor: pointer;
  opacity: 0.7;
}
.fontawesome-search-icon:hover{
  opacity: 1;
}
</style>