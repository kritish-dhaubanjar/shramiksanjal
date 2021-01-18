<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Join Us As A Member' }" />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h3 class="font-weight-bold">
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
          </div>

          <div class="card is-radiusless my-3 is-borderless">
            <div class="card-body py-5 form-card bg-white shadow-sm">
              <h5 class="font-weight-bold mb-3">
                Need more information or want to get in touch?
              </h5>
              <p>
                Questions or Comments? Please complete the form below. We’ll
                follow up with you in 1-2 business days.
              </p>

              <form class="mt-4 pt-3" @submit.prevent="join">
                <div class="form-group">
                  <label class="font-weight-bold">Title</label>
                  <div class="form-row">
                    <div class="col-4" @click="member.title = 'Mr.'">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0 "
                        :class="{ active: member.title == 'Mr.' }"
                        required
                        value="Mr."
                        disabled
                      />
                    </div>
                    <div class="col-4" @click="member.title = 'Mrs.'">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0"
                        :class="{ active: member.title == 'Mrs.' }"
                        required
                        value="Mrs."
                        disabled
                      />
                    </div>
                    <div class="col-4" @click="member.title = 'Other'">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0"
                        :class="{ active: member.title == 'Other' }"
                        required
                        value="Other"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold">Name</label>
                  <div class="form-row">
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-2 mb-md-0"
                        placeholder="First Name *"
                        required
                        v-model="member.firstName"
                      />
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-2 mb-md-0"
                        placeholder="Middle Name"
                        v-model="member.middleName"
                      />
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control is-radiusless mb-2 mb-md-0"
                        placeholder="Last Name *"
                        required
                        v-model="member.lastName"
                      />
                    </div>
                  </div>
                </div>

                <label class="font-weight-bold mt-3">Gender</label>
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="male"
                      value="male"
                      v-model="member.gender"
                    />
                    <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="female"
                      value="female"
                      v-model="member.gender"
                    />
                    <label class="form-check-label" for="female">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="others"
                      value="others"
                      v-model="member.gender"
                    />
                    <label class="form-check-label" for="others">Others</label>
                  </div>
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Date of Birth [AD]</label>
                  <input
                    type="date"
                    class="form-control is-radiusless"
                    required
                    v-model="member.dob"
                  />
                </div>

                <div class="form-group">
                  <label class="font-weight-bold">Home Address</label>
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Your Home Address *"
                    required
                    v-model="member.homeAddress"
                  />
                </div>

                <div class="form-group">
                  <label class="font-weight-bold"
                    >Country of Residence (Current Country)</label
                  >
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Your Country of Residence (Current Country) *"
                    required
                    v-model="member.countryOfResidence"
                  />
                </div>

                <label class="font-weight-bold mt-3">Working Sectors</label>
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-1"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Hotel and Hospitality"
                    />
                    <label class="custom-control-label" for="sector-1"
                      ><b>Hotel and Hospitality</b> (Hotel, Restaurant,
                      Aviation, Catering, Cafeteria)</label
                    >
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-2"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Constructions"
                    />
                    <label class="custom-control-label" for="sector-2"
                      ><b>Constructions</b> (Roads, Buildings, any other
                      Infrastructures)</label
                    >
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-3"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Retail"
                    />
                    <label class="custom-control-label" for="sector-3"
                      ><b>Retail</b> (Fashion Retail Stores, Supermarkets,
                      Hypermarkets, Groceries)
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-4"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Domestic Services"
                    />
                    <label class="custom-control-label" for="sector-4"
                      ><b>Domestic Services</b> (House maid, Drivers, Caregiver
                      etc.)
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-5"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Facility Management and Security Services"
                    />
                    <label class="custom-control-label" for="sector-5"
                      ><b>Facility Management and Security Services</b>
                      (Cleaning, Security Services)</label
                    >
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="sector-6"
                      name="customRadio"
                      class="custom-control-input"
                      v-model="member.workingSectors"
                      value="Others"
                    />
                    <label class="custom-control-label" for="sector-6"
                      ><b>Other</b> (Please Specify)
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Please Specify"
                    :required="member.workingSectors == 'Others'"
                    v-model="member.specification"
                  />
                </div>

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
  data() {
    return {
      member: {
        title: "Mr.",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        dob: "",
        homeAddress: "",
        countryOfResidence: "",
        workingSectors: "Hotel and Hospitality",
        specification: ""
      }
    };
  },

  mounted() {
    this.$store.commit("reset");
  },

  methods: {
    join() {
      Swal.fire({
        icon: "success",
        title: "Oops...",
        text: "Something went wrong!"
      }).then(() => {
        this.$router.replace("/");
      });

      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //   });
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
</style>
