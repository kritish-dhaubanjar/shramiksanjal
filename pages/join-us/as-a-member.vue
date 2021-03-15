<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Join Us As A Member' }" />
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
                All current Nepali migrant workers working in foreign
                employment, without any affiliation with any recruitment
                agencies or manpower company, will be able to subscribe to our
                membership.
              </p>

              <form class="mt-4 pt-3" @submit.prevent="join">
                <div class="form-group">
                  <label class="font-weight-bold">Title</label>
                  <div class="form-row">
                    <div class="col-4">
                      <input
                        @click="member.title = 'Mr.'"
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0 "
                        :class="{ active: member.title == 'Mr.' }"
                        required
                        value="Mr."
                        readonly
                      />
                    </div>
                    <div class="col-4">
                      <input
                        @click="member.title = 'Mrs.'"
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0"
                        :class="{ active: member.title == 'Mrs.' }"
                        required
                        value="Mrs."
                        readonly
                      />
                    </div>
                    <div class="col-4">
                      <input
                        @click="member.title = 'Other'"
                        type="text"
                        class="form-control is-radiusless mb-sm-2 mb-md-0"
                        :class="{ active: member.title == 'Other' }"
                        required
                        value="Other"
                        readonly
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

                <div class="form-group">
                  <label for="gender">Gender</label>
                  <select
                    class="form-control is-radiusless"
                    id="gender"
                    v-model="member.gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
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
                  <label class="font-weight-bold">Nationality</label>
                  <select class="form-control is-radiusless">
                    <option value="" selected>Nepali</option>
                  </select>
                </div>

                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-4">
                      <label class="font-weight-bold">Province</label>
                      <select
                        class="form-control is-radiusless"
                        required
                        v-model="member.province"
                        @change="member.district = ''"
                      >
                        <option value="" disabled selected
                          >Select Province</option
                        >
                        <option
                          v-for="province in Object.keys(provinces)"
                          :key="province"
                          :value="province"
                          >{{ province }}</option
                        >
                      </select>
                    </div>
                    <!--  -->
                    <div class="col-md-4">
                      <label class="font-weight-bold">District</label>
                      <select
                        class="form-control is-radiusless"
                        required
                        v-model="member.district"
                      >
                        <option value="" disabled selected
                          >Select District</option
                        >
                        <option
                          v-for="district in provinces[member.province]"
                          :key="district"
                          :value="district"
                          >{{ district }}</option
                        >
                      </select>
                    </div>
                    <!--  -->
                    <div class="col-md-4">
                      <label class="font-weight-bold">VDC/Municipality</label>
                      <input
                        type="text"
                        class="form-control is-radiusless"
                        placeholder="VDC/Municipality *"
                        required
                        v-model="member.vdcMunicipality"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="font-weight-bold"
                    >Country of Residence (Current Country)</label
                  >
                  <select
                    class="form-control is-radiusless"
                    id="gender"
                    v-model="member.countryOfResidence"
                    required
                  >
                    <option value="" disabled
                      >Your Country of Residence (Current Country) *</option
                    >
                    <option value="Nepal">Nepal</option>
                    <option value="UAE">UAE</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                  <!-- <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Your Country of Residence (Current Country) *"
                    required
                    v-model="member.countryOfResidence"
                  /> -->
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
                  <label class="font-weight-bold">Email</label>
                  <input
                    type="email"
                    class="form-control is-radiusless"
                    placeholder="johndoe@example.org"
                    required
                    v-model="member.email"
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

                <div class="form-group">
                  <label class="font-weight-bold">Message</label>
                  <textarea
                    class="form-control is-radiusless"
                    rows="5"
                    v-model="member.message"
                  ></textarea>
                </div>
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
import Swal from "sweetalert2";

export default {
  head() {
    return {
      title: `Shramiksanjal :: Join us as a Member`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "All current Nepali migrant workers working in foreign employment, without any affiliation with any recruitment agencies or manpower company, will be able to subscribe to our membership."
        }
      ]
    };
  },
  data() {
    return {
      provinces: {
        "Province No. 1": [
          "Bhojpur",
          "Dhankuta",
          "Jhapa",
          "Khotang",
          "Morang",
          "Okhaldhunga",
          "Panchthar",
          "Sankhuwasabha",
          "Solukhumbu",
          "Sunsari",
          "Taplejung",
          "Terhathum",
          "Udayapur"
        ],
        "Province No. 2": [
          "Parsa",
          "Bara",
          "Rautahat",
          "Sarlahi",
          "Dhanusa",
          "Siraha",
          "Mahottari",
          "Saptari"
        ],
        "Bagmati Province": [
          "Sindhuli",
          "Ramechhap",
          "Dolakha",
          "Bhaktapur",
          "Dhading",
          "Kathmandu",
          "Kavrepalanchok",
          "Lalitpur",
          "Nuwakot",
          "Rasuwa",
          "Sindhupalchok",
          "Chitwan",
          "Makwanpur"
        ],
        "Gandaki Province": [
          "Baglung",
          "Gorkha",
          "Kaski",
          "Lamjung",
          "Manang",
          "Mustang",
          "Myagdi",
          "Nawalpur",
          "Parbat",
          "Syangja",
          "Tanahun"
        ],
        "Lumbini Province": [
          "Kapilvastu",
          "Parasi",
          "Rupandehi",
          "Arghakhanchi",
          "Gulmi",
          "Palpa",
          "Dang Deukhuri",
          "Pyuthan",
          "Rolpa",
          "Eastern Rukum",
          "Banke",
          "Bardiya"
        ],
        "Karnali Province": [
          "Rukum",
          "Salyan",
          "Dolpa",
          "Humla",
          "Jumla",
          "Kalikot",
          "Mugu",
          "Surkhet",
          "Dailekh",
          "Jajarkot"
        ],
        "Sudurpashchim Province": [
          "Kailali",
          "Achham",
          "Doti",
          "Bajhang",
          "Bajura",
          "Kanchanpur",
          "Dadeldhura",
          "Baitadi",
          "Darchula"
        ]
      },
      member: {
        //
        province: "",
        district: "",
        vdcMunicipality: "",
        code: "",
        number: "",
        email: "",
        //
        title: "Mr.",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        dob: "",
        homeAddress: "",
        countryOfResidence: "",
        workingSectors: "Hotel and Hospitality",
        specification: "",
        message: ""
      }
    };
  },

  mounted() {
    this.$store.commit("reset");
  },

  methods: {
    join() {
      //
      this.$axios
        .post("/api/collections/save/members", { data: this.member })
        .then(entry => {
          Swal.fire({
            icon: "success",
            title: "Thank you for getting in touch!",
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

input,
select {
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
