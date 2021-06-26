
import axios from "axios";

const BASE_URL = "http://localhost:8090/api/auth/";




class AuthService{


    login(user) {
        return axios
            .post(BASE_URL + 'login', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.jwt) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(BASE_URL + 'register', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();