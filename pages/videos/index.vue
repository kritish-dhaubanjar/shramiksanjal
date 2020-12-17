<template>
  <section>
    <Banner />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12 mb-5">
              <div class="youtube position-relative">
                <iframe
                  src="https://www.youtube.com/embed/Zu4R9dxgdxE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="card-body pb-0">
                <small class="text-muted">
                  <i class="las la-calendar-alt" /> AUGUST 20, 2016
                  <i class="las la-list ml-3" />
                  <a href="#"><small>HEALTH</small></a
                  >,
                  <a href="#"><small>STRATEGY</small></a>
                </small>

                <div>
                  <h5 class="font-weight-bold my-3">
                    Aligning Passive Investment with Paris Climate Goals: Left
                    Sidebar
                  </h5>
                  <p>
                    The purpose of this Request for Proposal (RFP) is to
                    generate ideas and fund solutions that address climate
                    change problems.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6" v-for="i in 6" :key="i">
              <div class="card is-radiusless is-borderless mb-5">
                <!-- <div class="background-image w-100 position-relative">
                  <div
                    class="overlay d-flex h-100 w-100 align-items-center justify-content-center position-absolute"
                  >
                    <i class="las la-play la-4x text-danger" />
                  </div>
                </div> -->

                <div class="youtube position-relative">
                  <iframe
                    src="https://www.youtube.com/embed/Zu4R9dxgdxE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="card-body pb-0">
                  <small class="text-muted">
                    <i class="las la-calendar-alt" /> AUGUST 20, 2016
                    <i class="las la-list ml-3" />
                    <a href="#"><small>HEALTH</small></a
                    >,
                    <a href="#"><small>STRATEGY</small></a>
                  </small>

                  <nuxt-link to="/news/news">
                    <h5 class="font-weight-bold my-3">
                      Aligning Passive Investment with Paris Climate Goals: Left
                      Sidebar
                    </h5>
                    <p>
                      The purpose of this Request for Proposal (RFP) is to
                      generate ideas and fund solutions that address climate
                      change problems.
                    </p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <nav class="mb-5 mt-4">
              <ul class="pagination">
                <li class="page-item mr-1 disabled">
                  <a class="page-link is-radiusless" href="#">Previous</a>
                </li>
                <li class="page-item mx-1 active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item mx-1">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item mx-1">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item ml-1">
                  <a class="page-link is-radiusless" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Sidebar from "@/components/news/Sidebar";

export default {
  components: {
    Banner,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.background-image {
  min-height: 280px;
  background-image: url(https://via.placeholder.com/485x325);
  .overlay {
    opacity: 0;
    transition: 128ms;
  }
  &:hover {
    .overlay {
      background-color: rgba(35, 36, 56, 0.65);
      transition: 128ms;
      cursor: pointer;
      opacity: 1;
    }
  }
}

.card-body {
  border-left: 2px solid $primary;
}

ul.pagination {
  li {
    a {
      background-color: #f8f9fa;
      padding: 8px 12px;
      color: $dark;
      &:hover {
        background-color: $primary;
        color: #fff;
      }
    }
  }
  li.active {
    a {
      background: $dark;
      border-color: $dark;
    }
  }
}

.youtube {
  width: 100%;
  padding-bottom: 53%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
