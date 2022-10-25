import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Sidebar_drawer: false,
    LayoutType: "full-sidebar",
    SidebarColor: "white",
    navbarColor: "swd-grey-bar",
    logoColor: "swd-grey-bar",

    // data
    dts: [],
    graphData: [],
    chartLoaded: Boolean,
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
    // SET_GRAPH_DATA(state, graphData) {
    //   console.log("SET_GRAPH_DATA");
    //   state.graphData = graphData;
    // },
    SET_CHART_LOADED(state, chartLoaded) {
      // console.log("SET_CHART_LOADED");
      state.chartLoaded = chartLoaded;
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
          .then((res) => {
            const dts = res.data;
            commit("SET_DTS", dts);
            commit("SET_CHART_LOADED", true);
          })
          .catch((err) => console.log("Error when connected to API : ", err));
      } catch (error) {
        // alert(error);
        console.log("Unable to connect to API : ", error);
      }
    },
    // fetchGraphData({ commit, state }) {
    //   const dts = state.dts;
    //   const counts = {};

    //   dts.forEach((dt) => {
    //     const dt_str = dt.timestamp.substring(0, 10);
    //     counts[dt_str] = (counts[dt_str] || 0) + 1;
    //   });

    //   const dates = Object.keys(counts);
    //   const graphData = Object.values(counts);
    //   const calendar_data = [];

    //   dates.forEach((date, index) => {
    //     let data = 0;
    //     let data_2 = 0;
    //     dts.forEach((dt) => {
    //       if (date == dt.timestamp.substring(0, 10) && dt.data != null) {
    //         data++;
    //       }
    //       if (date == dt.timestamp.substring(0, 10) && dt.data2 != null) {
    //         data_2++;
    //       }
    //     });
    //     calendar_data.push({
    //       date,
    //       total_data: graphData[index],
    //       data,
    //       data_2,
    //     });
    //   });
    //   console.log("action commit graph data ", calendar_data);
    //   commit("SET_GRAPH_DATA", calendar_data);
    // },
  },
  getters: {
    // graph data
    getChartLoaded(state) {
      return state.chartLoaded;
    },
    getGraphData(state) {
      const dts = state.dts;
      const counts = {};

      dts.forEach((dt) => {
        const dt_str = dt.timestamp.substring(0, 10);
        counts[dt_str] = (counts[dt_str] || 0) + 1;
      });

      const dates = Object.keys(counts);
      const graphData = Object.values(counts);
      const calendar_data = [];

      dates.forEach((date, index) => {
        let data = 0;
        let data_2 = 0;

        dts.forEach((dt) => {
          if (date == dt.timestamp.substring(0, 10) && dt.data != null) {
            data++;
          }
          if (date == dt.timestamp.substring(0, 10) && dt.data2 != null) {
            data_2++;
          }
        });

        calendar_data.push({
          date,
          total_data: graphData[index],
          data,
          data_2,
        });
      });
      // console.log("getter graph data ", calendar_data);
      return calendar_data;
    },

    // getDataByDate(state) {
    //   const counts = {};
    //   state.dts.forEach((dt) => {
    //     const dt_str = dt.timestamp.substring(0, 10);
    //     counts[dt_str] = (counts[dt_str] || 0) + 1;
    //   });
    //   return counts;
    // },
  },
});
export default store;
