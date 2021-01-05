<template>
  <section>
    <Banner :breadcrumb="{ name: $route.params.category + '\'s Videos' }" />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12 mb-5" v-if="videos.length > 0">
              <div class="youtube position-relative">
                <!-- :src="https://www.youtube.com/embed/Zu4R9dxgdxE" -->

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
                  <nuxt-link
                    :to="localePath(`/videos/categories/${tag}`)"
                    v-for="(tag, i) in video.tags"
                    :key="tag"
                    ><small class="text-uppercase"
                      >{{ tag
                      }}<span v-if="i != video.tags.length - 1">, </span>
                    </small></nuxt-link
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
            <div class="col-sm-6" v-for="video in slice" :key="video._id">
              <div class="card is-radiusless is-borderless mb-5">
                <div
                  @click="play(video)"
                  href="#"
                  class="background-image w-100 position-relative"
                  :style="
                    `background-image: url(https://img.youtube.com/vi/${video.youtube
                      .split('/')
                      .pop()
                      .split('=')
                      .pop()}/0.jpg);`
                  "
                >
                  <div
                    class="overlay d-flex h-100 w-100 align-items-center justify-content-center position-absolute"
                  >
                    <i class="las la-play la-4x text-danger" />
                  </div>
                </div>

                <!-- <div class="youtube position-relative">
                  <iframe
                    src="https://www.youtube.com/embed/Zu4R9dxgdxE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div> -->

                <div class="card-body pb-0">
                  <small class="text-muted text-uppercase">
                    <i class="las la-calendar-alt" />
                    {{ new Date(video._created * 1000).toDateString() }}
                    <!-- AUGUST 20, 2016 -->
                    <i class="las la-list ml-3" />
                    <a href="#" v-for="(tag, i) in video.tags" :key="tag"
                      ><small
                        >{{ tag
                        }}<span v-if="i != video.tags.length - 1">, </span>
                      </small></a
                    >
                  </small>

                  <a href="#" @click.prevent="play(video)">
                    <h5 class="font-weight-bold my-3">
                      {{ $localeContent(video, "title", $i18n.locale) }}
                    </h5>
                    <p>
                      {{ $localeContent(video, "overview", $i18n.locale) }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <nav class="mb-5 mt-4" v-if="videos.length > 0">
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
        <div class="col-lg-4">
          <Sidebar @play="play" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Sidebar from "@/components/videos/Sidebar";

export default {
  data() {
    return {
      videos: [],
      video: {
        youtube: "",
        tags: []
      },
      range: {
        total_pages: -1,
        current: -1,
        previous: -1,
        next: -1,
        range: []
      }
    };
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/videos", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        //
        this.videos = data.entries.filter(e => {
          return e.tags.includes(this.$route.params.category);
        });

        if (this.videos.length == 0) $nuxt.error({ status: 404 });

        if (this.videos.length > 0) {
          this.video = this.videos[0];
          this.range = this.$paginate({
            per: 8,
            limit: 5,
            total: data.total,
            current: 1
          });
        }
      });
  },

  computed: {
    slice() {
      let flag = 8 * (this.range.current - 1);
      return this.videos.slice(flag, flag + 8);
    }
  },

  methods: {
    play(video) {
      this.video = video;
      window.scrollTo({
        top: 450,
        behavior: "smooth"
      });
    },

    goto(page) {
      this.range = this.$paginate({
        per: 8,
        limit: 5,
        total: this.videos.length,
        current: page
      });
      window.scrollTo({
        top: 450,
        behavior: "smooth"
      });
    }
  },

  components: {
    Banner,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

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
