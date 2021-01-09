<template>
  <section class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 col-lg-8 pt-5">
          <h2 class="font-weight-bold text-danger">
            0{{ index }}. {{ $localeContent(content, "title", $i18n.locale) }}
          </h2>
        </div>
        <!-- <div class="col-md-5 col-lg-4 text-center">
          <div class="position-relative">
            <img
              :src="
                `https://api.shramiksanjal.org/${
                  content.image ? content.image.path : ''
                }`
              "
              class="img-fluid"
            />
          </div>
        </div> -->
      </div>

      <div class="row mt-4">
        <div class="col-lg-1"></div>
        <div class="col-md-12 col-lg-9 mb-3">
          <div
            v-html="$localeContent(content, 'content', $i18n.locale)"
            class="html"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["content", "index"]
};
</script>

<style scoped>
h1,
p.lead {
  font-family: "Lato", sans-serif;
  color: #2a2c57;
}

p {
  color: #2a2c57;
  line-height: 180%;
}

@media screen and (min-width: 768px) {
  img {
    position: absolute;
    top: -100px;
    left: 0;
  }
}

.col-lg-1 {
  background-image: url("/images/assets/dot.png");
}
</style>
