<template>
  <section class="py-5 background-image">
    <div class="container-fluid my-5 pb-5">
      <div class="col-lg-6 offset-lg-6 text-white">
        <div class="my-5 py-5">
          <h1 class="no-letter-spacing font-weight-bold">
            The housing crisis is the most serious issue.
          </h1>
          <hr />
          <p class="font-weight-bold">
            Issue that is making every other challenge harder, particularly for
            low-income families. This critical effort holds great promise for
            finding local and regional solutions.
          </p>

          <button
            class="btn btn-dark btn-lg is-radiusless mr-3 font-weight-bold p-3"
          >
            FIND SOLUTION
          </button>
          <button
            class="btn btn-dark btn-lg is-radiusless font-weight-bold p-3"
          >
            TOOLS TO HELP ENGAGE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

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
