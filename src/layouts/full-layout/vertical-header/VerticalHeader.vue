<template>
  <header class="topbar">
    <b-navbar
      toggleable="lg"
      :type="`${navbarColor == 'white' ? 'light' : 'dark'}`"
      class="p-0"
      :variant="navbarColor"
    >
      <div class="d-none d-lg-block">
        <input class="p-2" type="text" placeholder="Search here" />
        <!-- BIconCardList, BIconCalendar4Range -->
        <b-icon-card-list
          class="h3 text-white align-middle ml-3"
        ></b-icon-card-list>
        <b-icon-calendar4-range
          class="h4 text-white align-middle ml-4"
        ></b-icon-calendar4-range>
        <b-icon-calendar4-range
          class="h4 text-white align-middle ml-4"
        ></b-icon-calendar4-range>
      </div>
      <div :class="`navbar-header d-block d-lg-none pl-3`">
        <LogoDark v-if="navbarColor == 'white'" />
        <LogoLight v-else />
      </div>
      <b-navbar-nav
        ><b-nav-item @click="showMobileSidebar" class="d-block d-lg-none"
          ><i class="mdi mdi-menu fs-3"></i></b-nav-item
      ></b-navbar-nav>
      <!-- <b-navbar-toggle target="nav-collapse" class="mx-2 border-0"
        ><i class="mdi mdi-dots-horizontal"></i
      ></b-navbar-toggle> -->

      <b-collapse id="nav-collapse" is-nav class="">
        <!-- -----------------------------------------------------------
          Right aligned nav items
        ----------------------------------------------------------- -->

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <i class="mdi mdi-bell fs-7"></i>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another Action</b-dropdown-item>
            <b-dropdown-item href="#">Something</b-dropdown-item>
            <b-dropdown-item href="#">Here</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <i class="fs-7 mdi mdi-comment-processing"></i>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another Action</b-dropdown-item>
            <b-dropdown-item href="#">Something</b-dropdown-item>
            <b-dropdown-item href="#">Here</b-dropdown-item>
          </b-nav-item-dropdown>
          <b class="mt-3 text-white font-weight-light">Hi, admin</b>
          <!-- -----------------------------------------------------------
            Profile Dropdown
          ----------------------------------------------------------- -->
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img
                src="../../../assets/images/users/1.jpg"
                alt="user"
                class="rounded-circle"
                width="31"
              />
            </template>
            <b-dropdown-item href="#" class="d-flex align-items-center">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#" class="d-flex align-items-center">
              Settings
            </b-dropdown-item>
            <b-dropdown-item href="#" class="d-flex align-items-center">
              Sign out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapState } from "vuex";
import LogoDark from "../logo-dark/LogoDark";
import LogoLight from "../logo-light/LogoLight";
import { BIconCardList, BIconCalendar4Range } from "bootstrap-vue";
export default {
  name: "vertical-header",
  data: () => ({
    showToggle: false,
  }),
  components: {
    LogoDark,
    LogoLight,
    BIconCardList,
    BIconCalendar4Range,
  },
  computed: {
    ...mapState(["navbarColor", "logoColor", "LayoutType"]),
  },
  methods: {
    showMobileSidebar() {
      this.$store.commit("SET_SIDEBAR_DRAWER", true);
    },
  },
};
</script>
