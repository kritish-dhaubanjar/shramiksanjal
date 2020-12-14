<template>
  <section>
    <div>
      <h3 class="font-weight-bold mb-4">2 Comments</h3>

      <div class="comments">
        <div class="card is-borderless" v-for="i in 3" :key="i">
          <div
            class="card-header bg-white is-borderless d-flex align-items-center pb-0"
          >
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              width="64px"
              class="img-fluid rounded-circle"
            />
            <div class="ml-4">
              <h6 class="font-weight-bold">dannci</h6>
              <small class="text-muted">March 3, 2020 at 1:05 pm</small>
            </div>
          </div>
          <div class="card-body py-0">
            <p class="mt-3">
              For the last time, I don’t like lilacs! Your ‘first’ wife was the
              one who liked lilacs! Goodbye, cruel world. Goodbye, cruel lamp.
              Goodbye, cruel velvet drapes, lined with what would appear to be
              some sort of cruel muslin and the cute little pom-pom curtain pull
              cords. Cruel though they may be…
            </p>
          </div>
          <hr />
        </div>
      </div>

      <!--  -->
      <div class="my-5 py-5">
        <h4 class="font-weight-bold">Leave a Reply</h4>
        <small class="text-muted"
          >Your email address will not be published. Required fields are marked
          *</small
        >

        <form class="mt-5">
          <div class="form-group">
            <label class="small text-muted"
              >Comment <span class="text-danger">*</span></label
            >
            <textarea class="form-control is-radiusless" rows="6" />
          </div>

          <div class="form-row my-3">
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted"
                  >Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control is-radiusless" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted"
                  >Email address <span class="text-danger">*</span></label
                >
                <input type="email" class="form-control is-radiusless" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted">Phone Number</label>
                <input type="number" class="form-control is-radiusless" />
              </div>
            </div>
          </div>

          <button
            class="btn btn-dark is-radiusless py-3 px-3 font-weight-bold mt-3"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
p {
  line-height: 190%;
}
.comments .card:last-child {
  hr {
    display: none;
  }
}

@media screen and(min-width:768px) {
  .comments .card-body {
    margin-left: 84px;
  }
}

textarea {
  padding-top: 8px;
  resize: none;
  border: 1px solid #e3e3e3;
}

input {
  height: 40px;
  border: 1px solid #e3e3e3;
}

//
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
