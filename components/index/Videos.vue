<template>
  <section class="my-5">
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-lg-12 mb-5">
          <h2 class="font-weight-bold">Recent Videos</h2>
          <hr />
          <p class="font-weight-bold">
            Enjoy latest successful stories from our journal.
          </p>
        </div>

        <div class="col-md-8 mb-5" v-if="videos.length > 0">
          <div class="youtube position-relative" ref="youtube">
            <iframe
              :src="
                `https://www.youtube.com/embed/${video.youtube
                  .split('/')
                  .pop()
                  .split('=')
                  .pop()}`
              "
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div class="card-body pb-0">
            <small class="text-muted text-uppercase">
              <i class="las la-calendar-alt" />
              {{ new Date(video._created * 1000).toDateString() }}
              <i class="las la-list ml-3" />
              <a href="#" v-for="(tag, i) in video.tags" :key="tag"
                ><small class="text-uppercase"
                  >{{ tag }}<span v-if="i != video.tags.length - 1">, </span>
                </small></a
              >
            </small>

            <div>
              <h5 class="font-weight-bold my-3">
                {{ $localeContent(video, "title", $i18n.locale) }}
              </h5>
              <p>
                {{ $localeContent(video, "overview", $i18n.locale) }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div
            @click.prevent="play(video)"
            v-for="video in videos"
            :key="video._id"
            class="recent"
          >
            <div class="d-flex">
              <div class="news-image mr-3">
                <div
                  class="background-image w-100 h-100"
                  :style="
                    `background-image: url(https://img.youtube.com/vi/${video.youtube
                      .split('/')
                      .pop()
                      .split('=')
                      .pop()}/0.jpg);`
                  "
                />
              </div>

              <div>
                <h6 class="font-weight-bold mb-0 text-uppercase">
                  {{ $localeContent(video, "title", $i18n.locale) }}
                </h6>
                <small class="text-small text-muted text-uppercase">{{
                  new Date(video._created * 1000).toDateString()
                }}</small>
              </div>
            </div>
            <hr />
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
      video: {},
      videos: []
    };
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/videos", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        this.videos = data.entries.slice(0, 5);

        if (this.videos.length > 0) {
          this.video = this.videos[0];
        }
      });
  },

  methods: {
    play(video) {
      this.video = video;
      window.scrollTo({
        top: this.$refs.youtube.offsetParent.offsetTop - 100,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
p {
  font-family: "Ubuntu";
  font-size: 17px;
  color: #333;
  line-height: 180%;
}
.background-image {
  min-height: 250px;
  // background-image: url(https://via.placeholder.com/485x325);
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

.recent {
  &:hover {
    cursor: pointer;
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

.news-image {
  flex: 100px 0 0;
  min-height: 100px;
  height: 100px;
  max-height: 100px;
  .background-image {
    min-height: unset !important;
  }
}
</style>
