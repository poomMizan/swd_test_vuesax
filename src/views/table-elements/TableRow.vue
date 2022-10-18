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
    <td>{{ timestamp }}</td>
    <td>
      <b-badge variant="danger" class="rounded-0">{{ data2 }}</b-badge>
    </td>
    <!-- <td>46</td>
    <td>356</td>
    <td>
      <h5 class="mb-0">$2850.06</h5>
    </td> -->
  </tr>
</template>
<script>
export default {
  name: "TableRow",
  props: {
    id: Number || String,
    data: Number || String,
    timestamp: String,
    data2: Number || String || null,
  },
};
</script>
<style></style>
