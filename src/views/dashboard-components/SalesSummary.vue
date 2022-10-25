<template>
  <LineChart  />
</template>

<script>
import LineChart from "./LineChart.vue";
export default {
  name: "SalesSummary",
  components: {
    LineChart,
  },
//   data() {
//     return { graphLabels: null, graphData: null };
//   },
  methods: {
    // generate_graph_data() {
    //   const counts = {};
    //   this.all_dts.forEach((dt) => {
    //     const dt_str = dt.timestamp.substring(0, 10);
    //     counts[dt_str] = (counts[dt_str] || 0) + 1;
    //   });
    //   this.graphLabels = Object.keys(counts);
    //   this.graphData = Object.values(counts);
    //   console.log("final grap labels ", this.graphLabels);
    //   console.log("final grap datas ", this.graphData);
    // },
  },
  computed: {
    // graph_data() {
    //   console.log("Line chart computed parent", this.$store.getters.getGraphData);
    //   return this.$store.getters.getGraphData;
    // },
  },
  mounted() {
    // this.generate_graph_data();
  },
};
</script>
