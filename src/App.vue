<template>
  <div id="main-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    // alert('fetchDTS');
    this.$store.dispatch("fetchDTS");
  },
};
</script>

<style></style>
