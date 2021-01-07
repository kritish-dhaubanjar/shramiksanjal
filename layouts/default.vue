<template>
  <div id="app">
    <SideNav :show="show" @hide="show = false" />
    <main>
      <Headerbar :socials="socials" />
      <Navbar @show="show = true" />
      <nuxt />
      <Footer :socials="socials" />
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
      show: false,
      socials: {
        Facebook: "",
        Youtube: "",
        Twitter: "",
        AnchorFM: "",
        Linkedin: ""
      }
    };
  },

  created() {
    this.$router.afterEach(() => {
      this.show = false;
    });

    this.$axios.get("/api/singletons/get/socials").then(({ data }) => {
      this.socials = data;
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
