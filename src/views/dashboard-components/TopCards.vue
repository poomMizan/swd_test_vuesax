<template>
  <b-card-group deck class="px-2">
    <OneCard header="Upcoming Tasks" text="1" color="swdgreenbar">
      <b-icon-exclamation-circle />
    </OneCard>

    <OneCard header="Late Tasks" text="5" color="warning">
      <b-icon-alarm />
    </OneCard>

    <OneCard header="Open Tasks" text="0" color="swdgreenbar">
      <b-icon-arrow-left-right />
    </OneCard>

    <OneCard header="Completed Tasks" text="1" color="swdgreenbar">
      <b-icon-check2 />
    </OneCard>

    <OneCard header="Overdue Tasks" text="2" color="danger">
      <b-icon-alarm />
    </OneCard>

    <OneCard header="Time Spent" text="24">
      <b-icon-clock />
    </OneCard>
  </b-card-group>
</template>

<script>
import OneCard from "./OneCard.vue";
import {
  BIconAlarm,
  BIconArrowLeftRight,
  BIconCheck2,
  BIconClock,
  BIconExclamationCircle,
} from "bootstrap-vue";
export default {
  name: "TopCards",
  components: {
    OneCard,
    BIconAlarm,
    BIconArrowLeftRight,
    BIconCheck2,
    BIconClock,
    BIconExclamationCircle,
  },
};
</script>
