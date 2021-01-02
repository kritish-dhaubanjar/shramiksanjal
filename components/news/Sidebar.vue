<template>
  <section>
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light mb-5 py-4"
    >
      <div class="card-body">
        <h5 class="font-weight-bold mb-4 mt-3">RECENT NEWS</h5>

        <nuxt-link
          :to="localePath(`/news/${article._id}`)"
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
                  `background-image: url(http://api.shramiksanjal.org/${
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
      news: []
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
