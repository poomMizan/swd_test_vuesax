<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">ID</th>
          <th class="border-0">Data</th>
          <th class="border-0">Timestamp</th>
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
    };
  },
  methods: {
    show_state() {
      console.log(this.$store.state.dts);
    }
  },
  computed: {
    dts() {
      return this.$store.state.dts.slice(0,10);
    }
  },
};
</script>