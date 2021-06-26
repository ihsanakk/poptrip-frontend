import axios from "axios";


const BASE_URL = "http://localhost:8090/api/place/"

class PlaceService {

    getPlaceById(id){
        return axios.get(BASE_URL+'getPlaceById/'+id)
    }

    getAllPlaces() {
        return axios.get(BASE_URL + 'getAllPlaces')
    }

    getAllPlacesPageable(pageNo, pageSize) {
        return axios.get(BASE_URL + 'getAllPlacesPageable',{params:{pageNo:pageNo, pageSize:pageSize}})
    }

    getPlaceReviews(id) {
        return axios.get(BASE_URL + 'getPlaceReviews/' + id);
    }


    getPlaceReviewsPageable(id, pageNo, pageSize) {
        return axios.get(BASE_URL + 'getPlaceReviewsPageable/' + id,{params:{pageNo:pageNo, pageSize:pageSize}})
    }

    getAllHotels() {
        return axios.get(BASE_URL + 'getAllHotels')
    }

    getAllHotelsPageable(pageNo, pageSize) {
        return axios.get(BASE_URL + 'getAllHotelsPageable',{params:{pageNo:pageNo,pageSize:pageSize}})
    }

    getAllRestaurants() {
        return axios.get(BASE_URL + 'getAllRestaurants')
    }

    getAllRestaurantsPageable(pageNo,pageSize) {
        return axios.get(BASE_URL + 'getAllRestaurantsPageable', {params:{pageNo:pageNo, pageSize:pageSize}})
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