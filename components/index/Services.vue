<template>
  <section class="pt-5">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-12 mb-5" data-aos="fade-up">
          <h1 class="font-weight-bold">Our Values</h1>
          <h5 class="font-weight-bold">
            We respect people, value diversity and are committed to workers’
            dignity, power and safety.
          </h5>
        </div>

        <div
          class="col-sm-6 col-lg-4 col-xl mb-5"
          v-for="value in values"
          :key="value._id"
          data-aos="flip-left"
        >
          <h5 class="font-weight-bold">
            {{ $localeContent(value, "title", $i18n.locale) }}
          </h5>
          <hr class="mb-4" />

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
  background-color: #9bd5e4;
}

hr {
  border-color: #000;
}
</style>
