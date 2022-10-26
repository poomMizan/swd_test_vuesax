<template>
  <div class="table-responsive">
    <div class="bg-light mt-5">
      <h3 class="font-weight-light">Calendar</h3>
    </div>
    <b-table
      id="data-table"
      :items="graph_data"
      per-page="100"
      :current-page="currentPage"
      fixed
      hover
      borderless
      :fields="fields"
      thead-class="h5"
    >
    </b-table>
  </div>
</template>
<script>
export default {
  name: "CalendarTable",
  data() {
    return {
      currentPage: 1,
      perPage: 100,
      fields: [
        { key: "date", sortable: true },
        { key: "total_data", sortable: true },
        { key: "data", sortable: true },
        { key: "data_2", sortable: true },
      ],
    };
  },
  computed: {
    graph_data() {
      // console.log(
      //   "calendar table get graphdata ",
      //   this.$store.getters.getGraphData
      // );
      return this.$store.getters.getGraphData;
    },
  },
};
</script>
<style></style>
