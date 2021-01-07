<template>
  <section class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5 py-2">
          <ul class="socials px-0 my-0">
            <li class="pr-1 pt-2" :v-if="socials.Facebook.length > 0">
              <a :href="socials.Facebook" target="_blank"
                ><i class="lab la-facebook-square"
              /></a>
            </li>
            <li class="px-1" :v-if="socials.Twitter.length > 0">
              <a :href="socials.Twitter" target="_blank"
                ><i class="lab la-twitter"
              /></a>
            </li>
            <li class="px-1" :v-if="socials.AnchorFM.length > 0">
              <a :href="socials.AnchorFM" target="_blank"
                ><i class="las la-rss"
              /></a>
            </li>
            <!-- <li class="px-1">
              <a :href="socials.Facebook" target="_blank"><i class="lab la-google-plus"/></a>
            </li> -->
            <li class="px-1" :v-if="socials.Linkedin.length > 0">
              <a :href="socials.Linkedin" target="_blank"
                ><i class="lab la-linkedin"
              /></a>
            </li>
            <li class="pl-1" :v-if="socials.Youtube.length > 0">
              <a :href="socials.Youtube" target="_blank"
                ><i class="lab la-youtube"
              /></a>
            </li>
          </ul>
        </div>

        <div class="col-7 py-2 text-right">
          <div class="btn-group">
            <div class="dropdown mr-1">
              <button
                class="btn btn-sm dropdown-toggle is-radiusless text-uppercase"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ $i18n.locale }}
              </button>
              <div
                class="dropdown-menu is-radiusless"
                aria-labelledby="dropdownMenuButton"
              >
                <nuxt-link
                  class="dropdown-item text-uppercase"
                  :class="{ active: $i18n.locale == locale }"
                  :to="switchLocalePath(locale)"
                  v-for="locale in $i18n.locales"
                  :key="locale"
                >
                  {{ locale }}
                </nuxt-link>
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

<script>
export default {
  props: ["socials"]
};
</script>

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

  .dropdown-item.active {
    background-color: $primary;
    color: #fff;
  }
}
</style>
