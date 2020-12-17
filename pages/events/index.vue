<template>
  <section class="bg-light">
    <Banner />
    <div class="container-fluid">
      <Events />
    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Events from "@/components/index/Events";

export default {
  components: {
    Banner,
    Events
  }
};
</script>
