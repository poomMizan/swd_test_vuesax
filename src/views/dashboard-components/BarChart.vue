<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    var { graphLabels, graphData } = this.$store.getters.getGraphData;
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
            label: "amount of data",
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
