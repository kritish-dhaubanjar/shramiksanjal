<template>
  <section>
    <div
      class="card is-radiusless is-borderless background-image px-3 bg-light my-5"
    >
      <div class="card-body" data-aos="fade-up">
        <h5 class="font-weight-bold mb-4 mt-3">CATEGORIES</h5>
        <table class="table">
          <tbody>
            <th scope="row">
              <nuxt-link :to="localePath('/reports/')">ALL</nuxt-link>
            </th>
            <th>
              <span class="float-right"
                ><em>{{ count }}</em></span
              >
            </th>

            <tr v-for="category in categories" :key="category._id">
              <th scope="row">
                <nuxt-link
                  :to="
                    localePath(`/reports/categories/${category.category_en}`)
                  "
                  class="text-uppercase"
                  >{{
                    $localeContent(category, "category", $i18n.locale)
                  }}</nuxt-link
                >
              </th>
              <th>
                <span class="float-right"
                  ><em>{{ category.count }}</em></span
                >
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      count: 0
    };
  },
  beforeCreate() {
    return this.$axios
      .post("/api/collections/get/Report", {
        populate: 1
      })
      .then(({ data }) => {
        data.entries.forEach(report => {
          report.categories.forEach(category => {
            let index = this.categories.findIndex(
              cat => cat.category_en == category.category_en
            );

            if (index > -1) {
              this.categories[index].count++;
            } else {
              this.categories.push({ ...category, count: 1 });
            }
          });

          this.count++;
        });
        // tag.count = data.total;
        // this.count += tag.count;
        // this.tags.push(tag);
        // return tag;
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
