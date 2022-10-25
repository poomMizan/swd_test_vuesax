<template>
  <BarChart />
</template>

<script>
import BarChart from "./BarChart.vue";
export default {
  name: "SalesIncome",
  data() {
    return {
      //   graphData: null,
    };
  },
  components: {
    BarChart,
  },
  computed: {
    // graph_data() {
    //   console.log("bar chart computed parent", this.$store.getters.getGraphData);
    //   return this.$store.getters.getGraphData;
    // },
  },
};
</script>
