<template>
  <b-col cols="12" lg="2" md="4" sm="12">
    <b-card header-bg-variant="swd-green-bar" header-text-variant="white">
      <template #header>
        <slot></slot>
        {{ header }}</template
      >
      <b-card-text :class="`text-center h2 font-weight-light text-${color}`"
        >{{ text }}
      </b-card-text>
    </b-card>
  </b-col>
</template>
<script>
export default {
  name: "OneCard",
  props: {
    header: String,
    text: String,
    color: String,
  },
};
</script>
<style scoped>
.card-header {
  padding: 5px !important;
}
.card {
  margin: 0 !important;
}
</style>
