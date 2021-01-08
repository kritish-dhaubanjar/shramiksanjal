<template>
  <section class="pt-5">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-12 mb-5">
          <h1 class="font-weight-bold">
            We depend on well-led and well-managed grantees
          </h1>
        </div>

        <div
          class="col-sm-6 col-lg-4 col-xl mb-5"
          v-for="(value, i) in values"
          :key="value._id"
        >
          <h5 class="font-weight-bold">0{{ i + 1}}.</h5>
          <hr class="mb-5" />
          <h6 class="font-weight-bold mb-4">
            {{ $localeContent(value, "title", $i18n.locale) }}
          </h6>

          <p>
            {{ $localeContent(value, "content", $i18n.locale) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: []
    };
  },

  beforeCreate() {
    this.$axios.get("/api/collections/get/values").then(({ data }) => {
      this.values = data.entries;
    });
  }
};
</script>

<style scoped lang="scss">
h1,
p.lead {
  font-family: "Lato", sans-serif;
  //   color: #2a2c57;
}

section {
  background-color: #ffe12a;
}

hr {
  border-color: #000;
}
</style>
