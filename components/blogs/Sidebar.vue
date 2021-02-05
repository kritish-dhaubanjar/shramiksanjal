<template>
  <section>
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light mb-5 py-4"
    >
      <div class="card-body">
        <h5 class="font-weight-bold mb-4 mt-3">RECENT BLOGS</h5>

        <nuxt-link
          :to="localePath(`/blogs/${article._id}`)"
          tag="div"
          v-for="article in news"
          :key="article._id"
          class="recent"
        >
          <div class="d-flex">
            <div class="news-image mr-3">
              <div
                class="background-image w-100 h-100"
                :style="
                  `background-image: url(https://api.shramiksanjal.org/${
                    article.image ? article.image.path : ''
                  })`
                "
              />
            </div>

            <div>
              <h6 class="font-weight-bold mb-0 text-uppercase">
                {{ $localeContent(article, "title", $i18n.locale) }}
              </h6>
              <small class="text-small text-muted text-uppercase">{{
                new Date(article._created * 1000).toDateString()
              }}</small>
            </div>
          </div>
          <hr />
        </nuxt-link>
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
            <th scope="row">
              <nuxt-link :to="localePath('/blogs/')">ALL</nuxt-link>
            </th>
            <th>
              <span class="float-right"
                ><em>{{ count }}</em></span
              >
            </th>
            <tr v-for="tag in tags" :key="tag._id">
              <th scope="row">
                <nuxt-link
                  :to="localePath(`/blogs/categories/${tag.tag_en}`)"
                  class="text-uppercase"
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
    <div class="text-center mb-5">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-12" ref="twitterBlog">
          <a
            class="twitter-timeline"
            href="https://twitter.com/ShramikSanjal"
            data-height="512"
            data-theme="light"
          >
            Tweets by ShramikSanjal
          </a>
        </div>
        <div class="col-12 col-sm-6 col-lg-12">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshramik.sanjal&tabs=timeline&height=512&width=512&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            height="512"
            width="512"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <!-- <a
        class="twitter-timeline"
        data-height="512"
        data-dnt="true"
        data-theme="light"
        href="https://twitter.com/ShramikSanjal?ref_src=twsrc%5Etfw"
        >Tweets by ShramikSanjal</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script> -->
      <!-- <img src="https://via.placeholder.com/300x510" class="img-fluid" /> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      tags: [],
      count: 0
    };
  },
  beforeCreate() {
    this.$axios
      .post("/api/collections/get/news", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        this.news = data.entries.slice(0, 5);
      });

    this.$axios
      .post("/api/collections/get/tags", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        data.entries.map(tag => {
          return this.$axios
            .post("/api/collections/get/news", {
              filter: { "tags.display": tag.tag_en }
            })
            .then(({ data }) => {
              tag.count = data.total;
              this.count += tag.count;
              this.tags.push(tag);
              return tag;
            });
        });
      });
  },

  mounted() {
    this.$nextTick(() => {
      twttr.ready().then(e => {
        e.widgets.load(this.$refs.twitterEvent);
      }, 0);
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
iframe {
  width: 100%;
}
</style>
