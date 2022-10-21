<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->

    <b-row>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light">
            <b-icon-exclamation-circle></b-icon-exclamation-circle> Upcoming
            Tasks
          </h6>

          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >1</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light">
            <b-icon-alarm></b-icon-alarm> Late Tasks
          </h6>
          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >5</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light">
            <b-icon-arrow-left-right></b-icon-arrow-left-right> Open Tasks
          </h6>
          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >0</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light lg-dark">
            <b-icon-check2></b-icon-check2> Completed Tasks
          </h6>
          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >1</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light">
            <b-icon-alarm></b-icon-alarm> Time Spent
          </h6>
          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >2</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="2">
        <b-card class="shadow p-1">
          <h6 class="card-title font-weight-light">
            <b-icon-clock></b-icon-clock> Time Spent
          </h6>
          <b-card-text class="mb-2 text-center h2 font-weight-light"
            >24 hr</b-card-text
          >
        </b-card>
      </b-col>
    </b-row>

    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->

    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card no-body class="mt-4">
      <b-card-title class="bg-success p-3">
        <h3 class="text-white font-weight-light">
          <b-icon-card-list style="font-size:1.1em;"></b-icon-card-list>
          Assignment of Open Work Orders
        </h3>
      </b-card-title>

      <!-- <div class="btn-grp ml-3 mt-3"> -->
      <!-- <b-button
          variant="secondary rounded-pill"
          @click="
            show_list = true;
            show_graph = false;
            show_calender = false;
          "
          >List</b-button
        > -->
      <!-- <b-button
          size="lg"
          pill
          variant="info"
          @click="
            show_list = true;
            show_graph = false;
            show_calender = false;
          "
          ><b-icon-list-stars />List</b-button
        > -->
      <!-- <b-button
          size="lg"
          pill
          variant="info"
          @click="
            show_calendar = true;
            show_list = false;
            show_graph = false;
          "
          ><b-icon-calendar4-range></b-icon-calendar4-range> Calendar</b-button
        >
        <b-button size="lg" pill variant="info"
          ><b-icon-people-fill></b-icon-people-fill> User</b-button
        > -->
      <!-- <b-button
          class="text-light"
          pill
          variant="info"
          size="lg"
          @click="
            show_graph = true;
            show_list = false;
            show_calender = false;
          "
          ><b-icon-graph-up></b-icon-graph-up> Graph</b-button
        > -->
      <!-- </div> -->

      <div>
        <b-card no-body>
          <b-tabs pills card class="bg-white">
            <b-tab active
              ><template #title>
                <b-icon-list-stars></b-icon-list-stars> List </template
              ><SellingProduct />
            </b-tab>
            <b-tab
              ><template #title>
                <b-icon-calendar4-range></b-icon-calendar4-range>
                Calendar</template
              ><SellingProduct2
            /></b-tab>
            <b-tab
              ><template #title>
                <b-icon-people-fill></b-icon-people-fill> User
              </template></b-tab
            >
            <b-tab
              ><template #title>
                <b-icon-graph-up></b-icon-graph-up> Graph
              </template>
              <b-row>
                <b-col cols="12" lg="12">
                  <b-card class="mb-4">
                    <h4 class="card-title">Amount of data by date</h4>
                    <SalesSummary />
                  </b-card>
                </b-col>
                <b-col cols="12" lg="12">
                  <b-card class="mb-4">
                    <h4 class="card-title">Amount of data by date</h4>
                    <!-- <SalesIncome /> -->
                  </b-card>
                </b-col> </b-row
            ></b-tab>
          </b-tabs>
        </b-card>
      </div>
      <!-- 
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="First" active><SellingProduct /></b-tab>
          <b-tab title="Second"><SellingProduct2 /></b-tab>
          <b-tab title="Disabled">
            <b-row>
              <b-col cols="12" lg="12">
                <b-card class="mb-4">
                  <h4 class="card-title">Amount of data by date</h4>
                  <SalesSummary />
                </b-card>
              </b-col>
              <b-col cols="12" lg="12">
                <b-card class="mb-4">
                  <h4 class="card-title">Amount of data by date</h4>
                  <SalesIncome />
                </b-card>
              </b-col> </b-row
          ></b-tab>
        </b-tabs>
      </div> -->
    </b-card>
    <!-- ----------------------------------------------- -->
    <!-- end top selling products -->
    <!-- ----------------------------------------------- -->
    <!-- ----------------------------------------------- -->
    <!-- cards row -->
    <!-- ----------------------------------------------- -->
    <!-- <TopCards /> -->
    <!-- ----------------------------------------------- -->
    <!-- end cards row -->
    <!-- ----------------------------------------------- -->
  </div>
</template>

<script>
import SalesSummary from "./dashboard-components/SalesSummary";
// import SalesIncome from "./dashboard-components/SalesIncome";
import SellingProduct from "./dashboard-components/SellingProduct";
import SellingProduct2 from "./dashboard-components/SellingProduct2";
import {
  BIconListStars,
  BIconCalendar4Range,
  BIconPeopleFill,
  BIconGraphUp,
  BIconCardList,
  BIconAlarm,
  BIconArrowLeftRight,
  BIconCheck2,
  BIconClock,
  BIconExclamationCircle,
} from "bootstrap-vue";
// import TopCards from "./dashboard-components/TopCards";
export default {
  name: "Starter",
  data: () => ({
    show_list: true,
    show_calendar: false,
    show_graph: false,
  }),
  components: {
    BIconCalendar4Range,
    BIconListStars,
    BIconPeopleFill,
    BIconGraphUp,
    BIconCardList,
    BIconAlarm,
    BIconArrowLeftRight,
    BIconCheck2,
    BIconClock,
    BIconExclamationCircle,
    SalesSummary,
    // SalesIncome,
    SellingProduct,
    SellingProduct2,
    // TopCards,
  },
  computed: {
    xxx() {
      var graphDataSet = this.$store.getters.getGraphData
    console.log("linechart in starter", graphDataSet);
    // var { graphLabels, graphData } = graphDataSet;
    return graphDataSet;
    },
  },
};
</script>
<style>
.btnn {
  background-color: linear-gradient(to right, red, yellow);
}
</style>
