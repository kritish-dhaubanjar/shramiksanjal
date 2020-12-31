<template>
  <section class="overflow-hidden">
    <div
      id="carouselControls"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          v-for="i in carousels.length"
          :key="i"
          data-target="#carouselControls"
          :data-slide-to="i - 1"
          :class="{ active: i == 0 }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: i == 0 }"
          v-for="(carousel, i) in carousels"
          :key="carousel.id"
        >
          <section class="background-image">
            <div class="container-fluid d-flex align-items-center">
              <div class="jumbotron bg-transparent text-white mb-0">
                <h1 class="font-weight-bold mb-4">
                  {{ carousel[`caption_${$i18n.locale}`] }}
                </h1>
                <button
                  class="btn btn-lg btn-dark is-radiusless py-3 px-4 my-2"
                >
                  <h6 class="mb-0 font-weight-bold">EXPLORE WITH US</h6>
                </button>
                <em class="mx-3 my-2">or</em>
                <button
                  class="btn btn-lg btn-danger is-radiusless py-3 px-4 my-2"
                >
                  <h6 class="mb-0 font-weight-bold">RECENT NEWS</h6>
                </button>
                <!-- <p class="lead">
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr class="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <a class="btn btn-primary btn-lg" href="#" role="button"
                  >Learn more</a
                > -->
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="controls">
        <div class="position-relative">
          <a
            class="position-relative btn btn-dark btn-lg is-radiusless py-4"
            href="#carouselControls"
            data-slide="prev"
          >
            <h6 class="mb-0">
              <i class="las la-arrow-left" />
              <span class="d-none d-md-inline">PREVIOUS SLIDE</span>
            </h6>
          </a>
          <a
            class="position-relative btn btn-dark btn-lg is-radiusless py-4"
            href="#carouselControls"
            data-slide="next"
          >
            <h6 class="mb-0">
              <span class="d-none d-md-inline">NEXT SLIDE</span>
              <i class="las la-arrow-right" />
            </h6>
          </a>
        </div>
      </div>
      <!-- <a
        class="carousel-control-prev"
        href="#carouselControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carousels: []
    };
  },

  beforeCreate() {
    this.$axios.get("/api/collections/get/carousels").then(({ data }) => {
      this.carousels = data.entries;
    });
  }
};
</script>

<style scoped lang="scss">
.carousel-item {
  section {
    min-height: 612px;
    .container-fluid {
      min-height: 612px;
    }
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/images/street.jpg");
  }
}

@media screen and(min-width: 768px ) {
  h1 {
    font-size: 3.5rem;
  }
}

@media screen and(max-width: 575px ) {
  .carousel-indicators {
    left: 0;
    right: unset;
    margin-left: 32px;
  }
}

.controls {
  opacity: 0;
  transition: 128ms;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 16;
  a:first-child {
    transition: 128ms;
    left: -64px;
  }
  a:last-child {
    transition: 128ms;
    right: -64px;
  }
}

section {
  &:hover {
    .controls {
      transition: 128ms;
      opacity: 1;
      a:first-child {
        transition: 128ms;
        left: 0px;
      }
      a:last-child {
        transition: 128ms;
        right: 0px;
      }
    }
  }
}
</style>
