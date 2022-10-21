<script>
import { Bar } from "vue-chartjs";
// import axios from "axios";
export default {
  extends: Bar,
  data() {
    return {
      // graphLabels: null,
      // graphData: null,
      graphDataSet: null,
    };
  },

  mounted() {
    var graphDataSet = this.$store.getters.getGraphData;
    console.log("linechart ", graphDataSet);
    var { graphLabels, graphData } = graphDataSet;
    this.renderChart(
      {
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July"
        // ],
        labels: graphLabels,
        datasets: [
          {
            label: "Total data",
            backgroundColor: "#2962ff",
            // data: [2000, 40000, 20000, 39000, 10000, 40000, 69000],
            data: graphData,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barThickness: 7,
            },
          ],
        },
      }
    );
  },
};
</script>
