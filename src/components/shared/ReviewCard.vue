<template>
  <div class="card">
    <div class="card-header">
      <h4>{{review.placeName}}</h4>
    </div>
    <div class="card-horizontal">

      <div class="img-square-wrapper">
        <img class="img-square" :src="review.placeImageUrl" alt="Card image cap">
      </div>
      <div class="card-body">
        <h4 class="card-title">{{review.username}}</h4>
        <p class="card-text">{{review.reviewText}}</p>
      </div>
    </div>
    <div class="card-footer">
      <small v-if="review.createdAt" class="text-muted">{{review.createdAt}}</small>
      <br>
      <small v-if="review.updateAt" class="text-muted">{{this.calculateUpdatedTime(review.updateAt)}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props:{
    review:{}
  },
  methods:{
    calculateUpdatedTime(updateDate){
      let then = new Date(updateDate);
      let now = new Date();
      return Math.floor((now -then)/(1000*60*60)) + " minutes ago" //TODO calculation date differences if hours>0 etc..

    }
  }
}
</script>

<style scoped>

.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
.img-square{
  max-width: 300px;
}
.card{
  margin-bottom: 32px;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: box-shadow .25s;
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
</style>