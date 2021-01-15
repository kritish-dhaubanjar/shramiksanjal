<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Programs' }" />
    <div v-if="programs.length == 0" style="min-height: 512px"></div>
    <Program
      v-for="(program, i) in programs"
      :key="program._id"
      :content="program"
      class="mt-5"
      :class="{ 'mb-5 pb-5': i == programs.length - 1 }"
      :index="i + 1"
    />
    <Section />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Program from "@/components/about/Program";
import Section from "@/components/index/Section";

export default {
  data() {
    return {
      programs: []
    };
  },

  created() {
    this.$axios.get("/api/collections/get/programs").then(({ data }) => {
      this.programs = data.entries;
    });
  },

  components: {
    Banner,
    Program,
    Section
  }
};
</script>
