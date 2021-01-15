<template>
  <section>
    <Jumbotron :news="news" />

    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-8">
          <Content :news="news" :meta="meta" />
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
import Jumbotron from "@/components/blogs/Jumbotron";
import Content from "@/components/blogs/Content";
import Comments from "@/components/blogs/Comments";
import Sidebar from "@/components/blogs/Sidebar";

export default {
  data() {
    return {
      news: {
        author: "",
        tags: [],
        image: { path: "" }
      },

      meta: {
        prev: null,
        next: null
      },

      comments: []
    };
  },
  created() {
    this.$axios.get("/api/collections/get/news").then(({ data }) => {
      let news = data.entries.findIndex(
        news => news._id == this.$route.params.news
      );

      if (news > -1) {
        this.news = data.entries[news];

        // NEXT & PREV
        if (news == 0) {
          this.meta.prev = null;
        } else {
          this.meta.prev = data.entries[news - 1];
        }

        if (news == data.entries.length - 1) {
          this.meta.next = null;
        } else {
          this.meta.next = data.entries[news + 1];
        }

        //
      } else {
        this.$nuxt.error({ status: 404 });
      }
    });

    // this.$axios
    //   .post("/api/collections/get/news", {
    //     filter: {
    //       _id: this.$route.params.news
    //     }
    //   })
    //   .then(({ data }) => {
    //     if (data.entries.length == 0) this.$nuxt.error({ status: 404 });
    //     else this.news = data.entries.pop();
    //   });

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
