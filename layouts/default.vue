<template>
  <div id="app">
    <SideNav :show="show" @hide="show = false" />
    <main>
      <Headerbar />
      <Navbar @show="show = true" />
      <nuxt />
      <Footer />
    </main>
  </div>
</template>

<script>
import SideNav from "@/components/includes/SideNav";
import Headerbar from "@/components/includes/Headerbar";
import Navbar from "@/components/includes/Navbar";
import Footer from "@/components/includes/Footer";

export default {
  data() {
    return {
      show: false
    };
  },

  created() {
    this.$router.afterEach(() => {
      this.show = false;
    });
  },

  watch: {
    show() {
      if (this.show) {
        document.body.classList = "sidebar";
      } else {
        document.body.classList = "";
      }
    }
  },

  components: {
    Headerbar,
    Navbar,
    Footer,
    SideNav
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
