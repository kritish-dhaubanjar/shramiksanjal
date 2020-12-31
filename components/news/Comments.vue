<template>
  <section>
    <div>
      <h3 class="font-weight-bold mb-4">{{ comments.length }} Comments</h3>

      <div class="comments" v-if="comments.length > 0">
        <div
          class="card is-borderless"
          v-for="comment in comments"
          :key="comment._id"
        >
          <div
            class="card-header bg-white is-borderless d-flex align-items-center pb-0"
          >
            <img
              :src="`https://ui-avatars.com/api/?name=${comment.name}`"
              width="64px"
              class="img-fluid rounded-circle"
            />
            <div class="ml-4">
              <h6 class="font-weight-bold">{{ comment.name }}</h6>
              <small class="text-muted">
                {{ new Date(comment._created * 1000).toDateString() }} at
                {{ new Date(comment._created * 1000).toTimeString() }}
              </small>
            </div>
          </div>
          <div class="card-body py-0">
            <p class="mt-2">
              {{ comment.comment }}
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

        <form class="mt-5" @submit.prevent="submit" ref="comment">
          <div class="form-group">
            <label class="small text-muted"
              >Comment <span class="text-danger">*</span></label
            >
            <textarea
              class="form-control is-radiusless"
              rows="6"
              required
              v-model="comment.comment"
            />
          </div>

          <div class="form-row my-3">
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted"
                  >Name <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control is-radiusless"
                  required
                  v-model="comment.name"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted"
                  >Email address <span class="text-danger">*</span></label
                >
                <input
                  type="email"
                  class="form-control is-radiusless"
                  required
                  v-model="comment.email"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="small text-muted"
                  >Phone Number <span class="text-danger">*</span></label
                >
                <input
                  type="number"
                  class="form-control is-radiusless"
                  required
                  v-model="comment.phone"
                />
              </div>
            </div>
          </div>
          <div class="small text-muted mb-3">
            We'll never share your email & phone number with anyone else.
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

<script>
export default {
  props: ["comments", "news_id"],

  data() {
    return {
      comment: {
        comment:
          "Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.",
        name: "Kritish Dhaubanjar",
        email: "kritishdhaubanjar@gmail.com",
        phone: "9843684612",
        news: ""
      }
    };
  },

  created() {
    this.comment.news = this.news_id;
  },

  methods: {
    submit() {
      this.$axios
        .post("/api/collections/save/comments", { data: this.comment })
        .then(({ data }) => {
          this.comments.push(data);

          this.comment = {
            comment: "",
            name: "",
            email: "",
            phone: "",
            news: this.news_id
          };

          window.scrollTo({
            top: this.$refs.comment.offsetTop + 180,
            behavior: "smooth"
          });
        });
    }
  }
};
</script>

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
