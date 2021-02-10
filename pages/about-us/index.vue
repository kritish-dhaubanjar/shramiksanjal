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

  head() {
    return {
      title: `Shramiksanjal :: Who are We?`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Shramik Sanjal (SS), is a membership-based a worker-led network of migrant workers, most of whom are low-income migrants in the Gulf states and Malaysia. We are a voluntary network that aspires to be the voice of the voiceless, working for the well-being of fellow migrant workers. We work closely to educate, empower, and support migrant workers and advocates for their right to live with dignity and work in a decent and safe condition."
        }
      ]
    };
  },

  // nuxtI18n: {
  //   paths: {
  //     en: "/about-us",
  //     es: "/sobre"
  //   }
  // },

  beforeCreate() {
    this.$axios.get("/api/singletons/get/who").then(({ data }) => {
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
