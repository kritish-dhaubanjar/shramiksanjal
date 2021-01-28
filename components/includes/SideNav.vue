<template>
  <nav class="shadow-sm" :class="{ show: show }">
    <div class="my-3 text-right text-white">
      <i class="las la-times la-1x mr-3 la-2x" @click="$emit('hide')" />
    </div>
    <ul class="list-group list-group-flush mb-4">
      <nuxt-link
        to="/"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Home</nuxt-link
      >

      <li class="list-group-item sidebar-link" @click="news = !news">
        Blogs
        <span class="float-right">
          <i class="las la-angle-down" v-if="news"></i>
          <i class="las la-angle-right" v-else></i>
        </span>
      </li>
      <ul class="list-group list-group-flush sub-menus" v-show="news">
        <!-- start sub-menu -->
        <nuxt-link
          tag="li"
          to="/blogs"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          All Blogs
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Nepal"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Nepal
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=UAE"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          UAE
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Qatar"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Qatar
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Kuwait"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Kuwait
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Saudi Arabia"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Saudi Arabia
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Malaysia"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Malaysia
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/blogs?country=Others"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Others
        </nuxt-link>

        <li class="list-group-item sidebar-link sub-menu p-0"></li>
      </ul>
      <!-- end sub-menu -->

      <nuxt-link
        to="/our-programs"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Programs</nuxt-link
      >

      <nuxt-link
        to="/videos"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Videos</nuxt-link
      >

      <li class="list-group-item sidebar-link" @click="events = !events">
        Join Us
        <span class="float-right">
          <i class="las la-angle-down" v-if="events"></i>
          <i class="las la-angle-right" v-else></i>
        </span>
      </li>
      <ul class="list-group list-group-flush sub-menus" v-show="events">
        <nuxt-link
          tag="li"
          to="/join-us/as-a-member"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          As a member
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/join-us/society-for-solidarity"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Society For Solidarity
        </nuxt-link>

        <li class="list-group-item sidebar-link sub-menu p-0"></li>
      </ul>

      <li class="list-group-item sidebar-link" @click="about = !about">
        About Us
        <span class="float-right">
          <i class="las la-angle-down" v-if="about"></i>
          <i class="las la-angle-right" v-else></i>
        </span>
      </li>
      <ul class="list-group list-group-flush sub-menus" v-show="about">
        <!-- start sub-menu -->
        <nuxt-link
          tag="li"
          to="/about-us"
          class="list-group-item sidebar-link sub-menu"
          exact-active-class="active"
        >
          Who are we?
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/about-us/where-we-are"
          exact-active-class="active"
          class="list-group-item sidebar-link sub-menu"
        >
          Where are we?
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/about-us/our-vision-and-mission#our-values"
          exact-active-class="active"
          class="list-group-item sidebar-link sub-menu"
        >
          Our Values
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/about-us/our-team"
          exact-active-class="active"
          class="list-group-item sidebar-link sub-menu"
        >
          Our Team
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/about-us/our-campaigns-and-events"
          exact-active-class="active"
          class="list-group-item sidebar-link sub-menu"
        >
          Our Campaigns &amp; Events
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/about-us/our-vision-and-mission"
          exact-active-class="active"
          class="list-group-item sidebar-link sub-menu"
        >
          Our Vision &amp; Mission
        </nuxt-link>

        <li class="list-group-item sidebar-link sub-menu p-0"></li>
      </ul>
      <!--  -->
      <!-- 

      <li class="list-group-item d-flex">
        <i class="las la-phone mr-2" />
        <span
          >+977 9851044829<br />
          +977 9841917909<br />
          01-5906852</span
        >
      </li>

      <li class="list-group-item d-flex">
        <i class="las la-home mr-2" />
        <span
          >Ramjanaki Complex, Chagal,<br />
          Dallu, Kathmandu, Nepal</span
        >
      </li>

      <li class="list-group-item d-flex">
        <i class="las la-envelope mr-2" />
        <span>krishttrading@gmail.com</span>
      </li>
      <li class="list-group-item">
        <nuxt-link
          to="/contact-us"
          class="btn btn-primary is-radiusless btn-block"
        >
          <span>Contact Us <i class="las la-arrow-right"/></span>
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["show"],

  data() {
    return {
      events: false,
      about: false,
      news: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

nav {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

nav::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}

nav {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 320px;
  background: #333333;
  z-index: 1024;
  overflow-y: scroll;
  overflow-x: hidden !important;
  transform: translateX(-328px);
  transition: 128ms;
  &.show {
    transform: translateX(0);
    transition: 128ms;
  }
}

ul {
  .list-group-item {
    border-color: rgba(255, 255, 255, 0.1);
  }
  li {
    background-color: #333333;
    font-weight: bold;
    font-size: 15px;
    color: #fff;

    i {
      font-size: 18px;
    }

    &.active {
      color: $primary;
      background-color: #333333;
    }

    &.sidebar-link {
      &:hover {
        cursor: pointer;
      }
    }

    &.sub-menu {
      padding-left: 48px;
    }
  }
}

.btn-primary {
  background: $primary;
  border: $primary;
  &:hover,
  &:active,
  &:focus {
    box-shadow: none !important;
    outline: none !important;
    background: $primary !important;
  }

  &:active {
    opacity: 0.7;
  }
}

.la-times {
  cursor: pointer;
}

@media screen and(min-width: 992px) {
  nav {
    display: none;
  }
}
</style>
