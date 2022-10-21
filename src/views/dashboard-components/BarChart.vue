<script>
import { Bar } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Bar,
  data() {
    return {
      // graphLabels: null,
      // graphData: null,
      graphDataSet: null,
    };
  },
  computed: {
    graphData() {
      console.log("barchart dts state", this.$store.state.dts);
      return this.$store.getters.getGraphData;
    },
  },
  async mounted() {
    try {
      axios
        .get("https://swdapi.ddns.net:8090/data/ttntest")
        .then((res) => (this.graphDataSet = res.data))
        .catch((err) => console.log("Error when connected to API ", err));
    } catch (error) {
      // alert(error);
      console.log("Unable to connect to API ", error);
    }

    console.log("linechart ", this.graphDataSet);
    var { graphLabels, graphData } = this.graphDataSet;
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
