<template>
  <section class="bg-light">
    <h5 class="font-weight-bold mb-5 bg-light pt-5 px-3">
      Our Campaigns & Events
    </h5>

    <div
      class="card is-radiusless is-borderless mb-1 bg-light"
      v-for="event in events"
      :key="event._id"
    >
      <div
        class="card-body"
        :class="
          new Date(event.event_end_date).getTime() < new Date().getTime()
            ? 'past'
            : ''
        "
      >
        <div class="row">
          <!-- <div
            class="col-sm align-items-center d-none d-sm-flex align-items-center"
          >
            <div>
              <div class="background-image rounded-circle" />
            </div>
          </div> -->
          <div class="col-sm-auto">
            <span
              class="badge badge-danger is-radiusless px-2 font-weight-light py-1"
            >
              <!-- Aug 12 - Aug 13 -->
              {{
                formatEventDateString(
                  event.event_start_date,
                  event.event_end_date
                )
              }}
            </span>

            <small class="ml-3">
              <!-- 9:00 am - 9:00 pm -->
              {{ convertTime(event.event_start_time) }} -
              {{ convertTime(event.event_end_time) }}
            </small>
            <h6 class="mt-3 font-weight-bold">
              {{ $localeContent(event, "title", $i18n.locale) }}
            </h6>
            <p class="mb-0">
              {{ $localeContent(event, "overview", $i18n.locale) }}
            </p>
          </div>
          <div class="col-12 d-flex align-items-center">
            <nuxt-link
              tag="button"
              :to="
                localePath(`/about-us/our-campaigns-and-events/${event._id}`)
              "
              class="btn btn-danger is-radiusless font-weight-bold px-4 py-2 my-3"
            >
              {{ $t("details") }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <hr class="mx-3" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: []
    };
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/events", {
        sort: { event_end_date: -1 }
      })
      .then(({ data }) => {
        this.events = data.entries.slice(0, 5);
      });
  },

  methods: {
    formatEventDateString(startDate, endDate) {
      let s =
        startDate && startDate != ""
          ? new Date(startDate).toLocaleString("default", {
              month: "short",
              day: "2-digit"
            })
          : "";
      let e =
        endDate && endDate != ""
          ? new Date(endDate).toLocaleString("default", {
              month: "short",
              day: "2-digit"
            })
          : "";
      if (e == "" || s == e) return s;
      return s + " - " + e;
    },

    convertTime(time) {
      if (!time || time == "") return "";
      let H = +time.substring(0, 2);
      let h = H % 12 || 12;
      let ampm = H < 12 || H === 24 ? " am" : " pm";
      return h + time.substring(2) + ampm;
    }
  }
};
</script>

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

.card:last-child {
  hr {
    display: none;
  }
}

p {
  font-size: 14px;
}
</style>
