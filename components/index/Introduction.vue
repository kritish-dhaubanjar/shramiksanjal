<template>
  <section class="my-5 pt-5 overflow-hidden">
    <Timeline />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 bg-dark text-white position-relative">
          <div class="row">
            <div
              class="col-12 col-lg-3 offset-xl-1 col-xl-2 py-3 d-flex align-items-center justify-content-center"
            >
              <h4 class="mb-0">
                Our network by the numbers:
              </h4>
            </div>
            <div class="col-6 col-md-3 col-lg-2 text-center py-3">
              <h1 class="mb-0">{{ data.countries }}</h1>
              <small>
                Countries
              </small>
            </div>
            <div class="col-6 col-md-3 col-lg-2 text-center py-3">
              <h1 class="mb-0">{{ data.members }}</h1>
              <small>
                Members
              </small>
            </div>
            <div class="col-6 col-md-3 col-lg-2 text-center py-3">
              <h1 class="mb-0">{{ data.facebook_followers }}</h1>
              <small>
                Facebook Followers
              </small>
            </div>
            <div class="col-6 col-md-3 col-lg-2 text-center py-3">
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
import Timeline from "@/components/index/Timeline";

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
  },

  components: {
    Timeline
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
  // top: -97px;
}

@media screen and (max-width: 767px) {
  .bg-dark {
    top: -16px;
  }
}
</style>
