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
//   computed: {
//     graphData() {
//       return this.$store.getters.getGraphData;
//     },
//   },
};
</script>
