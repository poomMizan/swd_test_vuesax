<template>
  <div class="table-responsive">
    <div class="bg-light mt-5">
      <h3 class="font-weight-light">List Table</h3>
    </div>

    <b-table
      id="data-table"
      :items="all_dts"
      per-page="100"
      :current-page="currentPage"
      fixed
      borderless
      hover
      thead-class="h5"
    >
      <template #cell(id)="data">
        {{ "#" + data.value }}
      </template>
      <template #cell(timestamp)="data">
        {{ easyDateTime(data.value) }}
      </template></b-table
    >
    <b-pagination
      class="mt-3"
      v-model="currentPage"
      :total-rows="length"
      :per-page="perPage"
      aria-controls="data-table"
      align="center"
      size="lg"
    ></b-pagination>
  </div>
</template>
<script>
export default {
  name: "ListTable",
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
      // fields: [{ key: "data2", label: "data_2" }],
    };
  },
  methods: {
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
        this.addZero(dt.getMinutes()) +
        ":" +
        this.addZero(dt.getSeconds())
      );
    },
  },

  computed: {
    all_dts() {
      // console.log('all dts');
      return this.$store.state.dts;
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
