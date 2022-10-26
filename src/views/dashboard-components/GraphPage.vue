<template>
  <b-row>
    <b-col cols="12" lg="12">
      <b-card class="mb-4">
        <h4 class="card-title">Bar Chart Data by date</h4>
        <BarChart :chardLoaded="chardLoaded" />
      </b-card>
    </b-col>
    <b-col cols="12" lg="12">
      <b-card class="mb-4">
        <h4 class="card-title">Line Chart Data by date</h4>
        <div><LineChart :chardLoaded="chardLoaded" /></div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
// import { mapGetters } from "vuex";
export default {
  name: "GraphPage",
  components: {
    BarChart,
    LineChart,
  },
  computed: {
    chardLoaded() {
      console.log(
        "graph-page getChartLoaded ",
        this.$store.getters.getChartLoaded
      );
      return this.$store.getters.getChartLoaded;
    },
  },
};
</script>
