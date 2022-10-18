import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: false,
    LayoutType: "full-sidebar",
    SidebarColor: "white",
    navbarColor: "primary",
    logoColor: "white",

    // data
    dts: [],
  },
  mutations: {
    SET_LAYOUT_TYPE(state, payload) {
      state.LayoutType = payload;
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },

    // data
    SET_DTS(state, dts) {
      state.dts = dts;
    },
  },
  actions: {
    setLayoutType({ commit }, width) {
      commit("SET_LAYOUT_TYPE", width);
    },

    // data fetchDts fetchDts
    async fetchDTS({ commit }) {
      try {
        // const data = await axios.get(
        //   "https://swdapi.ddns.net:8090/data/ttntest"
        // );
        // commit("SET_DTS", data.data);
        axios
          .get("https://swdapi.ddns.net:8090/data/ttntest")
          .then((res) => commit("SET_DTS", res.data))
          .catch((err) => console.log("Error when connected to API ", err));
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    },
  },

  getters: {
    // data
    getDTS: (state) => state.dts,
  },
});
