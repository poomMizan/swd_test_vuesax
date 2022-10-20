<template>
  <div class="table-responsive">
    <!-- <div class="btn-grp ml-3">
      <b-button variant="secondary rounded-pill ">List</b-button>
      <b-button variant="secondary rounded-pill">Calendar</b-button>
      <b-button variant="secondary rounded-pill">User</b-button>
      <b-button variant="secondary rounded-pill">Graph</b-button>
    </div> -->
    <div class="bg-light m-3">
      <h4 class="m-2">List Table</h4>
    </div>
    <!-- <table class="table v-middle text-nowrap bg-transparent">
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
    </table> -->
    <b-table
      id="data-table"
      :items="all_dts"
      per-page="100"
      :current-page="currentPage"
      small
      fixed
    >
      <template #cell(timestamp)="data">
        {{ easyDateTime(data.value) }}
      </template></b-table
    >
    <b-pagination
      v-model="currentPage"
      :total-rows="length"
      :per-page="perPage"
      aria-controls="data-table"
      align="center"
    ></b-pagination>
  </div>
</template>
<script>
// import TableRow from "../table-elements/TableRow.vue";
// mport { mapState, mapActions } from "vuex";
export default {
  name: "SellingProduct",
  // components: { TableRow },
  data() {
    return {
      // dts: [],
      // start: null,
      // end: -100,
      currentPage: 1,
      perPage: 100,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  methods: {
    log_state() {
      console.log("all dts ", this.$store.state.dts);
      console.log("length ", this.length);
      console.log("pages ", this.pages);
      // console.log("count 8 july = ", await this.countDate());
    },
    addZero(dt_number) {
      if (dt_number < 10) {
        return "0" + dt_number;
      }
      return dt_number;
    },
    easyDateTime(timestamp) {
      let dt = new Date(timestamp);
      return (
        this.addZero(dt.getDate()) +
        " " +
        this.monthNames[dt.getMonth()] +
        " " +
        dt.getFullYear() +
        " / " +
        this.addZero(dt.getHours()) +
        ":" +
        // TODO เติม 0 หน้าหน้วยวินาที
        this.addZero(dt.getMinutes()) +
        ":" +
        this.addZero(dt.getSeconds())
      );
    },
  },

  computed: {
    all_dts() {
      let dts = this.$store.state.dts;
      // dts.forEach((dt) => {
      //   dt.timeStamp = this.easyDateTime(new Date(dt.timeStamp));
      // });
      return dts;
    },
    // dts() {
    //   if (this.start == null) {
    //     return this.$store.state.dts.slice(this.end);
    //   }
    //   return this.$store.state.dts.slice(this.start, this.end);
    // },
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
