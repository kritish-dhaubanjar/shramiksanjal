<template>
  <section class="py-5 mb-5">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-12 mb-5">
          <h1 class="font-weight-bold">
            Strong project team is a key for success!
          </h1>
          <hr />
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3" v-for="i in 8" :key="i">
          <div class="card is-radiusless is-borderless mb-5">
            <img
              src="https://via.placeholder.com/590x590"
              class="card-img-top is-radiusless"
            />
            <div class="card-body bg-dark text-white py-5">
              <h5 class="card-title font-weight-bold">John Moritz</h5>
              <em>
                Founder & CEO<br />
                j.moritz@idence.org
              </em>
              <p class="card-text mt-4">
                Aliquam non dolor tempus, eleifend erat, elementum diam. Egestas
                pretium cursus. Quisque posuere pulvinar tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  font-family: "Lato", sans-serif;
}

hr {
  width: 128px;
  border-top: 3px solid #df1a17;
}
</style>
