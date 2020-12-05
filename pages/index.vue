<template>
  <div>
    <About />
    <News />
    <Events />
    <Section />
  </div>
</template>

<script>
import About from "@/components/index/About";
import News from "@/components/index/News";
import Events from "@/components/index/Events";
import Section from "@/components/index/Section";

export default {
  components: {
    About,
    News,
    Events,
    Section
  }
};
</script>
