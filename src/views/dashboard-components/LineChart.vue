<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    var { graphLabels, graphData } = this.$store.getters.getGraphData;

    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(41, 98, 255, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(41, 98, 255, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    console.log("render graph label", graphLabels);
    console.log("render graph data", graphData);

    this.renderChart(
      {
        // labels: [
        //   "8 July 20",
        //   "9 July 20",
        //   "10 July 20",
        //   "11 July 20",
        //   "12 July 20",
        //   "13 July 20",
        //   "14 July 20",
        // ],
        labels: graphLabels,
        datasets: [
          {
            label: "amount of data",
            borderColor: "#2962ff",
            pointBackgroundColor: "white",
            borderWidth: 2,
            backgroundColor: this.gradient,
            // data: [0, 5, 6, 8, 21, 9, 8],
            data: graphData,
          },
          // {
          //   label: "Data2",
          //   borderColor: "#05CBE1",
          //   pointBackgroundColor: "white",
          //   borderWidth: 2,
          //   backgroundColor: this.gradient2,
          //   data: [0, 3, 1, 2, 8, 1, 5],
          // },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
