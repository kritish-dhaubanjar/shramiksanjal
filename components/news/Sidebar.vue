<template>
  <section>
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light mb-5 py-4"
    >
      <div class="card-body">
        <h5 class="font-weight-bold mb-4 mt-3">RECENT NEWS</h5>

        <nuxt-link
          to="/news/news"
          tag="div"
          v-for="i in 5"
          :key="i"
          class="recent"
        >
          <div class="d-flex">
            <div class="news-image mr-3">
              <div
                class="background-image w-100 h-100"
                style="background-image: url(https://via.placeholder.com/1280x720)"
              />
            </div>

            <div>
              <h6 class="font-weight-bold mb-0">
                HISTORIES OF ARTIFICIAL INTELLIGENCE
              </h6>
              <small class="text-small text-muted">MARCH 5,2020</small>
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
