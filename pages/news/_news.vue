<template>
  <section>
    <Jumbotron :news="news" />

    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <Content :news="news" />
          <div class="my-5">
            <Comments :comments="comments" :news_id="$route.params.news" />
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
  data() {
    return {
      news: {
        author: "",
        tags: [],
        image: { path: "" }
      },

      comments: []
    };
  },
  created() {
    this.$axios
      .post("/api/collections/get/news", {
        filter: {
          _id: this.$route.params.news
        }
      })
      .then(({ data }) => {
        if (data.entries.length == 0) this.$nuxt.error({ status: 404 });
        else this.news = data.entries.pop();
      });

    this.$axios
      .post("/api/collections/get/comments", {
        filter: {
          news: this.$route.params.news
        }
      })
      .then(({ data }) => {
        this.comments = data.entries;
      });
  },
  components: {
    Jumbotron,
    Content,
    Comments,
    Sidebar
  }
};
</script>

<style scoped lang="scss"></style>
