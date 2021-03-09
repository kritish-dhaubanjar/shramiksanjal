<template>
  <section class="bg-light">
    <Banner
      :breadcrumb="{ name: $localeContent(report, 'title', $i18n.locale) }"
    />

    <section class="bg-light">
      <div class="container-fluid my-5 py-5">
        <div class="row">
          <div class="col-lg-3">
            <ul class="list-group mb-5">
              <li
                class="list-group-item"
                :class="{ active: page == chapter.page }"
                aria-current="true"
                v-for="(chapter, i) in report.chapters"
                :key="i"
              >
                <a href="#" @click.prevent="setPage(chapter.page)">
                  {{ chapter.chapter }}
                  <span class="badge badge-danger float-right">
                    {{ chapter.page }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-7">
            <div>
              <canvas
                :id="`pdf-${i}`"
                class="w-100"
                v-for="i in numPages"
                :key="i"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Section />
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Section from "@/components/index/Section";

var pdfjsLib = window["pdfjs-dist/build/pdf"];

var pdfDoc = null;

export default {
  data() {
    return {
      report: {},
      numPages: 0,
      page: -1
    };
  },

  head() {
    return {
      title: "Shramiksanjal :: Our Reports",
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

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/Report", {
        filter: { _id: this.$route.params.report }
      })
      .then(({ data }) => {
        if (data.entries.length == 0) $nuxt.error({ status: 404 });

        this.report = data.entries.pop();

        // Asynchronous download of PDF
        var loadingTask = pdfjsLib.getDocument(
          `https://api.shramiksanjal.org/${this.report.pdf}`
        );
        loadingTask.promise.then(pdf => {
          pdfDoc = pdf;
          this.renderPage();
          console.log("PDF loaded");
        });
      });
  },

  methods: {
    renderPage() {
      this.numPages = pdfDoc.numPages;
      // Using promise to fetch the page
      for (let num = 1; num <= pdfDoc.numPages; num++) {
        pdfDoc.getPage(num).then(page => {
          var viewport = page.getViewport({ scale: 1.5 });
          var canvas = document.getElementById(`pdf-${num}`);
          var ctx = canvas.getContext("2d");

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);

          // Wait for rendering to finish
          renderTask.promise.then(() => {});
        });
      }
    },

    setPage(page) {
      this.page = page;
      let canvas = document.getElementById(`pdf-${page}`);
      let body = document.body;

      window.scroll({
        top: canvas.getBoundingClientRect().y - body.getBoundingClientRect().y,
        behavior: "smooth"
      });
    }
  },

  components: {
    Banner,
    Section
  }
};
</script>

<style scoped lang="scss">
.list-group {
  position: sticky;
  top: 98px;

  .list-group-item.active {
    background-color: #e3e3e3 !important;
    border: none;
  }
}
</style>
