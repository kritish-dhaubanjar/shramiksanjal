<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/includes/Footer";

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
