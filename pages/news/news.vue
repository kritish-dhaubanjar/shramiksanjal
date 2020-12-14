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
      </div>
    </div>
  </section>
</template>

<script>
import Jumbotron from "@/components/news/Jumbotron";
import Content from "@/components/news/Content";
import Comments from "@/components/news/Comments";

export default {
  components: {
    Jumbotron,
    Content,
    Comments
  }
};
</script>
