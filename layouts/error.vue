<template>
  <section class="py-5 background-image">
    <div class="container-fluid py-5 text-center my-5">
      <div class="row">
        <div class="col-12">
          <main class="d-flex align-items-center w-100 justify-content-center">
            <div class="text-white">
              <img
                src="/images/assets/undraw_page_not_found_su7k.svg"
                class="mb-5 img-fluid"
              />
              <h1>Something went wrong, try later</h1>
              <p class="lead">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>

              <nuxt-link
                to="/"
                tag="button"
                class="btn btn-danger is-radiusless my-5 py-3 px-4"
              >
                <b><i class="las la-arrow-left" /> Back to Home</b>
              </nuxt-link>
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  mounted(){
    this.$store.commit("reset");
  }
};
</script>

<style lang="scss" scoped>
section {
  background-image: linear-gradient(
      rgba(35, 36, 56, 0.5),
      rgba(35, 36, 56, 0.5)
    ),
    url("/images/street-3401918_1920.jpg");
}
main {
  min-height: 80vh;
}

img {
  width: 100%;
  max-width: 512px;
}
</style>
