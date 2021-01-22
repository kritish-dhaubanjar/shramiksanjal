<template>
  <section>
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light mb-5 py-4"
    >
      <div class="card-body">
        <h5 class="font-weight-bold mb-4 mt-3">RECENT VIDEOS</h5>

        <div
          @click.prevent="$emit('play', video)"
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
    <!--  -->
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light my-5"
    >
      <div class="card-body">
        <h5 class="font-weight-bold mb-4 mt-3">CATEGORIES</h5>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">
                <nuxt-link :to="localePath('/videos/')">ALL</nuxt-link>
              </th>
              <th>
                <span class="float-right"
                  ><em>{{ count }}</em></span
                >
              </th>
            </tr>
            <tr v-for="tag in tags" :key="tag._id">
              <th scope="row">
                <nuxt-link
                  class="text-uppercase"
                  :to="localePath(`/videos/categories/${tag.tag_en}`)"
                  >{{ $localeContent(tag, "tag", $i18n.locale) }}</nuxt-link
                >
              </th>
              <th>
                <span class="float-right"
                  ><em>{{ tag.count }}</em></span
                >
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--  -->
    <div class="text-center py-5 bg-light">
      <img src="https://via.placeholder.com/300x510" class="img-fluid" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
      tags: [],
      count: 0
    };
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/videos", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        //
        let tags = data.entries.map(e => e.tags);

        tags.forEach(tag => {
          if (tag.length > 0)
            tag.forEach(e => {
              this.count++;
              let index = this.tags.findIndex(t => t.tag_en == e);
              if (index == -1) this.tags.push({ tag_en: e, count: 1 });
              else {
                this.tags[index].count++;
              }
            });
        });

        this.videos = data.entries.slice(0, 5);
      });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

tr:first-child {
  th {
    border-top-width: 3px;
  }
}

.col-lg-4 {
  .card {
    table {
      th {
        font-weight: light;
      }
      a {
        font-weight: lighter;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.recent {
  transition: 128ms;
  h6 {
    color: #2a2c57;
  }
  &:hover {
    cursor: pointer;
    h6 {
      transition: 128ms;
      color: $primary;
    }
  }

  &:last-child {
    hr {
      display: none;
    }
  }
}
.news-image {
  flex: 100px 0 0;
  min-height: 100px;
  height: 100px;
  max-height: 100px;
}
</style>
