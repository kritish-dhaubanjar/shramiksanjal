<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Events' }" />
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
