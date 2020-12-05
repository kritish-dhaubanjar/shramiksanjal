<template>
  <div>
    <Carousels />
    <Introduction />
    <About />
    <Services />
    <News />
    <Events />
    <Section />
  </div>
</template>

<script>
import Carousels from "@/components/index/Carousels";
import Introduction from "@/components/index/Introduction";
import Services from "@/components/index/Services";
import About from "@/components/index/About";
import News from "@/components/index/News";
import Events from "@/components/index/Events";
import Section from "@/components/index/Section";

export default {
  components: {
    Carousels,
    Introduction,
    Services,
    About,
    News,
    Events,
    Section
  }
};
</script>
