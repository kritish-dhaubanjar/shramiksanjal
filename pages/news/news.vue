<template>
  <section>
    <Jumbotron />

    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <Content />
          <div class="my-5">
            <Comments />
          </div>
        </div>
        <!--  -->
        <div class="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Jumbotron from "@/components/news/Jumbotron";
import Content from "@/components/news/Content";
import Comments from "@/components/news/Comments";
import Sidebar from "@/components/news/Sidebar";

export default {
  components: {
    Jumbotron,
    Content,
    Comments,
    Sidebar
  }
};
</script>

<style scoped lang="scss"></style>
