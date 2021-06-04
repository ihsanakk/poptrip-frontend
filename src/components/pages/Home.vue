<template>

  <div>

    <div class="random-places-cards-wrapper row mb-4">

      <h3>Discover</h3>
      <hr>
      <div v-for="place in places" :key="place.placeId" class="col-md-4 col-sm-4 col-lg-4">
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

      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
    </div>

    <div class="most-liked-hotels row mb-5">
      <h3>Most Liked Hotels</h3>
      <hr>

      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
      <div class="col-md-4 col-sm-4 col-lg-4">
        <PlaceCard></PlaceCard>

      </div>
    </div>





  </div>

</template>

<script>
import PlaceCard from "@/components/shared/PlaceCard";
export default {
  name: "Home",
  components: {PlaceCard},
  data(){
    return{
      searchingValue:'',
    //  TODO mostLikedHotels[], mostLikedRestaurant[], discover[]

      places:[
        {
          placeId:129,
          placeName:"Concord",
          placeDescription: "The most beautiful place all around world you can find"
        },
        {
          placeId:361,
          placeName:"Quad",
          placeDescription: "The most beautiful place all around world you can find"
        },
        {
          placeId:416,
          placeName:"Franchise",
          placeDescription: "The most beautiful place all around world you can find"
        },

      ]

    }
  },
  methods:{
    handleSearch(){
      if(this.searchingValue===''){
      //
      }else{
        this.$router.push('/searchResult/'+`${this.searchingValue}`);
      }
    }
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