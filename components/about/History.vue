<template>
  <section class="py-5 mb-5">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-12 mb-5">
          <h2 class="font-weight-bold">
            We are a team led by self-motivated, low-wage migrant workers in the
            Gulf states & Malaysia.<br />
          </h2>
          <hr />

          <h5>
            We offer grassroots expertise and empirical narratives in the field
            of work.
          </h5>
        </div>

        <div
          class="col-sm-6 col-md-4 col-lg-3"
          v-for="member in team"
          :key="member._id"
        >
          <div class="card is-radiusless is-borderless mb-5">
            <!-- <img
              src="https://via.placeholder.com/590x590"
              class="card-img-top is-radiusless"
            /> -->
            <div
              class="background-image card-image-top is-radiusless"
              :style="
                `background-image: url(https://api.shramiksanjal.org/${member.profile_picture.path})`
              "
            />
            <div class="card-body bg-dark text-white py-5">
              <h5 class="card-title font-weight-bold">{{ member.name }}</h5>
              <em>
                {{ member.position }}<br />
                {{ member.email }}
              </em>
              <p class="card-text mt-4">
                {{ member.about }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      team: []
    };
  },

  beforeCreate() {
    this.$axios.get("/api/collections/get/teams").then(({ data }) => {
      this.team = data.entries;
    });
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-family: "Lato", sans-serif;
}

hr {
  width: 128px;
  border-top: 3px solid #df1a17;
}

.background-image {
  height: 300px;
}
</style>
