<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Our Reports' }" />

    <section class="bg-light">
      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-lg-3">
            <Sidebar />
          </div>

          <!--  -->

          <div class="col-lg-9 py-5">
            <div class="row">
              <div
                class="col-lg-3 col-md-4 col-sm-6 col-6"
                v-for="report in reports"
                :key="report._id"
                data-aos="fade-up"
              >
                <nuxt-link :to="`/reports/${report._id}`" tag="div">
                  <div
                    class="postion-relative placeholder background-image"
                    :id="`placeholder-${report._id}`"
                  ></div>
                  <canvas :id="report._id" class="w-100 h-100 d-none" />
                </nuxt-link>
                <!--  -->
                <div class="mb-4">
                  <nuxt-link
                    :to="`/reports/${report._id}`"
                    tag="h6"
                    class="mt-3 font-weight-bold"
                  >
                    {{ $localeContent(report, "title", $i18n.locale) }}
                  </nuxt-link>
                  <p class="text-muted mb-0">
                    <i class="las la-list" />
                    {{ categories(report.categories) }}
                  </p>
                  <small class="text-muted text-uppercase">
                    <i class="las la-calendar-alt" />
                    {{ new Date(report._created * 1000).toDateString() }}
                  </small>
                </div>
              </div>
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
import Sidebar from "@/components/reports/Sidebar";

var pdfjsLib = window["pdfjs-dist/build/pdf"];

export default {
  data() {
    return {
      reports: []
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

  computed: {
    categories() {
      return categories => {
        let temp = [];
        categories.forEach(category => {
          temp.push(
            this.$localeContent(category, "category", this.$i18n.locale)
          );
        });

        return temp.join(", ");
      };
    }
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/Report", {
        populate: 1,
        sort: { _created: -1 }
      })
      .then(({ data }) => {
        this.reports = data.entries;

        this.reports.forEach(report => {
          let loadingTask = pdfjsLib.getDocument(
            `https://api.shramiksanjal.org/${report.pdf}`
          );

          loadingTask.promise.then(pdf => {
            this.renderPage(report, pdf);
          });
        });
      });
  },

  methods: {
    renderPage(report, pdfDoc) {
      // Using promise to fetch the page
      pdfDoc.getPage(1).then(page => {
        var viewport = page.getViewport({ scale: 1 });
        var canvas = document.getElementById(report._id);
        var ctx = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        document.getElementById(`placeholder-${report._id}`).remove();
        canvas.classList = "w-100 h-100";
        // Wait for rendering to finish
        renderTask.promise.then(() => {});
      });
    }
  },

  components: {
    Banner,
    Section,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.placeholder {
  width: 100%;
  padding-top: 143.8%;
  background-image: url(/images/pdf-placeholder.png);
  cursor: pointer;
}

canvas {
  cursor: pointer;
}

h6 {
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}
</style>
