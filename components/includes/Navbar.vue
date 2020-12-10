<template>
  <nav class="sticky-top bg-white shadow-sm">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <a class="navbar-brand" href="#">
              <img
                src="/images/logo.png"
                width="52"
                height="52"
                alt=""
                loading="lazy"
              />
            </a>
            <!-- <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item px-2">
                  <nuxt-link to="/" class="nav-link py-4 active"
                    >HOME</nuxt-link
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
                    <a class="dropdown-item" href="#">Nepal</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">UAE</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Qatar</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Kuwait</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Saudi Arabia</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Malaysia</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Others</a>
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
                    <a class="dropdown-item" href="#">Upcoming Events</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Past Events</a>
                  </div>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">VIDEOS</a>
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
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">SHRAMIK COMMUNITY</a>
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
                    ABOUT US
                  </a>
                  <div
                    class="dropdown-menu is-radiusless py-4 px-3"
                    aria-labelledby="news"
                  >
                    <a class="dropdown-item" href="#">Who are we?</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Where are we?</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">What are we doing?</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">What have we achieved?</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"
                      >Our Mission &amp; Vision</a
                    >
                  </div>
                </li>
              </ul>

              <nuxt-link
                to="/contact-us"
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
  .collapse.navbar-collapse {
    display: none !important;
  }
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
</style>
