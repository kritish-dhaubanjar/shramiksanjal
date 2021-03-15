<template>
  <nav class="sticky-top bg-white shadow-sm">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light px-0 py-0">
            <nuxt-link class="navbar-brand" to="/">
              <img src="/images/logo.png" width="200" alt="" loading="lazy" />
            </nuxt-link>
            <button
              class="navbar-toggler is-radiusless is-borderless"
              type="button"
              @click="$emit('show')"
            >
              <i class="las la-bars la-2x"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item px-2">
                  <nuxt-link
                    :to="localePath('/')"
                    class="nav-link py-4"
                    exact-active-class="active"
                    >{{ $t("home") }}</nuxt-link
                  >
                </li>

                <li class="nav-item dropdown px-2">
                  <a
                    class="nav-link py-4 dropdown-toggle"
                    href="#"
                    id="news"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    :class="{ active: this.$route.path.includes('blogs') }"
                  >
                    BLOGS
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      class="dropdown-item font-weight-bold"
                      exact-active-class="active"
                      :to="localePath('/blogs')"
                      >All Blogs</nuxt-link
                    >
                    <div class="dropdown-divider"></div>

                    <nuxt-link
                      class="dropdown-item "
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Nepal' }
                        })
                      "
                      >Nepal</nuxt-link
                    >
                    <!-- <nuxt-link
                      class="dropdown-item "
                      exact-active-class="active"
                      to="/blogs?country=Nepal"
                      >Nepal</nuxt-link
                    > -->
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'UAE' }
                        })
                      "
                      >UAE</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Qatar' }
                        })
                      "
                      >Qatar</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Kuwait' }
                        })
                      "
                      >Kuwait</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Saudi Arabia' }
                        })
                      "
                      >Saudi Arabia</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Malaysia' }
                        })
                      "
                      >Malaysia</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'blogs',
                          query: { country: 'Others' }
                        })
                      "
                      >Others</nuxt-link
                    >
                  </div>
                </li>
                <li class="nav-item px-2">
                  <nuxt-link
                    class="nav-link py-4"
                    :to="localePath('/our-programs')"
                    exact-active-class="active"
                    >PROGRAMS</nuxt-link
                  >
                </li>
                <!-- <li class="nav-item dropdown px-2">
                  <a
                    class="nav-link py-4 dropdown-toggle"
                    href="#"
                    id="news"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    :class="{ active: this.$route.path.includes('events') }"
                  >
                    EVENTS
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="localePath('/events')"
                      >Upcoming Events</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'events',
                          query: { past: 'true' }
                        })
                      "
                      >Past Events</nuxt-link
                    >
                  </div>
                </li> -->
                <li class="nav-item px-2">
                  <nuxt-link
                    class="nav-link py-4"
                    :to="localePath('/videos')"
                    exact-active-class="active"
                    >VIDEOS</nuxt-link
                  >
                </li>

                <li class="nav-item px-2">
                  <nuxt-link
                    class="nav-link py-4"
                    :to="localePath('/reports')"
                    exact-active-class="active"
                    >REPORTS</nuxt-link
                  >
                </li>

                <li class="nav-item dropdown px-2">
                  <a
                    class="nav-link py-4 dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    :class="{ active: this.$route.path.includes('join-us') }"
                  >
                    JOIN US
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      to="/join-us/as-a-member"
                      class="dropdown-item"
                      exact-active-class="active"
                      >As a Member</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      to="/join-us/society-for-solidarity"
                      class="dropdown-item"
                      exact-active-class="active"
                      >Society For Solidarity</nuxt-link
                    >
                  </div>
                </li>
                <!-- <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">SHRAMIK COMMUNITY</a>
                </li> -->

                <li class="nav-item dropdown px-2">
                  <a
                    class="nav-link py-4 dropdown-toggle"
                    href="#"
                    id="news"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    :class="{ active: this.$route.path.includes('about-us') }"
                  >
                    ABOUT US
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="localePath('/about-us')"
                      >Who are we?</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      :to="localePath('/about-us/where-we-are')"
                      class="dropdown-item"
                      exact-active-class="active"
                      >Where are we?</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="localePath('/about-us/our-vision-and-mission')"
                      >Our Vision &amp; Mission</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath(
                          '/about-us/our-vision-and-mission#our-values'
                        )
                      "
                      >Our Values</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="localePath('/about-us/our-team')"
                      >Our Team</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="localePath('/about-us/our-campaigns-and-events')"
                      >Our Campaigns &amp; Events</nuxt-link
                    >
                  </div>
                </li>
              </ul>
              <!-- 
                to="/contact-us"

 -->
              <!-- <nuxt-link
                :to="localePath('contact-us')"
                tag="button"
                class="btn btn-danger is-radiusless font-weight-bold"
              >
                CONTACT US
              </nuxt-link> -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.nav-link {
  font-weight: bold;
  color: #000 !important;
  &.active {
    color: $primary !important;
  }
}

@media screen and(max-width: 992px) {
  // .collapse.navbar-collapse {
  //   display: none !important;
  // }
}

.dropdown-menu {
  width: 256px;
  top: 64px;
  background-color: #2e2c42;
  .dropdown-item {
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      color: $primary;
      background-color: #2e2c42;
    }
  }

  .dropdown-divider {
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.25);
  }

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: -8px;
    left: 16px;
    background-color: #2e2c42;
    transform: rotateZ(45deg);
  }
}

.dropdown-menu:hover {
  display: block;
}

.dropdown-toggle:hover ~ .dropdown-menu {
  display: block;
}
//
.dropdown-item.active {
  background: transparent;
  color: $primary !important;
}
</style>
