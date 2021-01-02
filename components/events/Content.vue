<template>
  <section>
    <div class="html" v-html="html" />
  </section>
</template>

<script>
export default {
  props: ["event"],

  computed: {
    html() {
      let wysiwyg = document.createElement("div");
      wysiwyg.innerHTML = this.$localeContent(
        this.event,
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
        node.setAttribute(
          "src",
          `https://api.shramiksanjal.org/${node.getAttribute("src")}`
        );
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
