<template>
  <div id="main-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  beforeCreate() {
    // alert('fetchDTS');
    this.$store.dispatch("fetchDTS");
    this.$store.dispatch("fetchGraphData");
  },
};
</script>

<style></style>
