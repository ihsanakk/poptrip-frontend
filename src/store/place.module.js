
import PlaceService from '@/services/place.service'
import ReviewService from '@/services/review.service'

export const place = {

    state:{
        hotels:[],
        restaurants:[],
        mostLikedHotels:[],
        mostLikedRestaurants:[],
        discoverPlaces:[],
        lastReviews:[],

    },
    mutations:{
        initHotels(state, hotels){
            state.hotels = hotels;
        },
        initRestaurants(state,restaurants){
            state.restaurants = restaurants;
        },
        initMostLikedRestaurants(state,mostLikedRestaurants){
            state.mostLikedRestaurants = mostLikedRestaurants;
        },
        initMostLikedHotels(state,mostLikedHotels){
            state.mostLikedHotels = mostLikedHotels;
        },
        initDiscoverPlaces(state,discoverPlaces){
            state.discoverPlaces = discoverPlaces;
        },
        initLastReviews(state,lastReviews){
            state.lastReviews = lastReviews;
        }
    },
    actions:{
        getHotels(context){
            PlaceService.getAllHotels()
                .then(res=>{
                    context.commit('initHotels',res.data)
                })
        },
        getRestaurants(context){
            PlaceService.getAllRestaurants()
                .then(res=>{
                    context.commit('initRestaurants',res.data)
                })
        },
        getMostLikedRestaurants(context){
            PlaceService.getMostLikedRestaurants()
                .then(res=>{
                    context.commit('initMostLikedRestaurants',res.data)
                })
        },
        getMostLikedHotels(context){
            PlaceService.getMostLikedHotels()
                .then(res=>{
                    context.commit('initMostLikedHotels',res.data)
                })
        },
        getDiscoverPlaces(context){
            PlaceService.discoverPlaces()
                .then(res=>{
                    context.commit('initDiscoverPlaces',res.data)
                })
        },
        getLastReviews(context){
            ReviewService.getLastReviews()
                .then(res=>{
                    context.commit('initLastReviews',res.data)
                })
        }

    },
    getters:{
        getAllHotels(state){
            return state.hotels;
        },
        getAllRestaurants(state){
          return state.restaurants
        },
        getMostLikedRestaurants(state) {
            return state.mostLikedRestaurants
        },
        getMostLikedHotels(state) {
            return state.mostLikedHotels
        },
        getDiscoverPlaces(state) {
            return state.discoverPlaces
        },
        getLastReviews(state) {
            return state.lastReviews
        }
    }


}