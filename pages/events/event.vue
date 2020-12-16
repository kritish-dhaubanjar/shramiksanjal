<template>
  <section class="mb-5 pb-5">
    <Jumbotron />

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 mt-3">
          <main class="mb-5">
            <div class="card bg-light is-radiusless is-borderless mb-4 pt-5">
              <div class="card-body">
                <h5>
                  Hands-on activities, student photography exhibit, and more.
                  All activities are free and Museum admission fee is not
                  required.
                </h5>

                <hr class="my-5" />

                <div class="row my-4">
                  <div class="col-lg-6 d-flex">
                    <i class="las la-clock la-3x mr-3" />
                    <div>
                      <em>Event Date:</em>
                      <p><b>Sep 11</b> at <b>9:00 am</b> - <b>9:00 pm</b></p>
                    </div>
                  </div>

                  <div class="col-lg-6 d-flex">
                    <i class="las la-map-marker la-3x mr-3" />
                    <div>
                      <em>Location:</em>
                      <p>
                        <b>Macky Auditorium Concert Hall,</b> 1595 Pleasant St,
                        Boulder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="content">
              <p>
                Presented by the Frisco Heritage Association and the Heritage
                Museum. Hands-on activities, student photography exhibit, and
                more. All activities are free and Museum admission fee is not
                required. Call 972-292-5668 for additional information.
              </p>

              <p><b>Schedule</b></p>

              <p><b>9:30</b> –morning refreshments</p>

              <p>
                <b>10 a.m.</b>– Keith Volanto, PhD, Collin College professor of
                history and author of Texas, Cotton and the New Deal.
              </p>

              <p>
                <b>11 a.m. to 2 p.m.</b>— Community experts display and
                demonstrate contemporary cotton crafts in the 2nd floor
                galleries.
              </p>

              <ul>
                <li>Visit with the Frisco Quilt Guild</li>
                <li>
                  Watch and learn from a certified Master Weaver about creating
                  cloth from thread on a loom
                </li>
                <li>Sarees from India display</li>
                <li>Latin American textiles display</li>
              </ul>

              <p>
                <b>Noon</b> — Images of Frisco, student photography exhibit and
                reception, sponsored by Collin College.
              </p>
            </div>
          </main>
        </div>

        <div class="col-lg-4 mt-3">
          <Events />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Jumbotron from "@/components/news/Jumbotron";
import Events from "@/components/events/Events";

export default {
  components: {
    Jumbotron,
    Events
  }
};
</script>

<style scoped lang="scss">
p {
  line-height: 190%;
  margin-bottom: 24px;
}
ul {
  margin-top: 16px;
  margin-bottom: 16px;
  li {
    padding-top: 4px;
    padding-bottom: 4px;
  }
}
@media screen and(min-width: 992px) {
  main,
  .col-lg-4 {
    transform: translateY(-64px);
  }
}
</style>
