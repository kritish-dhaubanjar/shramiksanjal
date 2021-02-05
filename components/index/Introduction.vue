<template>
  <section class="my-5 pt-5 overflow-hidden">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-12 mb-5 pb-5 text-center">
          <!-- <div class="card is-radiusless"> -->
          <img src="/images/timeline.png" class="img-fluid" />
          <!-- <div class="card-body text-center py-5">
              <h2 class="font-weight-bold">
                Drive Change with<br />
                Actionable Insight
              </h2>

              <hr class="my-4 mx-auto" />

              <ul class="font-weight-bold mb-5 px-0">
                <li>Fiscal Sponsorship</li>
                <li>Accounting Assistance</li>
                <li>Fiscal Sponsorship</li>
                <li>Attend a Training</li>
              </ul>

              <small>
                Evolutionary change constantly remoulds the conditions for a
                successful politics of sustainability.
              </small>
            </div>
          </div> -->
          <!-- </div> -->
          <!-- <div class="col-md-6 offset-lg-1 col-lg-5">
          <div class="image-holder text-center">
            <img src="https://via.placeholder.com/550x660" class="img-fluid" />
          </div>-->
        </div>

        <div class="col-lg-8 bg-dark text-white position-relative">
          <div class="row ">
            <div class="col-6 col-sm-3 text-center py-3">
              <h1 class="mb-0">{{ data.countries }}</h1>
              <small>
                Countries
              </small>
            </div>
            <div class="col-6 col-sm-3 text-center py-3">
              <h1 class="mb-0">{{ data.members }}</h1>
              <small>
                Members
              </small>
            </div>
            <div class="col-6 col-sm-3 text-center py-3">
              <h1 class="mb-0">{{ data.facebook_followers }}</h1>
              <small>
                Facebook Followers
              </small>
            </div>
            <div class="col-6 col-sm-3 text-center py-3">
              <h1 class="mb-0">{{ data.youtube_subscribers }}</h1>
              <small>
                Youtube Subscribers
              </small>
            </div>
          </div>
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
        countries: "",
        members: "",
        facebook_followers: "",
        youtube_subscribers: ""
      }
    };
  },

  beforeCreate() {
    this.$axios.get("/api/singletons/get/statistics").then(({ data }) => {
      this.data = data;
    });
  }
};
</script>

<style scoped lang="scss">
.card {
  border-width: 2px;
}

hr {
  width: 64px;
  border-width: 2px;
}

ul {
  list-style-type: none;
  li {
    padding: 8px 0px;
  }
}

.image-holder::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  right: -32px;
  top: -32px;
  z-index: -1;
  background-image: url("/images/assets/dot.png");
}

.bg-dark {
  top: -97px;
}

@media screen and (max-width: 767px) {
  .bg-dark {
    top: -16px;
  }
}
</style>
