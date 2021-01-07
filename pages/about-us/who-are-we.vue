<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Who are We?' }" />
    <About :content="who" />
    <!-- <Stats /> -->
    <!-- <Services /> -->
    <!-- <History /> -->
    <!-- <About /> -->
    <Section />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import About from "@/components/index/About";
import Services from "@/components/index/Services";
import Section from "@/components/index/Section";
//
import Stats from "@/components/about/Stats";
import History from "@/components/about/History";

export default {
  data() {
    return {
      who: {}
    };
  },

  // nuxtI18n: {
  //   paths: {
  //     en: "/about-us",
  //     es: "/sobre"
  //   }
  // },

  beforeCreate() {
    this.$axios
      .get(
        "/api/singletons/get/who?token=account-908ef6508fd73bca880c1e9cfbb052"
      )
      .then(({ data }) => {
        this.who = data;
      });
  },

  components: {
    Banner,
    About,
    Services,
    Section,
    //
    Stats,
    History
  }
};
</script>
