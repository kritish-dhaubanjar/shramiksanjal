<template>
  <div>
    <Carousels />
    <About />
    <News />
    <Events />
    <Section />
  </div>
</template>

<script>
import Carousels from "@/components/index/Carousels";
import About from "@/components/index/About";
import News from "@/components/index/News";
import Events from "@/components/index/Events";
import Section from "@/components/index/Section";

export default {
  components: {
    Carousels,
    About,
    News,
    Events,
    Section
  }
};
</script>
