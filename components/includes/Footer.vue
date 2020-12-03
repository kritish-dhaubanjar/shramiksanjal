<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row bg-primary text-white py-4 overflow-hidden">
        <div class="col-lg-6 d-flex mt-4">
          <i class="las la-headphones la-3x mr-3" />
          <div>
            <h4>
              Call Us 24/7 880.234.9234
            </h4>
            <h5>For general inquiries</h5>
          </div>
        </div>

        <div class="col-lg-6 d-flex my-4">
          <i class="las la-map-marker la-3x mr-3" />
          <div>
            <h4>
              London city govt
            </h4>
            <h5>
              46, The queen's walk london 5241, UK
            </h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <h6 class="letter-spacing">SUBSCRIBE TO OUR NEWSLETTER</h6>
          <hr class="mt-2 mb-4" />
          <p>Sign up for weekly News, Trainings & Webinars</p>

          <div class="input-group my-4">
            <input
              type="email"
              class="form-control is-radiusless is-borderless font-weight-bold px-3"
              placeholder="YOUR EMAIL ADDRESS"
            />
            <div class="input-group-append">
              <button
                class="btn btn-danger is-borderless is-radiusless font-weight-bold px-4"
                type="button"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-2 mb-4">
          <h6 class="letter-spacing">IMPORTANT</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Perceptions</a></li>
            <li><a href="#">Low Cases</a></li>
            <li><a href="#">Fiskal Empowered</a></li>
          </ul>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-2 mb-4">
          <h6 class="letter-spacing">USEFUL LINKS</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Social Changes</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Fiskal Sponsorship</a></li>
          </ul>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-2 mb-4">
          <h6 class="letter-spacing">LIVING HERE</h6>
          <hr class="mt-2 mb-4" />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </div>

      <hr class="mb-4" />
      <footer>
        <div class="row">
          <div class="col-12">
            <ul class="socials mx-auto my-4">
              <li class="pr-2">
                <a href="#"><i class="lab la-facebook-square"/></a>
              </li>
              <li class="px-2">
                <a href="#"><i class="lab la-twitter"/></a>
              </li>
              <li class="px-2">
                <a href="#"><i class="lab la-instagram"/></a>
              </li>
              <li class="px-2">
                <a href="#"><i class="lab la-google-plus"/></a>
              </li>
              <li class="px-2">
                <a href="#"><i class="lab la-linkedin"/></a>
              </li>
              <li class="pl-2">
                <a href="#"><i class="lab la-youtube"/></a>
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
