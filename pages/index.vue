<template>
  <div>
    <News />
    <Events />
    <Section />
  </div>
</template>

<script>
import News from "@/components/index/News";
import Events from "@/components/index/Events";
import Section from "@/components/index/Section";

export default {
  components: {
    News,
    Events,
    Section
  }
};
</script>
