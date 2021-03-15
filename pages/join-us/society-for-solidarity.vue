<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Society For Solidarity' }" />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <!-- <h3 class="font-weight-bold">
            Who Do you want to communicate with
          </h3> 
          <p>
            For more information here we provide separate department contact
            person details, please contact them.
          </p>

           <div class="row mt-5">
            <div class="col-sm-6 col-lg-6 mb-5">
              <h5 class="font-weight-bold mb-4">Career Inquiries</h5>
              <h6 class="font-weight-bold mb-2">John Martin</h6>
              Ph: (+01) 123 456 7899<br />
              Email: info@example.com
            </div>
            <div class="col-sm-6 col-lg-6 mb-5">
              <h5 class="font-weight-bold mb-4">Marketing Department</h5>
              <h6 class="font-weight-bold mb-2">Alex Hardy</h6>
              Ph: (+01) 123 456 7899 <br />
              Email: info@example.com
            </div>
          </div> -->

          <div class="card is-radiusless my-3 is-borderless" data-aos="fade-up">
            <div class="card-body py-5 form-card bg-white shadow-sm">
              <h5 class="font-weight-bold mb-3">
                Need more information or want to get in touch?
              </h5>
              <p>
                We strongly believe in the power of unity. Our work needs
                multidimensional collaboration between like-minded people and
                institutions, so we seek for any individual or institution to
                exchange and support our work with each other.
              </p>

              <form class="mt-4 pt-3" @submit.prevent="join">
                <div class="form-group">
                  <label class="font-weight-bold">Name of Organization</label>
                  <input
                    type="text"
                    class="form-control is-radiusless mb-sm-2 mb-md-0"
                    placeholder="Name of Organization"
                    required
                    v-model="member.organization"
                  />
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Official Website</label>
                  <input
                    @change="validate"
                    placeholder="https://example.org"
                    type="url"
                    class="form-control is-radiusless"
                    required
                    v-model="member.website"
                  />
                  <!-- 
                                         -->
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Official Email</label>
                  <input
                    type="email"
                    class="form-control is-radiusless"
                    placeholder="johndoe@example.org"
                    required
                    v-model="member.officialEmail"
                  />
                </div>

                <h4 class="mt-5 mb-4">Point of Contact</h4>

                <div class="form-group">
                  <label class="font-weight-bold">Name</label>
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Name *"
                    required
                    v-model="member.name"
                  />
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Email</label>
                  <input
                    type="email"
                    class="form-control is-radiusless"
                    placeholder="johndoe@example.org"
                    required
                    v-model="member.email"
                  />
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Phone Number</label>
                  <div class="form-row">
                    <div class="col-3 col-md-2">
                      <input
                        type="number"
                        class="form-control is-radiusless"
                        placeholder="+977"
                        required
                        v-model="member.code"
                      />
                    </div>
                    <div class="col-9 col-md-10">
                      <input
                        type="number"
                        class="form-control is-radiusless"
                        placeholder="987-654321"
                        required
                        v-model="member.number"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Message</label>
                  <textarea
                    class="form-control is-radiusless"
                    rows="5"
                    v-model="member.message"
                  ></textarea>
                </div>
                <p>
                  “We offer grassroots expertise and empirical narratives in the
                  field of work we do”
                </p>
                <p>
                  <em
                    >* Please note that we will not use your personal details
                    for any other purposes except our references for
                    verification. Thank you.</em
                  >
                </p>
                <button
                  class="btn btn-danger py-3 px-5 is-radiusless font-weight-bold  mt-4"
                >
                  JOIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Section from "@/components/index/Section.vue";
import Swal from "sweetalert2";

export default {
  head() {
    return {
      title: `Shramiksanjal :: Society for Solidarity`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We strongly believe in the power of unity. Our work needs multidimensional collaboration between like-minded people and institutions, so we seek for any individual or institution to exchange and support our work with each other."
        }
      ]
    };
  },
  data() {
    return {
      member: {
        organization: "",
        website: "",
        officialEmail: "",
        email: "",
        code: "",
        name: "",
        number: "",
        message: ""
      }
    };
  },

  mounted() {
    this.$store.commit("reset");
  },

  methods: {
    validate() {
      if (
        this.member.website.includes("http://") ||
        this.member.website.includes("https://")
      ) {
        return;
      } else {
        this.member.website = "https://" + this.member.website;
      }
    },

    join() {
      //
      this.$axios
        .post("/api/collections/save/solidarity", { data: this.member })
        .then(entry => {
          Swal.fire({
            icon: "success",
            title: "Thank you for getting in touch! ",
            html:
              "We appreciate you contacting us. One of our colleagues will get back in touch with you soon! <br><br> Have a great day!"
          }).then(() => {
            this.$router.replace("/");
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
        });
    }
  },

  components: {
    Banner
  }
};
</script>

<style scoped lang="scss">
h6,
h5,
h3 {
  color: #2a2c57;
  & ~ p {
    color: #2a2c57;
  }
}

input {
  height: 48px;
  border: 2px solid #e3e3e3;
  &:active,
  &:focus {
    border-width: 2px;
  }
}

textarea {
  resize: none;
  border: 2px solid #e3e3e3;
  &:active,
  &:focus {
    border-width: 2px;
  }
}

.form-card.card-body {
  border: 1px solid #e3e3e3;
}

input.active {
  border-color: #000;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
