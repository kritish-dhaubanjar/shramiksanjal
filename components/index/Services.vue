<template>
  <section class="pt-5">
    <div class="container-fluid mb-5 py-5">
      <div class="row">
        <div class="col-12 mb-5">
          <h1 class="font-weight-bold">
            We depend on well-led and well-managed grantees
          </h1>
        </div>

        <div class="col-sm-6 col-lg-3 mb-5" v-for="i in 4" :key="i">
          <h5 class="font-weight-bold">0{{ i }}.</h5>
          <hr class="mb-5" />
          <h6 class="font-weight-bold mb-4">
            Confronting racial and generational gaps
          </h6>

          <p>
            The Institute for Social Change is embedded in the Department of
            Socio-economics, which has a established focus on issues of
            sustainability in its teaching programmes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1,
p.lead {
  font-family: "Lato", sans-serif;
  //   color: #2a2c57;
}

section {
  background-color: #ffe12a;
}

hr {
  border-color: #000;
}
</style>
