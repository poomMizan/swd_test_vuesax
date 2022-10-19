<template>
  <tr>
    <td>
      <div class="d-flex align-items-center">
        <!-- <div class="mr-2">
          <b-avatar variant="primary" text="EA" />
        </div> -->
        <div class>
          <h5 class="mb-0">{{ id }}</h5>
        </div>
      </div>
    </td>
    <td>{{ data }}</td>
    <td>
      {{ easyDateTime(dt) }}
      <!-- {{ dt.toDateString() }} -->
    </td>
    <td>
      {{ data2 }}
    </td>
  </tr>
</template>
<script>
export default {
  name: "TableRow",
  data() {
    return {
      dt: new Date(this.timestamp),
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
    easyDateTime(dt) {
      return (
        // dt.getHours() +
        // ":" +
        // // TODO เติม 0 หน้าหน้วยวินาที
        // dt.getMinutes() +
        // ":" +
        // dt.getSeconds() +
        // " / " +
        dt.getDate() +
        " " +
        this.monthNames[dt.getMonth()] +
        " " +
        dt.getFullYear()
      );
    },
  },
  props: {
    id: Number || String,
    data: Number || String,
    timestamp: String,
    data2: Number || String || null,
  },
};
</script>
<style></style>
