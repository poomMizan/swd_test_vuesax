<script>
import { Line } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
      graphDataSet: null,
      graphLabels: null,
      graphData: null,
    };
  },
  methods: {
    get_graph_data() {
      try {
        axios
          .get("https://swdapi.ddns.net:8090/data/ttntest")
          .then((res) => {
            var dts = res.data;
            console.log("dts = ", dts);
            var counts = {};
            dts.forEach((dt) => {
              const dt_str = dt.timestamp.substring(0, 10);
              counts[dt_str] = (counts[dt_str] || 0) + 1;
            });
            this.graphLabels = Object.keys(counts);
            this.graphData = Object.values(counts);
            console.log("graph_data obj", {
              label: this.graphLabels,
              data: this.graphData,
            });
          })
          .catch((err) => console.log("Error when connected to API ", err));
      } catch (error) {
        // alert(error);
        console.log("Unable to connect to API ", error);
      }
    },
  },
  computed: {
    graphDataComputed() {
      console.log("computed ", this.$store.getters.getGraphData);
      return this.$store.getters.getGraphData;
    },
  },
  async beforeMount() {
    await this.get_graph_data();
  },
  mounted() {
    // console.log("linechart ", this.getGraphData);
    // var graphDataSet = this.graphData;
    // console.log("linechart ", graphDataSet);
    // var { graphLabels, graphData } = graphDataSet;

    // console.log("linechart ", this.graphDataSet);
    // var { graphLabels, graphData } = this.graphDataSet;

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
    console.log("render graph label", this.graphLabels);
    console.log("render graph data", this.graphData);
    // vm.$forceUpdate();
    //or in file components
    // this.$forceUpdate();
    // this.get_graph_data();
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
        labels: this.graphLabels,
        datasets: [
          {
            label: "amount of data",
            borderColor: "#2962ff",
            pointBackgroundColor: "white",
            borderWidth: 2,
            backgroundColor: this.gradient,
            // data: [0, 5, 6, 8, 21, 9, 8],
            data: this.graphData,
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
    // this.get_graph_data();
  },
};
</script>
