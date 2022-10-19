<template>
  <div class="table-responsive">
    <div class="btn-grp ml-3">
      <b-button variant="secondary rounded-pill ">List</b-button>
      <b-button variant="secondary rounded-pill">Calendar</b-button>
      <b-button variant="secondary rounded-pill">User</b-button>
      <b-button variant="secondary rounded-pill" @click="toggleGraph"
        >Graph</b-button
      >
    </div>
    <div class="bg-light m-3">
      <h4 class="m-2">List Table</h4>
    </div>
    <table class="table v-middle text-nowrap bg-transparent">
      <thead>
        <tr class>
          <th class="border-0" @click="log_state">ID</th>
          <th class="border-0">Data</th>
          <th class="border-0" @click="countDate">Timestamp</th>
          <th class="border-0">Data2</th>
        </tr>
      </thead>
      <tbody v-for="dt in dts" :key="dt.id">
        <Table-row
          :id="dt.id"
          :data="dt.data"
          :timestamp="dt.timestamp"
          :data2="dt.data2"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import TableRow from "../table-elements/TableRow.vue";
// mport { mapState, mapActions } from "vuex";
export default {
  name: "SellingProduct",
  components: { TableRow },
  data() {
    return {
      // dts: [],
      start: null,
      end: -100,
    };
  },
  methods: {
    log_state() {
      console.log("all dts ", this.$store.state.dts);
      console.log("length ", this.length);
      console.log("pages ", this.pages);
      // console.log("count 8 july = ", await this.countDate());
    },
    countDate() {
      // var count_08 = 0;
      // for(let i = 0; i < this.dts.length; i++) {
      //   let dt_stamp = this.dts[i].timestamp;
      //   let dt_str = dt_stamp.substring(0,10);
      //   console.log(dt_str.length);
      //   if (dt_str == '2020-07-14') {
      //     count_08++;
      //   }
      // }
      // console.log(count_08);
      // var arr_08 = this.all_dts.filter(
      //   (dt) => dt.timestamp.substring(0, 10) == "2020-07-14"
      // ).length;
      // console.log(arr_08);

      // this.all_dts.forEach(
      //   (dt) =>
      //     (counts[dt.timestamp.substring(0, 10)] =
      //       (counts[dt.timestamp.substring(0, 10)] || 0) + 1)
      // );
      const counts = {};
      this.all_dts.forEach((dt) => {
        const dt_str = dt.timestamp.substring(0, 10);
        counts[dt_str] = (counts[dt_str] || 0) + 1;
      });
      console.log(counts);
    },
    toggleGraph() {
      // TODO ssss
    },
  },

  computed: {
    all_dts() {
      return this.$store.state.dts;
    },
    dts() {
      if (this.start == null) {
        return this.$store.state.dts.slice(this.end);
      }
      return this.$store.state.dts.slice(this.start, this.end);
    },
    pages() {
      return this.$store.state.dts.length / 100;
    },
    length() {
      return this.$store.state.dts.length;
    },
  },
};
</script>
<style></style>
