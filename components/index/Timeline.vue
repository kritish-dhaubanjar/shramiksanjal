<template>
  <div class="mb-5 pb-5 position-relative">
    <center class="mb-5">
      <h2 class="font-weight-bold">How we evolve?</h2>
    </center>
    <section id="timeline">
      <div class="d-flex top-row pl-5">
        <div class="card" v-for="time in timeline_odd" :key="time._id">
          <div class="card-body">
            <h4 class="text-danger font-weight-bold">
              <img
                class="img-fluid mr-2"
                src="/images/logo_sm.png"
                width="24px"
              />
              {{ $localeContent(time, "year", $i18n.locale) }}
            </h4>
            <p v-html="$localeContent(time, 'description', $i18n.locale)"></p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="divider d-flex">
        <hr />
      </div>
      <!--  -->
      <div>
        <div class="d-flex bottom-row pl-5">
          <div class="card" v-for="time in timeline_even" :key="time._id">
            <div class="card-body">
              <h4 class="text-danger font-weight-bold">
                <img
                  class="img-fluid mr-2"
                  src="/images/logo_sm.png"
                  width="24px"
                />
                {{ $localeContent(time, "year", $i18n.locale) }}
              </h4>
              <p v-html="$localeContent(time, 'description', $i18n.locale)"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->

    <section id="timeline-controls" class="text-center">
      <button class="btn btn-sm btn-danger ml-3" @click="next">
        <i class="las la-angle-left la-1x" />
      </button>

      <button class="btn btn-sm btn-danger mr-4" @click="prev">
        <i class="las la-angle-right la-1x" />
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
      vw: 0,
      timeline_odd: [],
      timeline_even: []
    };
  },

  created() {
    this.$axios
      .get("/api/collections/get/timeline")
      .then(({ data: { entries } }) => {
        let timeline = entries.sort((a, b) => +a.year_en - +b.year_en);
        this.timeline_odd = timeline.filter(
          (time, index) => (index + 1) % 2 == 1
        );
        this.timeline_even = timeline.filter(
          (time, index) => (index + 1) % 2 == 0
        );
      });
  },

  mounted() {
    this.vw = document
      .getElementsByTagName("body")[0]
      .getBoundingClientRect().width;
    window.addEventListener("resize", () => {
      this.vw = document
        .getElementsByTagName("body")[0]
        .getBoundingClientRect().width;
      timeline.style = `transform: translateX(0px)`;
    });
  },

  methods: {
    next() {
      this.debounce(() => {
        let timeline = document.getElementById("timeline");
        let left = timeline.getBoundingClientRect().left;
        if (left + 224 <= 0) {
          timeline.style = `transform: translateX(${left + 224}px)`;
        }
      }, 250);
    },

    prev() {
      this.debounce(() => {
        let timeline = document.getElementById("timeline");
        let left = timeline.getBoundingClientRect().left;
        let right = timeline.getBoundingClientRect().right;
        if (this.vw <= right) {
          timeline.style = `transform: translateX(${left - 224}px)`;
        }
      }, 250);
    },

    debounce(fxn, delay) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(fxn, delay);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
p {
  font-size: 15px;
}

.row {
  min-width: max-content;
}

#timeline {
  //   cursor: e-resize;
  min-width: max-content;
  transition: 256ms ease-out;
  transform: translateX(0px);
}

.card {
  max-width: 256px;
  min-width: 256px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 0;
  //
  margin-left: 100px;
  background-color: #edeff3;
  border: 0;
  min-height: 300px;
}

.divider {
  width: 100%;
  hr {
    border-width: 3px;
    width: 100%;
    // width: 3px;
  }
}

.top-row {
  .card:first-child {
    margin-left: 0;
  }

  .card {
    position: relative;
    &::after {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      bottom: -12px;
      border: 24px solid transparent;
      border-left: 24px solid #edeff3;
    }
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      background-color: #df1a17;
      border-radius: 100%;
      bottom: -20px;
      left: -4px;
      z-index: 3;
    }
  }
}

.bottom-row {
  .card {
    position: relative;
    &::before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      top: -12px;
      border: 24px solid transparent;
      border-left: 24px solid #edeff3;
    }

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      background-color: #df1a17;
      border-radius: 100%;
      top: -20px;
      left: -4px;
      z-index: 3;
    }
  }
}

button {
  border-radius: 100%;
}

#timeline-controls {
  position: absolute;
  top: 50%;
  //   top: calc(50% - 40px);
  width: 100vw;
  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 768px) {
  #timeline {
    padding-left: 64px;
  }
}
</style>
