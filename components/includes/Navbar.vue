<template>
  <nav class="sticky-top bg-white shadow-sm">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
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
                  <a class="nav-link py-4 active" href="#">HOME</a>
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

                    <!-- <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a> -->
                  </div>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">EVENTS</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">VIDEOS</a>
                </li>
                <!-- <li class="nav-item px-2">
                <a class="nav-link py-4" href="#">FAQs</a>
              </li> -->
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">JOIN US</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">SHRAMIK COMMUNITY</a>
                </li>

                <li class="nav-item px-2">
                  <a class="nav-link py-4" href="#">ABOUT US</a>
                </li>
                <!-- <li class="nav-item px-2">
               
              </li> -->
              </ul>

              <button class="btn btn-danger is-radiusless font-weight-bold">
                CONTACT US
              </button>
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

.dropdown-menu {
  width: 256px;
  top: 64px;
  background-color: #2e2c42;
  .dropdown-item {
    color: #fff;
    &:hover {
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

#news:hover ~ .dropdown-menu {
  display: block;
}
</style>
