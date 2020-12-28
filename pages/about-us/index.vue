<template>
  <section class="bg-light">
    <Banner />
    <About />
    <Stats />
    <Services />
    <History />
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
  nuxtI18n: {
    paths: {
      en: "/about-us",
      es: "/sobre"
    }
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
