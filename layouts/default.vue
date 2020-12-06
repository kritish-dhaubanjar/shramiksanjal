<template>
  <div>
    <Headerbar />
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Headerbar from "@/components/includes/Headerbar";
import Navbar from "@/components/includes/Navbar";
import Footer from "@/components/includes/Footer";

export default {
  components: {
    Headerbar,
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
