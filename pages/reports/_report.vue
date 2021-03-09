<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Reports' }" />

    <section class="bg-light">
      <div class="container-fluid my-5 py-5">
        <div class="row">
          <div class="col-lg-2">
            <button class="btn btn-primary" @click="renderPage(43)">
              Goto 31
            </button>
          </div>
          <div class="col-lg-8">
            <canvas id="the-canvas" class="w-100"></canvas>
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
// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   "//mozilla.github.io/pdf.js/build/pdf.worker.js";
var pdfDoc = null;

export default {
  data() {
    return {
      report: {}
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

  mounted() {
    this.$axios.get("/api/collections/get/Report").then(({ data }) => {
      this.report = data.entries.pop();

      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(
        `https://api.shramiksanjal.org/${this.report.pdf}`
      );
      loadingTask.promise.then(pdf => {
        pdfDoc = pdf;
        this.renderPage(1);
        console.log("PDF loaded");
      });
    });
  },

  methods: {
    renderPage(num) {
      // Using promise to fetch the page
      pdfDoc.getPage(num).then(page => {
        var viewport = page.getViewport({ scale: 1.5 });
        var canvas = document.getElementById("the-canvas");
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

  components: {
    Banner,
    Section
  }
};
</script>
