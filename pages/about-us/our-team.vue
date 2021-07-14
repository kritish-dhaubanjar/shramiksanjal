<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Team' }" />
    <History data-aos="fade-up" />
    <Section />
    <FAB />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Section from "@/components/index/Section";
import History from "@/components/about/History";
import FAB from "@/components/about/FAB";

export default {
  head() {
    return {
      title: `Shramiksanjal :: Our Team`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We are a team led by self-motivated, low-wage migrant workers in the Gulf states & Malaysia."
        }
      ]
    };
  },
  components: {
    Banner,
    Section,
    History,
    FAB
  }
};
</script>
