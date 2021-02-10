<template>
  <section>
    <Banner
      :breadcrumb="{ name: `${$route.params.category.toUpperCase()} BLOGS` }"
    />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-sm-6" v-for="article in news" :key="article._id">
              <div class="card is-radiusless is-borderless mb-5">
                <div
                  class="background-image w-100"
                  :style="
                    `background-image: url(https://api.shramiksanjal.org/${
                      article.image ? article.image.path : ''
                    })`
                  "
                />

                <div class="card-body pb-0">
                  <small class="text-muted text-uppercase">
                    <i class="las la-calendar-alt" />
                    {{ new Date(article._created * 1000).toDateString() }}
                    <i class="las la-list ml-3" />
                    <a href="#" v-if="article.tags"
                      ><small class="text-uppercase">
                        {{ $localeContent(article.tags, "tag", $i18n.locale) }}
                      </small></a
                    >
                  </small>

                  <nuxt-link :to="localePath(`/blogs/${article._id}`)">
                    <h4 class="font-weight-bold my-3" :class="$i18n.locale">
                      {{ $localeContent(article, "title", $i18n.locale) }}
                    </h4>
                  </nuxt-link>

                  <p :class="$i18n.locale">
                    {{
                      trim($localeContent(article, "overview", $i18n.locale))
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <nav class="mb-5 mt-4" v-if="news.length > 0">
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
          <Sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Sidebar from "@/components/blogs/Sidebar";

export default {
  head() {
    return {
      title: `Shramiksanjal :: ${this.$route.params.category} Blogs`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Shramik Sanjal unites, educated and empowers Nepalese migrant workers. We provide them with information, knowledge, skills and confidence to raise their voice for the workers’ Unity, Dignity, Power & Safety."
        }
      ]
    };
  },

  middleware({ params }) {
    // fetch("https://api.shramiksanjal.org/api/collections/get/tags", {
    //   body: JSON.stringify({
    //     filter: { tag_en: params.category.toUpperCase() }
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });

    fetch("https://api.shramiksanjal.org/api/collections/get/tags", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filter: { tag_en: params.category }
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.total == 0) $nuxt.error({ status: 404 });
      });
  },

  data() {
    return {
      country: "",
      news: [],
      range: {
        total_pages: -1,
        current: -1,
        previous: -1,
        next: -1,
        range: []
      }
    };
  },

  created() {
    this.run();
  },

  methods: {
    run() {
      this.news = [];
      this.$axios
        .post("/api/collections/get/news", {
          filter: { "tags.display": this.$route.params.category },
          sort: { _created: -1 },
          populate: true
        })
        .then(({ data }) => {
          if (data.total == 0) $nuxt.error({ status: 404 });

          this.news = data.entries;

          if (this.news.length > 0) {
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
        total: this.news.length,
        current: page
      });
      window.scrollTo({
        top: 450,
        behavior: "smooth"
      });
    },

    trim(content) {
      return content.length > 128 ? content.slice(0, 128) + "..." : content;
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
p {
  font-family: "Noto Sans";
  font-size: 17px;
  color: #333;
  line-height: 160%;
}
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
