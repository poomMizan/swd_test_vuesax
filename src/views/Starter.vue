<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->
    <div class="container-fluid">
      <b-row>
        <b-col cols="12" md="6" lg="2" class="col">
          <b-card class="mb-4">
            <h4 class="card-title mb-1">+70%</h4>
            <b-card-text class="mb-2">Total Sales</b-card-text>
            <b-progress value="70" max="100"></b-progress>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="2" class="col">
          <b-card class="mb-4">
            <h4 class="card-title mb-1">-10%</h4>
            <b-card-text class="mb-2">Monthly Sales</b-card-text>
            <b-progress variant="danger" value="10" max="100"></b-progress>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="2" class="col">
          <b-card class="mb-4">
            <h4 class="card-title mb-1">50%</h4>
            <b-card-text class="mb-2">Yearly Sales</b-card-text>
            <b-progress variant="success" value="50" max="100"></b-progress>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="2" class="col">
          <b-card class="mb-4">
            <h4 class="card-title mb-1">30%</h4>
            <b-card-text class="mb-2">Company Growth</b-card-text>
            <b-progress variant="warning" value="30" max="100"></b-progress>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="2" class="col">
          <b-card class="mb-4">
            <h4 class="card-title mb-1">30%</h4>
            <b-card-text class="mb-2">Company Growth</b-card-text>
            <b-progress variant="warning" value="30" max="100"></b-progress>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->

    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Assignment of Open Work Orders</h4>
      </b-card-body>

      <div class="btn-grp ml-3">
        <b-button
          variant="secondary rounded-pill"
          @click="
            show_list = true;
            show_graph = false;
            show_calender = false;
          "
          >List</b-button
        >
        <b-button
          variant="secondary rounded-pill"
          @click="
            show_calendar = true;
            show_list = false;
            show_graph = false;
          "
          >Calendar</b-button
        >
        <b-button variant="secondary rounded-pill">User</b-button>
        <b-button
          variant="secondary rounded-pill"
          @click="
            show_graph = true;
            show_list = false;
            show_calender = false;
          "
          >Graph</b-button
        >
      </div>

      <SellingProduct v-if="show_list" />
      <SellingProduct2 v-if="show_calendar" />

      <b-row v-if="show_graph">
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
        </b-col>
      </b-row>
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
import SalesIncome from "./dashboard-components/SalesIncome";
import SellingProduct from "./dashboard-components/SellingProduct";
import SellingProduct2 from "./dashboard-components/SellingProduct2";
// import TopCards from "./dashboard-components/TopCards";
export default {
  name: "Starter",
  data: () => ({
    show_list: true,
    show_calendar: false,
    show_graph: false,
  }),
  components: {
    SalesSummary,
    SalesIncome,
    SellingProduct,
    SellingProduct2,
    // TopCards,
  },
};
</script>

