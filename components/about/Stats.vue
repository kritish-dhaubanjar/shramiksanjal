<template>
  <section>
    <div class="container-fluid bg-white shadow-sm mx-auto">
      <div class="row py-3">
        <div class="col-lg-4 py-4" v-for="i in 3" :key="i">
          <div class="d-flex align-items-center">
            <i class="las la-comments la-4x text-danger mr-3"></i>
            <p class="font-weight-bold text-danger mb-0">
              Youth report to feel more empowered to end a relationship if their
              partner wants sex as a condition to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
p {
  font-size: 14px;
}
@media screen and(min-width:1200px) {
  section {
    margin-bottom: 110px;
    .container-fluid {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
}
</style>
