<template>


  <div class="card">
    <router-link :to="{path: '/place/'+`${this.place.placeId}`}">
      <img alt="" class="img-card" src="https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg"/>
    </router-link>
    <div class="card-content">
      <h4 class="card-title">
        {{place.placeName}}
      </h4>
      <p class="">
        {{place.placeDescription}}
      </p>
    </div>
    <div class="card-read-more">
      <router-link to="/correspondingPlace/id" class="btn btn-outline-dark btn-block m-1">
        Read More
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "PlaceCard",
  data(){
    return{

    }
  },
  props:{
    // TODO placeType, placeName, placeDescription, placeImgURL, placeID(router, path etc.)
    place:{}
  },
  methods:{

  }
}
</script>

<style scoped>
.card {
  width: 22rem;
  max-width: 22rem;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: box-shadow .25s;

}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.img-card {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
  overflow: hidden;
  transition: transform .4s;
}

.img-card:hover{
  transform: scale(1.08);
}

.img-card img{
  width: 100%;
  height: 200px;
  object-fit:cover;
  transition: all .25s ease;
}
.card-content {
  padding:15px;
  text-align:left;
}
.card-title {
  margin-top:0;
  font-weight: 700;
  font-size: 1.65em;
}
.card-read-more{
  padding:15px;
}

</style>