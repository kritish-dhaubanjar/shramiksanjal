<template>
  <section>
    <div class="jumbotron mb-0 text-center">
      <h1 class="mb-4">{{ breadcrumb.name }}</h1>
      <h6>
        <nuxt-link :to="localePath('index')">Home</nuxt-link>
        <i class="las la-arrow-right mx-2" /> {{ breadcrumb.name }}
      </h6>
    </div>
  </section>
</template>

<script>
export default {
  props: ["breadcrumb"]
};
</script>

<style scoped>
h1,
h6 {
  font-family: "Poppins", sans-serif;
}
.jumbotron {
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
