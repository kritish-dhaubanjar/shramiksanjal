<template>
  <nav class="sticky-top bg-white shadow-sm">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-md navbar-light px-0">
            <a class="navbar-brand" href="#">
              <img
                src="/images/logo.png"
                width="52"
                height="52"
                alt=""
                loading="lazy"
              />
            </a>
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
                  >
                    NEWS
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      class="dropdown-item "
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'news',
                          query: { country: 'Nepal' }
                        })
                      "
                      >Nepal</nuxt-link
                    >
                    <!-- <nuxt-link
                      class="dropdown-item "
                      exact-active-class="active"
                      to="/news?country=Nepal"
                      >Nepal</nuxt-link
                    > -->
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      exact-active-class="active"
                      :to="
                        localePath({
                          name: 'news',
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
                          name: 'news',
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
                          name: 'news',
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
                          name: 'news',
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
                          name: 'news',
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
                          name: 'news',
                          query: { country: 'Others' }
                        })
                      "
                      >Others</nuxt-link
                    >
                  </div>
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
                    <!-- <a class="dropdown-item" href="#">Past Events</a> -->
                  </div>
                </li>
                <li class="nav-item px-2">
                  <nuxt-link
                    class="nav-link py-4"
                    :to="localePath('/videos')"
                    exact-active-class="active"
                    >VIDEOS</nuxt-link
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
                  >
                    JOIN US
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <a class="dropdown-item" href="#">As a Member</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">As a Supportor</a>
                  </div>
                </li> -->
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
                  >
                    ABOUT US
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <nuxt-link
                      class="dropdown-item"
                      :to="localePath('about-us')"
                      >Who are we?</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Where are we?</a>
                    <div class="dropdown-divider"></div>
                    <nuxt-link
                      class="dropdown-item"
                      :to="localePath('/about-us/our-team')"
                      >Our Team</nuxt-link
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Our Programs</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"
                      >Our Vision &amp; Mission</a
                    >
                  </div>
                </li>
              </ul>
              <!-- 
                to="/contact-us"

 -->
              <nuxt-link
                :to="localePath('contact-us')"
                tag="button"
                class="btn btn-danger is-radiusless font-weight-bold"
              >
                CONTACT US
              </nuxt-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.nav-link {
  font-weight: bold;
  color: #000 !important;
  &.active {
    color: $primary !important;
  }
}

@media screen and(max-width: 999px) {
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
