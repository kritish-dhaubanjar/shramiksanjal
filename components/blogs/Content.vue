<template>
  <section>
    <div class="html" v-html="html" />

    <div class="my-3 py-5">
      <div class="card flex-row is-radiusless">
        <nuxt-link
          :to="localePath(`/blogs/${meta.prev._id}`)"
          tag="div"
          class="card-body py-5"
          v-if="meta.prev"
        >
          <div class="text-left">
            <i class="las la-arrow-left" />
            <small class="font-weight-bold text-muted">REVIOUS STORY</small>
          </div>
          <h6 class="mb-0 mt-2">
            {{ $localeContent(meta.prev, "title", $i18n.locale) }}
          </h6>
        </nuxt-link>
        <!--  -->
        <nuxt-link
          :to="localePath(`/blogs/${meta.next._id}`)"
          tag="div"
          class="card-body py-5 border-left"
          v-if="meta.next"
        >
          <div class="text-right">
            <small class="font-weight-bold text-muted">NEXT STORY</small>
            <i class="las la-arrow-right" />
          </div>
          <h6 class="mb-0 mt-2">
            {{ $localeContent(meta.next, "title", $i18n.locale) }}
          </h6>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["news", "meta"],

  computed: {
    html() {
      let wysiwyg = document.createElement("div");
      wysiwyg.innerHTML = this.$localeContent(
        this.news,
        "content",
        this.$i18n.locale
      );

      wysiwyg.querySelectorAll("iframe").forEach(node => {
        let div = document.createElement("div");
        div.className = "my-5 youtube";
        div.appendChild(node.cloneNode(true));
        node.parentElement.replaceChild(div, node);
      });

      wysiwyg.querySelectorAll("img").forEach(node => {
        node.className = "img-fluid my-5";
        if (!node.getAttribute("src").includes("http")) {
          node.setAttribute(
            "src",
            `https://api.shramiksanjal.org/${node.getAttribute("src")}`
          );
        }
      });

      wysiwyg.querySelectorAll("table").forEach(node => {
        let div = document.createElement("div");
        div.className = "table-responsive";
        div.appendChild(node.cloneNode(true));
        node.parentElement.replaceChild(div, node);
      });

      return wysiwyg.innerHTML;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

// .html {
//   .youtube {
//     width: 100%;
//     position: relative;
//     padding-bottom: 53%;
//   }

//   p {
//     line-height: 190%;
//   }

//   iframe {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }
// }

.card-body {
  width: 50%;
  transition: 128ms;

  &:hover {
    small {
      color: $primary !important;
    }
    cursor: pointer;
    transition: 128ms;
    color: $primary;
  }
}

.blockquote {
  background-color: #fafafa;
  padding: 24px 24px;
  border-left: 3px solid #2f2e41;
  p {
    font-size: 24px;
    line-height: 150%;
    color: #222;
  }

  footer {
    margin-top: 16px;
  }
}
</style>
