<template>
  <div class="table-responsive">
    <div class="bg-light m-3 mt-5">
      <h4 class="m-2 font-weight-light">Calendar</h4>
    </div>
    <b-table
      id="data-table"
      :items="dt_data"
      per-page="100"
      :fields="fields"
      :current-page="currentPage"
      fixed
      hover
      borderless
    >
      <template #cell(key)="data">
        {{ easyDateTime(data.value) }}
      </template>
    </b-table>
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="length"
      :per-page="perPage"
      aria-controls="data-table"
      align="center"
    ></b-pagination> -->
  </div>
</template>
<script>
export default {
  name: "SellingProduct2",
  data() {
    return {
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
      fields: [
        { key: "key", label: "Date" },
        { key: "value", label: "Total Data" },
      ],
    };
  },
  methods: {
    test() {},
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
        dt.getFullYear()
      );
    },
  },

  computed: {
    dt_data() {
      let dt = this.$store.getters.getDataByDate;
      console.log("dt", dt);
      var result = [];
      for (const [key, value] of Object.entries(dt)) {
        result.push({ key, value });
      }
      return result;
    },
  },
};
</script>
<style></style>
