import Vue from 'vue'
import Vuex from 'vuex'

import {place} from './place.module'
import {auth} from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        place,
        auth
    }
})

