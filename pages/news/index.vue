<template>
  <section>
    <Banner />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-sm-6" v-for="i in 12" :key="i">
              <div class="card is-radiusless is-borderless mb-5">
                <div class="background-image w-100" />

                <div class="card-body pb-0">
                  <small class="text-muted">
                    <i class="las la-calendar-alt" /> AUGUST 20, 2016
                    <i class="las la-list ml-3" />
                    <a href="#"><small>HEALTH</small></a
                    >,
                    <a href="#"><small>STRATEGY</small></a>
                  </small>

                  <nuxt-link to="/news/news">
                    <h4 class="font-weight-bold my-3">
                      Aligning Passive Investment with Paris Climate Goals: Left
                      Sidebar
                    </h4>
                  </nuxt-link>

                  <p>
                    The purpose of this Request for Proposal (RFP) is to
                    generate ideas and fund solutions that address climate
                    change problems.
                  </p>
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
</style>
