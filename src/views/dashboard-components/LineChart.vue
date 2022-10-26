<script>
import { Line } from "vue-chartjs";
// import axios from "axios";
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
      labels: [],
      total_data: [],
      data_1: [],
      data_2: [],
    };
  },
  props: ["chardLoaded"],
  methods: {
    fetchGraphData() {
      // console.log(
      //   "method after watch get-graph-data ",
      //   this.$store.getters.getGraphData
      // );

      const graph_dts = this.$store.getters.getGraphData;

      graph_dts.forEach((dt) => {
        this.labels.push(dt.date);
        this.data_1.push(dt.data);
        this.data_2.push(dt.data_2);
        this.total_data.push(dt.total_data);
      });

      // this._data._chart.destroy();
      this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      // this.gradient2 = this.$refs.canvas
      //   .getContext("2d")
      //   .createLinearGradient(0, 0, 0, 450);
      this.gradient3 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

      this.gradient.addColorStop(0, "rgba(41, 98, 255, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(41, 98, 255, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.gradient3.addColorStop(0, "rgba(252, 48, 3, 0.9)");
      this.gradient3.addColorStop(0.5, "rgba(252, 48, 3, 0.25)");
      this.gradient3.addColorStop(1, "rgba(0, 231, 255, 0)");
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            // {
            //   label: "data",
            //   borderColor: "##fc6b03",
            //   pointBackgroundColor: "white",
            //   borderWidth: 2,
            //   backgroundColor: this.gradient3,
            //   data: this.total_data,
            // },
            {
              label: "data",
              borderColor: "#2962ff",
              pointBackgroundColor: "white",
              borderWidth: 2,
              backgroundColor: this.gradient,
              data: this.data_1,
            },
            {
              label: "Data 2",
              borderColor: "#fc6b03",
              pointBackgroundColor: "white",
              borderWidth: 2,
              backgroundColor: this.gradient3,
              data: this.data_2,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
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
