<template>
  <section class="my-5">
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-lg-12 mb-5">
          <h2 class="font-weight-bold">Recent News</h2>
          <hr />
          <p class="font-weight-bold">
            Enjoy latest successful stories from our journal.
          </p>
        </div>

        <div class="col-lg-5 col-md-7" v-if="news[0]">
          <div class="card is-radiusless is-borderless mb-5">
            <div
              class="background-image w-100"
              :style="
                `background-image: url(http://api.shramiksanjal.org/${
                  news[0].image ? news[0].image.path : ''
                })`
              "
            />

            <div class="card-body pb-0">
              <small class="text-muted text-uppercase">
                <i class="las la-calendar-alt" />
                {{ new Date(news[0]._created * 1000).toDateString() }}
                <i class="las la-list ml-3" />
                <a href="#" v-for="(tag, i) in news[0].tags" :key="tag"
                  ><small class="text-uppercase"
                    >{{ tag
                    }}<span v-if="i != news[0].tags.length - 1">, </span>
                  </small></a
                >
              </small>

              <nuxt-link :to="localePath(`/news/${news[0]._id}`)">
                <h4 class="font-weight-bold my-3" :class="$i18n.locale">
                  {{ $localeContent(news[0], "title", $i18n.locale) }}
                </h4>
              </nuxt-link>

              <p :class="$i18n.locale">
                {{ $localeContent(news[0], "overview", $i18n.locale) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-5">
          <div class="row">
            <!--  -->
            <div class="col-md-12 col-sm-6" v-if="news[1]">
              <div class="card is-radiusless is-borderless">
                <div
                  class="background-image w-100"
                  :style="
                    `background-image: url(http://api.shramiksanjal.org/${
                      news[1].image ? news[1].image.path : ''
                    })`
                  "
                />
                <div class="card-body px-0">
                  <nuxt-link :to="localePath(`/news/${news[1]._id}`)">
                    <h6
                      class="font-weight-bold text-uppercase"
                      :class="$i18n.locale"
                    >
                      {{ $localeContent(news[1], "title", $i18n.locale) }}
                    </h6>
                  </nuxt-link>
                  <a href="#" v-for="(tag, i) in news[1].tags" :key="tag"
                    ><small class="text-uppercase"
                      >{{ tag
                      }}<span v-if="i != news[1].tags.length - 1">, </span>
                    </small></a
                  >
                </div>
              </div>
            </div>
            <!--  -->
            <div class="col-md-12 col-sm-6 mb-4" v-if="news[2]">
              <div class="card is-radiusless is-borderless">
                <div
                  class="background-image w-100"
                  :style="
                    `background-image: url(http://api.shramiksanjal.org/${
                      news[2].image ? news[2].image.path : ''
                    })`
                  "
                />
                <div class="card-body px-0">
                  <nuxt-link :to="localePath(`/news/${news[2]._id}`)">
                    <h6
                      class="font-weight-bold text-uppercase"
                      :class="$i18n.locale"
                    >
                      {{ $localeContent(news[2], "title", $i18n.locale) }}
                    </h6>
                  </nuxt-link>
                  <a href="#" v-for="(tag, i) in news[2].tags" :key="tag"
                    ><small class="text-uppercase"
                      >{{ tag
                      }}<span v-if="i != news[2].tags.length - 1">, </span>
                    </small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card is-radiusless is-borderless background-image">
            <div class="card-body">
              <h5 class="font-weight-bold mb-4 mt-3">CATEGORIES</h5>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row"><a href="#">Finance</a></th>
                    <th>
                      <span class="float-right"><em>4</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Inclusion</a></th>
                    <th>
                      <span class="float-right"><em>2</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Leisure</a></th>
                    <th>
                      <span class="float-right"><em>2</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Sport</a></th>
                    <th>
                      <span class="float-right"><em>2</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Health</a></th>
                    <th>
                      <span class="float-right"><em>1</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Strategy</a></th>
                    <th>
                      <span class="float-right"><em>3</em></span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">Town News</a></th>
                    <th>
                      <span class="float-right"><em>2</em></span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
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
      news: []
    };
  },

  created() {
    this.$axios
      .post("/api/collections/get/news", {
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        this.news = data.entries;
      });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
a {
  h4 {
    font-family: "Lato", sans-serif !important;
  }
}
hr {
  width: 128px;
  border-top: 3px solid $primary;
}

.col-lg-5 {
  .background-image {
    min-height: 380px;
    background-image: url(https://via.placeholder.com/485x325);
  }

  .card-body {
    border-left: 2px solid $primary;
  }
}

.col-lg-3 {
  .background-image {
    min-height: 200px;
    background-image: url(https://via.placeholder.com/485x325);
  }
}

tr:first-child {
  th {
    border-top-width: 3px;
  }
}

.col-lg-4 {
  .card {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://via.placeholder.com/485x325");

    color: #fff;
    table {
      color: #fff;
      th {
        font-weight: light;
      }
      a {
        font-weight: lighter;
        color: #fff;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
