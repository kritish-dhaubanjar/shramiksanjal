<template>
  <section class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5 py-2">
          <ul class="socials px-0 my-0">
            <li class="pr-1 pt-2">
              <a href="#"><i class="lab la-facebook-square"/></a>
            </li>
            <li class="px-1">
              <a href="#"><i class="lab la-twitter"/></a>
            </li>
            <li class="px-1">
              <a href="#"><i class="lab la-instagram"/></a>
            </li>
            <!-- <li class="px-1">
              <a href="#"><i class="lab la-google-plus"/></a>
            </li> -->
            <li class="px-1">
              <a href="#"><i class="lab la-linkedin"/></a>
            </li>
            <li class="pl-1">
              <a href="#"><i class="lab la-youtube"/></a>
            </li>
          </ul>
        </div>

        <div class="col-7 py-2 text-right">
          <div class="btn-group">
            <div class="dropdown mr-1">
              <button
                class="btn btn-sm dropdown-toggle is-radiusless"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EN
              </button>
              <div
                class="dropdown-menu is-radiusless"
                aria-labelledby="dropdownMenuButton"
              >
                <nuxt-link class="dropdown-item" :to="switchLocalePath('en')">
                  EN
                </nuxt-link>
                <nuxt-link class="dropdown-item" :to="switchLocalePath('es')">
                  ES
                </nuxt-link>
                <!-- <a class="dropdown-item" href="#">EN</a> -->
                <!-- <a class="dropdown-item" href="#">NL</a> -->
                <!-- <a class="dropdown-item" href="#">ES</a> -->
                <a class="dropdown-item" href="#">FR</a>
                <a class="dropdown-item" href="#">RU</a>
              </div>
            </div>

            <button class="btn btn-outline-danger btn-sm is-radiusless">
              <i class="las la-sign-in-alt" /> Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
ul {
  width: max-content;
  li {
    display: inline-block;
    i {
      font-size: 18px;
    }
  }
}

.dropdown-menu {
  z-index: 1024;
  a {
    &:active,
    &:focus {
      background-color: $primary;
      color: #fff;
    }
  }
}
</style>
