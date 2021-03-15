<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Programs' }" />
    <div v-if="programs.length == 0" style="min-height: 512px"></div>
    <Program
      data-aos="fade-up"
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

  head() {
    return {
      title: "Shramiksanjal :: Our Programs",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We build a community of grassroots fellow migrant workers from different sectors including constructions, hotel hospitality, Retail, Domestic Services. We believe building worker communities enable us to drive and thrive. This is the community where members feel free to speak the voice of their lived experiences, the natural way they think. Coming together as a community comforts us to be united, connected, feel protected, and enables us to set the different narrative of being equal and empowered. We encourage our members to build an inclusive community of grassroots from diverse sectors, a profession that allows us to feel a sense of belonging to each other."
        }
      ]
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
