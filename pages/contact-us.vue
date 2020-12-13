<template>
  <section class="bg-light">
    <Banner />
    <div class="container-fluid py-5 my-5">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card is-radiusless my-3 bg-white is-borderless shadow-sm">
            <div class="card-body py-5">
              <h4 class="mb-3">Main Branch</h4>
              DE 198 Tech Road<br />
              Bridge Str, Newyork 10026<br />
              United States<br />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card is-radiusless my-3 bg-white is-borderless shadow-sm">
            <div class="card-body py-5">
              <h4 class="mb-3">Quick Contact</h4>
              <i class="las la-phone-alt mr-2" />+05 9875 654 32<br />
              <i class="las la-fax mr-2" />123 456 7890<br />
              <i class="las la-envelope mr-2" />info@example.com<br />
            </div>
          </div>
        </div>
        <!-- <div class="col-md-6 col-lg-4">
          <div class="card is-radiusless my-3 bg-light is-borderless">
            <div class="card-body py-5">
              <h4 class="mb-3">Quick Contact</h4>
              <i class="las la-phone-alt mr-2" />+05 9875 654 32<br />
              <i class="las la-fax mr-2" />123 456 7890<br />
              <i class="las la-envelope mr-2" />info@example.com<br />
            </div>
          </div>
        </div> -->
        <div class="col-lg-4">
          <div class="card is-radiusless my-3 is-borderless">
            <div class="card-body py-5 form-card bg-white shadow-sm">
              <h5 class="font-weight-bold mb-3">
                Need more information or want to get in touch?
              </h5>
              <p>
                Questions or Comments? Please complete the form below. We’ll
                follow up with you in 1-2 business days.
              </p>

              <form class="mt-4 pt-3">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control is-radiusless is-invalid"
                    placeholder="Your Name *"
                  />
                  <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Your Email *"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Your Phone *"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control is-radiusless"
                    placeholder="Subject *"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control is-radiusless pt-3"
                    placeholder="Your Message *"
                    rows="10"
                  />
                </div>

                <button
                  class="btn btn-danger py-3 px-5 is-radiusless font-weight-bold"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-5 bg-white">
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-lg-8 mb-5">
            <h3 class="font-weight-bold">
              Who Do you want to communicate with
            </h3>
            <p>
              For more information here we provide separate department contact
              person details, please contact them.
            </p>
          </div>

          <div class="col-12"></div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <h5 class="font-weight-bold mb-4">Career Inquiries</h5>
            <h6 class="font-weight-bold mb-2">John Martin</h6>
            Ph: (+01) 123 456 7899<br />
            Email: info@example.com
          </div>
          <div class="col-sm-6 col-lg-4 mb-5">
            <h5 class="font-weight-bold mb-4">Marketing Department</h5>
            <h6 class="font-weight-bold mb-2">Alex Hardy</h6>
            Ph: (+01) 123 456 7899 <br />
            Email: info@example.com
          </div>
        </div>
      </div>
    </section>

    <iframe
      class="d-block"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14133.97620191589!2d85.3358764197754!3d27.67112124999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1607578744480!5m2!1sen!2snp"
      width="100%"
      height="480"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </section>
</template>

<script>
import Banner from "@/components/others/Banner";
import Section from "../components/index/Section.vue";

export default {
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

@media screen and(min-width: 992px ) {
  .form-card {
    position: absolute;
  }
}

.form-card.card-body {
  border: 1px solid #e3e3e3;
}
</style>
