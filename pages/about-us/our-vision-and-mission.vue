<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Vision & Mission' }" />
    <!--  -->
    <div class="pt-5">
      <About :content="vision" />
    </div>
    <!--  -->
    <div class="pb-5 mb-4">
      <About :content="mission" />
    </div>
    <!--  -->
    <Stats />
    <Services />
    <!-- <History /> -->
    <Section />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import About from "@/components/about/About";
import Services from "@/components/index/Services";
import Section from "@/components/index/Section";
//
import Stats from "@/components/about/Stats";
import History from "@/components/about/History";

export default {
  data() {
    return {
      vision: {},
      mission: {}
    };
  },

  // nuxtI18n: {
  //   paths: {
  //     en: "/about-us",
  //     es: "/sobre"
  //   }
  // },

  beforeCreate() {
    this.$axios.get("/api/singletons/get/vision").then(({ data }) => {
      this.vision = data;
    });

    this.$axios.get("/api/singletons/get/mission").then(({ data }) => {
      this.mission = data;
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
