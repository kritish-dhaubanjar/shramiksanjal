<template>
  <div class="marquee-container shadow-lg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 overflow-hidden d-flex">
          <div class="py-2 breaking-news ml-3">
            // ANNOUNCEMENT //
          </div>

          <nuxt-link
            :to="`/news/${flash._id}`"
            tag="marquee"
            class="text-white pt-2"
            hover="pause"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            {{ $localeContent(flash, "title", $i18n.locale) }}:
            {{ $localeContent(flash, "overview", $i18n.locale) }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flash: {}
    };
  },

  beforeCreate() {
    this.$axios
      .post("/api/collections/get/news", {
        sort: { _created: -1 },
        filter: { flash: true }
      })
      .then(({ data }) => {
        if (data.total > 0) this.flash = data.entries.shift();
      });
  }
};
</script>

<style scoped lang="scss">
.marquee-container {
  background-color: #df1a17;
}

marquee {
  font-family: "Lato";
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
}

div.breaking-news {
  background-color: #ffe12a;
  font-size: 13px;
  font-weight: bolder;
  position: relative;
  width: 148px;
  flex: 148px 0 0;
  z-index: 100;
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    z-index: -1;
    left: -16px;
    width: 32px;
    height: 64px;
    background-color: #ffe12a;
    transform: rotateZ(20deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: -24px;
    z-index: -1;
    width: 32px;
    right: -10px;
    height: 64px;
    background-color: #ffe12a;
    transform: rotateZ(20deg);
  }
}

@media screen and(max-width: 575px) {
  div.breaking-news {
    margin-left: 12px !important;
  }
}
</style>
