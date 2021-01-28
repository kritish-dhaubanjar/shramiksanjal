<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row bg-primary text-white py-4 overflow-hidden">
        <div class="col-lg-6 d-flex mt-4">
          <i class="las la-headphones la-3x mr-3" />
          <div>
            <h4 class="font-weight-bold">
              Call Us 24/7 880.234.9234
            </h4>
            <h5 class="font-weight-bold">For general inquiries</h5>
          </div>
        </div>

        <div class="col-lg-6 d-flex my-4">
          <i class="las la-map-marker la-3x mr-3" />
          <div>
            <h4 class="font-weight-bold">
              London city govt
            </h4>
            <h5 class="font-weight-bold">
              46, The queen's walk london 5241, UK
            </h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 mb-4">
          <h6 class="letter-spacing">SUBSCRIBE TO OUR NEWSLETTER</h6>
          <hr class="mt-2 mb-4" />
          <p>Sign up for weekly News, Trainings & Webinars</p>
          <form @submit.prevent="subscribe">
            <div class="input-group my-4 pr-lg-4">
              <input
                v-model="email"
                type="email"
                required
                class="form-control is-radiusless is-borderless font-weight-bold px-3"
                placeholder="YOUR EMAIL ADDRESS"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-danger is-borderless is-radiusless font-weight-bold px-4"
                  type="submit"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-3 mb-4">
          <h6 class="letter-spacing">USEFUL LINKS</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li>
              <a
                href="https://dofe.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://dofe.gov.np"
                >Foreign Employment Board</a
              >
            </li>
            <li>
              <a
                href="https://www.nhrcnepal.org"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://www.nhrcnepal.org"
                >National Human Rights Commission</a
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-3 mb-4">
          <h6 class="letter-spacing">EMBASSY OF NEPAL</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li>
              <a
                href="https://qa.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://qa.nepalembassy.gov.np"
                >Doha, Qatar</a
              >
            </li>
            <li>
              <a
                href="https://ae.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://ae.nepalembassy.gov.np"
                >Abu Dhabi, UAE</a
              >
            </li>
            <li>
              <a
                href="https://sa.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://sa.nepalembassy.gov.np"
                >Riyad, Saudi Arabia</a
              >
            </li>
            <li>
              <a
                href="https://om.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://om.nepalembassy.gov.np"
                >Muscat, Oman</a
              >
            </li>
            <li>
              <a
                href="https://bh.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://bh.nepalembassy.gov.np"
                >Manama, Bahrain</a
              >
            </li>
            <li>
              <a
                href="https://my.nepalembassy.gov.np"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="https://my.nepalembassy.gov.np"
                >Kuala Lumpur Malaysia</a
              >
            </li>
          </ul>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-2 mb-4">
          <h6 class="letter-spacing">QUICK LINKS</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/blogs">Blogs</nuxt-link></li>
            <li><nuxt-link to="/our-programs">Programs</nuxt-link></li>
            <li><nuxt-link to="/videos">Videos</nuxt-link></li>
          </ul>
        </div>
      </div>

      <hr class="mb-4" />
      <footer>
        <div class="row">
          <div class="col-12">
            <ul class="socials mx-auto my-4">
              <li class="pr-2" :v-if="socials.Facebook.length > 0">
                <a :href="socials.Facebook" target="_blank"
                  ><i class="lab la-facebook-square"
                /></a>
              </li>
              <li class="px-2" :v-if="socials.Twitter.length > 0">
                <a :href="socials.Twitter" target="_blank"
                  ><i class="lab la-twitter"
                /></a>
              </li>
              <li class="px-2" :v-if="socials.AnchorFM.length > 0">
                <a :href="socials.AnchorFM" target="_blank"
                  ><i class="las la-rss"
                /></a>
              </li>
              <li class="px-2" :v-if="socials.Linkedin.length > 0">
                <a :href="socials.Linkedin" target="_blank"
                  ><i class="lab la-linkedin"
                /></a>
              </li>
              <li class="pl-2" :v-if="socials.Youtube.length > 0">
                <a :href="socials.Youtube" target="_blank"
                  ><i class="lab la-youtube"
                /></a>
              </li>
            </ul>
          </div>

          <div class="col-12">
            <p class="text-center copyright">
              Copyright &copy; 2020 - ShramikSanjal
            </p>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";

export default {
  props: ["socials"],

  data() {
    return {
      email: ""
    };
  },

  methods: {
    subscribe() {
      this.$axios
        .post("/api/collections/save/subscriptions", { data: {email: this.email} })
        .then(entry => {
          Swal.fire({
            icon: "success",
            title: "Thank you",
            text: "Form submitted successfully !"
          }).then(() => {
            this.email = "";
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
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

section {
  background-color: #f7f7f7;
}

ul {
  padding-left: 0;
  list-style-type: none;
  li {
    padding-bottom: 8px;
  }
}

h6 ~ hr {
  width: 48px;
  border-top: 3px solid $primary;
}

.input-group {
  max-width: 400px;
  height: 48px;

  .form-control {
    font-size: 11px;
    height: 48px;
  }

  .btn {
    font-size: 11px;
  }
}

footer {
  ul {
    width: max-content;
    li {
      display: inline-block;
      i {
        font-size: 24px;
      }
    }
  }

  p {
    font-size: 12px;
  }
}

.bg-primary {
  top: -100px;
  position: relative;
  // &::before {
  //   content: "";
  //   background-color: $primary;
  //   position: absolute;
  //   width: 2000px;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  // }
}
</style>
