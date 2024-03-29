<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: `Our Campaigns & Events` }" />
    <div class="container-fluid">
      
      <section class="my-5 py-5">
        <div class="container-fluid bg-light py-5">
          <div class="row my-5">
            <div class="col-lg-8">
              <h2 class="font-weight-bold mb-5">Our Campaigns & Events</h2>

              <div
                class="card is-radiusless is-borderless mb-3"
                v-for="event in slice"
                :key="event._id"
              >
                <div class="card-body py-5" :class="(new Date(event.event_end_date)).getTime() < (new Date()).getTime() ? 'past':''">
                  <div class="row">
                    <div
                      class="col-sm align-items-center d-none d-sm-flex align-items-center"
                    >
                      <div>
                        <div class="background-image rounded-circle" 
                          :style="
                            `background-image: url(https://api.shramiksanjal.org/${
                              event.image ? event.image.path : ''
                            })`
                          "
                        />
                      </div>
                    </div>
                    <div class="col-sm">
                      <span
                        class="badge badge-danger is-radiusless px-2 font-weight-light py-1"
                      >
                        <!-- Aug 12 - Aug 13 -->
                        {{ formatEventDateString(event.event_start_date, event.event_end_date) }}
                      </span>

                      <small class="ml-3">
                        <!-- 9:00 am - 9:00 pm -->
                        {{ convertTime(event.event_start_time) }} - {{ convertTime(event.event_end_time) }}
                      </small>
                      <h5 class="mt-3 font-weight-bold">{{ $localeContent(event, "title", $i18n.locale) }}</h5>
                      <p class="lead mb-0">
                        {{ $localeContent(event, "overview", $i18n.locale) }}
                      </p>
                    </div>
                    <div class="col-sm d-flex align-items-center">
                      <nuxt-link
                        tag="button"
                        :to="localePath(`/about-us/our-campaigns-and-events/${event._id}`)"
                        class="btn btn-danger is-radiusless font-weight-bold px-4 py-2 my-3"
                      >
                        {{ $t("details") }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <nav class="mb-5 mt-4" v-if="events.length > 0">
                  <ul class="pagination">
                    <li
                      class="page-item mr-1"
                      :class="{ disabled: !range.previous }"
                    >
                      <a
                        class="page-link is-radiusless"
                        href="#"
                        @click.prevent="goto(range.current - 1)"
                        >Previous</a
                      >
                    </li>
                    <li
                      class="page-item mx-1"
                      v-for="i in range.range"
                      :key="i"
                      :class="{ active: i == range.current }"
                      @click.prevent="goto(i)"
                    >
                      <a class="page-link" href="#">{{ i }}</a>
                    </li>
                    <li class="page-item ml-1" :class="{ disabled: !range.next }">
                      <a
                        class="page-link is-radiusless"
                        href="#"
                        @click.prevent="goto(range.current + 1)"
                        >Next</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>

            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="pattern mt-5" />
              <img
                src="https://via.placeholder.com/720x1080"
                class="img-fluid mt-5"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Events from "@/components/index/Events";

export default {
  // middleware({ query }) {
  //   if (query.country && query.country.length > 0) {
  //     switch (query.country.toLowerCase()) {
  //       case "nepal":
  //       case "uae":
  //       case "qatar":
  //       case "kuwait":
  //       case "saudi arabia":
  //       case "malaysia":
  //       case "others":
  //         break;
  //       default:
  //         $nuxt.error({ status: 404 });
  //         break;
  //     }
  //   } else {
  //     $nuxt.error({ status: 404 });
  //   }
  // },

  data() {
    return {
      past: "",
      events: [],
      range: {
        total_pages: -1,
        current: -1,
        previous: -1,
        next: -1,
        range: []
      }
    };
  },

  computed: {
    slice() {
      let perpage = 8;
      return this.events.slice(perpage* (this.range.current-1), perpage*this.range.current);
    }
  },

  methods: {
    run() {
      this.past = this.$route.query.past;
      this.events = [];
      this.$axios
        .post("/api/collections/get/events", {
          // filter: { country: this.country }
          sort: { event_end_date: -1 }
        })
        .then(({ data }) => {
          this.events = data.entries;
          if (this.events.length > 0) {
            // check if past events is set to true in query
            if(this.past && this.past=='true') {
              let now = new Date();
              this.events = this.events.filter(e => {
                return (new Date(e.event_end_date)).getTime() < now.getTime();
              });
            }


            this.range = this.$paginate({
              per: 8,
              limit: 5,
              total: data.total,
              current: 1
            });
          }
        });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    goto(page) {
      this.range = this.$paginate({
        per: 8,
        limit: 5,
        total: this.events.length,
        current: page
      });
      window.scrollTo({
        top: 450,
        behavior: "smooth"
      });
    },

    formatEventDateString(startDate, endDate) {
      let s = (startDate  && startDate !="") ? (new Date(startDate)).toLocaleString('default', { month: 'short' , day: '2-digit'}) : "";
      let e = (endDate  && endDate !="") ? (new Date(endDate)).toLocaleString('default', { month: 'short' , day: '2-digit'}) : "";
      if(e == "" || s == e) return s;
      return s + ' - ' + e;
    },

    convertTime(time) {
      if (!time || time == "") return "";
      let H = + time.substring(0, 2);
      let h = H % 12 || 12;
      let ampm = (H < 12 || H === 24) ? " am" : " pm";
      return h + time.substring(2) + ampm;
    },

  },

  created() {
    this.run();
  },

  watch: {
    $route: function(oldQuery, newQuery) {
      this.run();
    }
  },

  components: {
    Banner,
    Events
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
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

  .past {
    filter: opacity(0.85) grayscale(1);
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