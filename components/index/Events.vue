<template>
  <section class="my-5 py-5">
    <div class="container-fluid bg-light py-5">
      <div class="row my-5">
        <div class="col-lg-8">
          <h2 class="font-weight-bold mb-5">Upcoming Events & Meetings</h2>

          <div
            class="card is-radiusless is-borderless mb-3"
            v-for="i in 5"
            :key="i"
          >
            <div class="card-body py-5">
              <div class="row">
                <div
                  class="col-sm align-items-center d-none d-sm-flex align-items-center"
                >
                  <div>
                    <div class="background-image rounded-circle" />
                  </div>
                </div>
                <div class="col-sm">
                  <span
                    class="badge badge-dark is-radiusless px-2 font-weight-light py-1"
                  >
                    Aug 12 - Aug 13
                  </span>

                  <small class="ml-3">
                    9:00 am - 9:00 pm
                  </small>
                  <h5 class="mt-3 font-weight-bold">Along Pines Hike</h5>
                  <p class="lead mb-0">
                    Hands-on activities, student photography exhibit, and more.
                    All activities are free and Museum admission fee is not
                    required.
                  </p>
                </div>
                <div class="col-sm d-flex align-items-center">
                  <button
                    class="btn btn-danger is-radiusless font-weight-bold px-4 py-2 my-3"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 d-md-none d-lg-block">
          <div class="pattern mt-5" />
          <img
            src="https://via.placeholder.com/720x1080"
            class="img-fluid mt-5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.background-image {
  background-image: url(https://via.placeholder.com/128x128);
  height: 100px;
  width: 100px;
}

.badge {
  font-size: 12px;
}
.lead {
  font-size: 16px !important;
}

.row {
  .col-sm:nth-child(1) {
    max-width: 128px;
  }

  .col-sm:nth-child(3) {
    max-width: 140px;
  }
}

@media screen and(min-width: 576px) {
  .col-sm:nth-child(3) {
    border-left: 1px solid #e3e3e3;
  }
}

.pattern {
  height: 300px;
  width: 100%;
  background-image: url("/images/assets/dot.png");
}
</style>
