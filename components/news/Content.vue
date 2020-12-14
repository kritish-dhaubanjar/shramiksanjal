<template>
  <section>
    <div class="html">
      <p>
        A moderate incline runs towards the foot of Maybury Hill, and down this
        we clattered. Once the lightning had begun, it went on in as rapid a
        succession of flashes as I have ever seen. The thunderclaps, treading
        one on the heels of another and with a strange crackling accompaniment,
        sounded more like the working of a gigantic electric machine than the
        usual detonating reverberations. The flickering light was blinding and
        confusing, and a thin hail smote gustily at my face as I drove down the
        slope.
      </p>
      <br />
      <p>
        At first I regarded little but the road before me, and then abruptly my
        attention was arrested by something that was moving rapidly down the
        opposite slope of Maybury Hill. At first I took it for the wet roof of a
        house, but one flash following another showed it to be in swift rolling
        movement. It was an elusive vision a moment of bewildering darkness, and
        then, in a flash like daylight, the red masses of the Orphanage near the
        crest of the hill, the green tops of the pine trees, and this
        problematical object came out clear and sharp and bright.
      </p>
      <div class="my-5 youtube">
        <iframe
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <p>
        With a blow from the top-maul Ahab knocked off the steel head of the
        lance, and then handing to the mate the long iron rod remaining, bade
        him hold it upright, without its touching the deck. Then, with the maul,
        after repeatedly smiting the upper end of this iron rod, he placed the
        blunted needle endwise on the top of it, and less strongly hammered
        that, several times, the mate still holding the rod as before. Then
        going through some small strange motions with it—whether indispensable
        to the magnetizing of the steel, or merely intended to augment the awe
        of the crew, is uncertain—he called for linen thread; and moving to the
        binnacle, slipped out the two reversed needles there, and horizontally
        suspended the sail-needle by its middle, over one of the compass-cards.
      </p>

      <img src="https://via.placeholder.com/1280x720" class="img-fluid my-5" />

      <p>
        From Ripley until I came through Pyrford I was in the valley of the Wey,
        and the red glare was hidden from me. As I ascended the little hill
        beyond Pyrford Church the glare came into view again, and the trees
        about me shivered with the first intimation of the storm that was upon
        me. Then I heard midnight pealing out from Pyrford Church behind me, and
        then came the silhouette of Maybury Hill, with its tree-tops and roofs
        black and sharp against the red.
      </p>
      <br />
      <p>
        Even as I beheld this a lurid green glare lit the road about me and
        showed the distant woods towards Addlestone. I felt a tug at the reins.
        I saw that the driving clouds had been pierced as it were by a thread of
        green fire, suddenly lighting their confusion and falling into the field
        to my left. It was the third falling star!
      </p>
      <br />
      <p>
        Close on its apparition, and blindingly violet by contrast, danced out
        the first lightning of the gathering storm, and the thunder burst like a
        rocket overhead. The horse took the bit between his teeth and bolted.
      </p>
    </div>

    <div class="my-3 py-5">
      <div class="card flex-row is-radiusless">
        <nuxt-link to="/" tag="div" class="card-body py-5">
          <div class="text-left">
            <i class="las la-arrow-left" />
            <small class="font-weight-bold text-muted">REVIOUS STORY</small>
          </div>
          <h6 class="mb-0 mt-2">
            What Can Investing in Nonprofit Infrastructure Do? (Testing A
            Pagination)
          </h6>
        </nuxt-link>
        <!--  -->
        <nuxt-link to="/" tag="div" class="card-body py-5 border-left">
          <div class="text-right">
            <small class="font-weight-bold text-muted">NEXT STORY</small>
            <i class="las la-arrow-right" />
          </div>
          <h6 class="mb-0 mt-2">
            What Can Investing in Nonprofit Infrastructure Do? (Testing A
            Pagination)
          </h6>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.html {
  .youtube {
    width: 100%;
    position: relative;
    padding-bottom: 53%;
  }

  p {
    line-height: 190%;
  }

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.card-body {
  transition: 128ms;

  &:hover {
    small {
      color: $primary !important;
    }
    cursor: pointer;
    transition: 128ms;
    color: $primary;
  }
}
</style>
