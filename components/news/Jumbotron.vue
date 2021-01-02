<template>
  <section
    class="background-image"
    :style="
      `background-image: url(https://api.shramiksanjal.org/${news.image.path})`
    "
  >
    <div class="jumbotron mb-0">
      <div class="container-fluid">
        <div class="row text-white">
          <div class="col-12">
            <ul class="pl-0 mb-5 text-uppercase">
              <li class="pr-3">
                <i class="las la-user" />
                <small>{{ news.author }}</small>
              </li>
              <li class="pr-3">
                <i class="las la-clock" />
                <small>MARCH 20, 2018</small>
              </li>
              <li class="pr-3">
                <a href="#">
                  <i class="las la-list text-white" />
                  <a href="#" v-if="news.tags"
                    ><small class="text-uppercase text-white"
                      >{{ news.tags.display }}
                    </small></a
                  >
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <h1 class="mb-3">
              {{ $localeContent(news, "title", $i18n.locale) }}
            </h1>
            <p class="lead">
              {{ $localeContent(news, "overview", $i18n.locale) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["news"]
};
</script>

<style scoped lang="scss">
.jumbotron {
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: rgba(35, 36, 56, 0.65);
}

.background-image {
  // background-image: url(https://via.placeholder.com/1280x720);
}

ul {
  list-style-type: none;
  li {
    display: inline-block;
  }
}
</style>
