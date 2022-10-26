<script>
import { Bar } from "vue-chartjs";
// import axios from "axios";
export default {
  extends: Bar,
  data() {
    return {
      labels: [],
      total_data: [],
      // data_1: [],
      // data_2: [],
    };
  },
  props: ["chardLoaded"],
  methods: {
    fetchGraphData() {
      const graph_dts = this.$store.getters.getGraphData;

      graph_dts.forEach((dt) => {
        this.labels.push(dt.date);
        // this.data_1.push(dt.data);
        // this.data_2.push(dt.data_2);
        this.total_data.push(dt.total_data);
      });

      this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Total data",
            backgroundColor: "#2962ff",
            data: this.total_data,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barThickness: 14,
            },
          ],
        },
      }
    );
    },
  },
  watch: {
    chardLoaded() {
      // console.log("watched !!!");
      this.fetchGraphData();
    },
  },
};
</script>
