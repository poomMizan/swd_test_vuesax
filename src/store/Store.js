import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Sidebar_drawer: false,
    LayoutType: "full-sidebar",
    SidebarColor: "white",
    navbarColor: "secondary",
    logoColor: "secondary",

    // data
    dts: [],
    graphData: {},
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
    SET_GRAPH_DATA(state, graphData) {
      state.graphData = graphData;
    },
  },
  actions: {
    setLayoutType({ commit }, width) {
      commit("SET_LAYOUT_TYPE", width);
    },
    // data
    async fetchDTS({ commit }) {
      try {
        axios
          .get("https://swdapi.ddns.net:8090/data/ttntest")
          .then((res) => commit("SET_DTS", res.data))
          .catch((err) => console.log("Error when connected to API ", err));
      } catch (error) {
        // alert(error);
        console.log("Unable to connect to API ", error);
      }
    },
    fetchGraphData({ commit, state }) {
      // console.log("inside fetchGraphData start");
      const counts = {};
      state.dts.forEach((dt) => {
        const dt_str = dt.timestamp.substring(0, 10);
        counts[dt.toDateString()] = (counts[dt_str] || 0) + 1;
      });
      // console.log("inside fetchGraphData end");
      commit("SET_GRAPH_DATA", counts);
    },
  },
  getters: {
    // data
    getDTS: (state) => state.dts,

    // graph data
    getGraphData: (state) => {
      // console.log("inside getGraphData start");
      const counts = {};
      state.dts.forEach((dt) => {
        const dt_str = dt.timestamp.substring(0, 10);
        counts[dt_str] = (counts[dt_str] || 0) + 1;
      });
      // console.log("inside getGraphData end");

      var graphLabels = Object.keys(counts);
      var graphData = Object.values(counts);
      return { graphLabels, graphData };
    },

    getDataByDate(state) {
      const counts = {};
      state.dts.forEach((dt) => {
        const dt_str = dt.timestamp.substring(0, 10);
        counts[dt_str] = (counts[dt_str] || 0) + 1;
      });
      return counts;
    },
  },
}); 
export default store;
