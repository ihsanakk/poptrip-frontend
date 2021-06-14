import axios from "axios";

const BASE_URL = "http://localhost:8090/api/review/";

class ReviewService{

    getLastReviews(){
        return axios.get(BASE_URL+'getLastReviews')
    }
}

export default new ReviewService();