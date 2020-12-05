<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/includes/Footer";
import Navbar from "@/components/includes/Navbar";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
