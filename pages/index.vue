<template>
  <div>
    <Marquee />
    <Carousels />
    <Introduction data-aos="fade-up" />
    <About :content="who" data-aos="fade-up" />
    <News />
    <Services />
    <Videos />
    <Events data-aos="fade-up" />
    <Section />
  </div>
</template>

<script>
import Marquee from "@/components/index/Marquee";
import Carousels from "@/components/index/Carousels";
import Introduction from "@/components/index/Introduction";
import Services from "@/components/index/Services";
import About from "@/components/index/About";
import News from "@/components/index/News";
import Videos from "@/components/index/Videos";
import Events from "@/components/index/Events";
import Section from "@/components/index/Section";

export default {
  data() {
    return {
      who: {}
    };
  },

  beforeCreate() {
    this.$axios.get("/api/singletons/get/who").then(({ data }) => {
      this.who = data;
    });
  },

  components: {
    Marquee,
    Carousels,
    Introduction,
    Services,
    About,
    News,
    Videos,
    Events,
    Section
  }
};
</script>
