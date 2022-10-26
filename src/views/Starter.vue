<template>
  <div>
    <TopCards />

    <b-card no-body class="mt-4">
      <b-card-title
        class="bg-swd-green-bar p-3 text-white font-weight-light h3"
      >
        <!-- <h3 class="text-white font-weight-light"> -->
        <b-icon-card-list style="font-size:1.1em;"></b-icon-card-list>
        Assignment of Open Work Orders
      </b-card-title>

      <div>
        <b-tabs no-border class="ml-3">
          <b-tab active title-link-class="tab-link-class"
            ><template #title>
              <b-icon-list-stars></b-icon-list-stars> List
            </template>
            <ListTable />
          </b-tab>
          <b-tab title-link-class="tab-link-class"
            ><template #title variant="success">
              <b-icon-calendar4-range></b-icon-calendar4-range>
              Calendar
            </template>
            <CalendarTable />
          </b-tab>
          <b-tab title-link-class="tab-link-class" disabled
            ><template #title>
              <b-icon-people-fill></b-icon-people-fill> User
            </template>
          </b-tab>
          <b-tab title-link-class="tab-link-class" v-b-modal.modal-1
            ><template #title>
              <b-icon-graph-up></b-icon-graph-up>
              Graph
            </template>
          </b-tab>
        </b-tabs>
      </div>
    </b-card>

    <GraphPage />
  </div>
</template>

<script>
import ListTable from "./dashboard-components/ListTable";
import CalendarTable from "./dashboard-components/CalendarTable";
import TopCards from "./dashboard-components/TopCards";
import GraphPage from "./dashboard-components/GraphPage";
import {
  BIconListStars,
  BIconCalendar4Range,
  BIconPeopleFill,
  BIconGraphUp,
  BIconCardList,
} from "bootstrap-vue";

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
    ListTable,
    CalendarTable,
    TopCards,
    GraphPage,
  },
  beforeCreate() {},
};
</script>
<style>
.tab-link-class {
  background-color: #c7f1cb !important;
  color: black !important;
  padding: 10px 20px !important;
  border-radius: 25px !important;
  margin: 1px !important;
}
.nav-tabs {
  border-bottom: none !important;
}
.card-swd {
  background-color: red;
  background-size: calc(100% - 100px) calc(100% - 100px);
}
</style>
