<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Team' }" />
    <History />
    <Section />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Section from "@/components/index/Section";
import History from "@/components/about/History";

export default {
  components: {
    Banner,
    Section,
    History
  }
};
</script>
