import axios from "axios";


const BASE_URL = "http://localhost:8090/api/place/"

class PlaceService {

    getPlaceById(id){
        return axios.get(BASE_URL+'getPlaceById/'+id)
    }

    getAllPlaces() {
        return axios.get(BASE_URL + 'getAllPlaces')
    }

    getAllPlacesPageable() {
        return axios.get(BASE_URL + 'getAllPlacesPageable')
    }

    getPlaceReviews(id) {
        return axios.get(BASE_URL + 'getPlaceReviews/' + id);
    }


    getPlaceReviewsPageable(id) {
        return axios.get(BASE_URL + 'getPlaceReviewsPageable/' + id)
    }

    getAllHotels() {
        return axios.get(BASE_URL + 'getAllHotels')
    }

    getAllHotelsPageable() {
        return axios.get(BASE_URL + 'getAllHotelsPageable')
    }

    getAllRestaurants() {
        return axios.get(BASE_URL + 'getAllRestaurants')
    }

    getAllRestaurantsPageable() {
        return axios.get(BASE_URL + 'getAllRestaurantsPageable')
    }

    discoverPlaces() {
        return axios.get(BASE_URL + 'discoverPlaces')
    }

    getMostLikedHotels() {
        return axios.get(BASE_URL + 'getMostLikedHotels')
    }

    getMostLikedRestaurants() {
        return axios.get(BASE_URL + 'getMostLikedRestaurants')
    }

    searchPlace(keyword){
        return axios.get(BASE_URL+'searchPlace',{params:{keyword:keyword}})
    }


}

export default new PlaceService();