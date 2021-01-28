<template>
  <section
    class="py-5 background-image"
    :style="
      `background-image: url(https://api.shramiksanjal.org/${data.image.path})`
    "
  >
    <div class="container-fluid my-5 pb-5">
      <div class="col-lg-6 offset-lg-6 text-white">
        <div class="my-5 py-5">
          <h1 class="no-letter-spacing font-weight-bold">
            {{ $localeContent(data, "title", $i18n.locale) }}
          </h1>
          <hr />
          <p class="font-weight-bold">
            {{ $localeContent(data, "overview", $i18n.locale) }}
          </p>

          <nuxt-link
            to="/our-programs"
            class="btn btn-dark btn-lg is-radiusless mr-3 font-weight-bold p-3 mb-2"
          >
            OUR PROGRAMS
          </nuxt-link>
          <nuxt-link
            to="/blogs"
            class="btn btn-dark btn-lg is-radiusless font-weight-bold p-3 mb-2"
          >
            RECENT BLOGS
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {
        image: {
          path: ""
        }
      }
    };
  },

  beforeCreate() {
    this.$axios.get("/api/singletons/get/banner").then(({ data }) => {
      this.data = data;
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

* {
  font-family: "Lato", sans-serif;
}

hr {
  width: 128px;
  border-top: 3px solid $primary;
}

.background-image {
  background-image: url("/images/street.jpg");
}

.btn {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
</style>
