<script setup lang="ts">
</script>

<template>
<AmBreadcrumbs
    :showCurrentCrumb="true"
/>
  <section class="Introduction">
    <h2 class="Introduction__heading">
      <span class="Introduction__headingLogo">
        <!-- <span class="Introduction__headingLogo" v-for="image in images.assets" :key="image.id"> -->
        <img src="@/assets/images/logo-phantomoon.webp" alt="logo" />
        <!-- <img
                            v-if="image.id === 1"
                            :src="getAsset(image.src)"
                            :alt="image.alt"
                        /> -->
      </span>
      <span class="Introduction__headingText">とは</span>
    </h2>
    <div class="Introduction__content">
      <p class="Introduction__description prototype">
        Lorem ipsum dolor sit amet. At tempore cupiditate id pariatur unde aut nesciunt
        minus. Ea quis doloremque aut tempora eaque ea beatae eaque ea omnis atque quo
        quibusdam vero ad atque quos. Eos obcaecati beatae sed sint vitae ut recusandae
        architecto. Aut odio quas eos doloribus ducimus et laborum accusantium sed
        recusandae voluptatibus est dignissimos sint. <br />
        Eum natus dicta et corporis molestiae est corporis nisi qui adipisci nihil et
        cumque iure. Et consequatur quia eos deserunt culpa rem molestiae doloremque id
        maxime provident est possimus odit. Rem deleniti suscipit vel galisum consequatur
        aut nobis facere At omnis possimus.
      </p>
      <div class="Introduction__image">
        <div class="Introduction__imageItem">
          <video
            autoplay
            muted
            loop
            playsinline
            src="@/assets/images/author-member.mp4"
          ></video>

          <!-- <div class="Introduction__imageItem" v-for="image in images.assets" :key="image.id"> -->
          <!-- <img src="@/assets/images/author-member.jpg" alt="メンバー" /> -->
          <!-- <img
                                              v-if="image.id === 2"
                                                :src="getAsset(image.src)"
                                                :alt="image.alt"
                                              /> -->
        </div>
      </div>
      <p class="Introduction__link">
        <a href="https://phantomoon.com/" target="_blank">Phantomoonの詳しい情報</a>
      </p>
    </div>
  </section>
  <section class="Narrative">
    <h2 class="Narrative__heading">本書籍を出版するにあたって</h2>
    <p class="Narrative__text prototype">
      Et minima odio ex eaque alias aut accusamus aspernatur qui enim consectetur aut
      laboriosam laudantium ab quisquam nemo. Non ratione suscipit est nisi rerum et atque
      porro aut necessitatibus fugit qui laudantium delectus et nostrum possimus.<br />
      Et minima odio ex eaque alias aut accusamus aspernatur qui enim consectetur aut
      laboriosam laudantium ab quisquam nemo. Non ratione suscipit est nisi rerum et atque
      porro aut necessitatibus fugit qui laudantium delectus et nostrum possimus.<br />
      Non expedita dolores et quae dolores vel esse nulla eum aspernatur voluptatibus qui
      molestias deserunt. Sit dolores perspiciatis est asperiores tempore ab veniam
      provident eos consequuntur exercitationem est odio sint qui praesentium error.
    </p>
    <p class="Narrative__link">
      <router-link to="/production-note">Production Noteを見る</router-link>
    </p>
  </section>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.Introduction {
  @apply mx-auto mt-30px mb-0 max-w-1000px;

  @screen lt-xl {
    @apply py-0 px-20px;
  }
}

.Introduction__heading {
  @apply flex m-0 items-center;
  font-size: em(16, 16);
}

.Introduction__headingLogo {
  @apply w-433px;

  @screen lt-tb {
    @apply w-285px;
  }
}
.Introduction__headingText {
  @apply mt-12px mr-0 mb-0 ml-24px;

  @screen lt-tb {
    @apply mt-8px mr-0 mb-0 ml-8px;
    font-size: em(15, 16);
  }
}

.Introduction__content {
  @apply mt-20px grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 460px;
  grid-template-areas:
    "text image"
    "link image";

  @screen lt-xl {
    grid-template-columns: auto 360px;
  }

  @screen lt-tb {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    grid-template-areas:
      "text"
      "image"
      "link";
  }
}

.Introduction__description {
  @apply my-0 mr-40px ml-0;
  grid-area: text;
  font-size: em(16, 16);
  font-weight: var(--FONT_WEIGHT_BASE_BOLD);
  line-height: 2.125;

  @screen lt-xl {
    @apply my-0 mr-30px ml-0;
  }

  @screen lt-tb {
    @apply m-0;
    font-size: em(14, 16);
    line-height: 1.64;
  }
}

.Introduction__image {
  grid-area: image;

  @screen lt-tb {
    @apply mt-25px;
  }
}

.Introduction__imageItem {
  @apply rounded-20px overflow-hidden;

  @screen lt-tb {
    @apply rounded-10px;
  }
}

.Introduction__link,
.Narrative__link {
  @apply mt-30px mr-40px text-right mb-0 ml-0;
  grid-area: link;

  @screen lt-xl {
    @apply mt-20px mr-30px mb-0 ml-0;
  }

  @screen lt-tb {
    @apply mx-0 mt-30px text-center mb-0;
   }

  > a {
    @apply text-center min-w-[260px] py-[13px] px-[25px] inline-block no-underline rounded-10px box-border;
    font-size: em(15, 16);
    line-height: 1.6;
    color: var(--COLOR_MAIN);
    background-color: #fbfdf5;
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
    transition: box-shadow var(--SEC) ease;

    @screen lt-tb {
      @apply text-sm min-w-240px py-9px px-20px;
      font-size: em(14, 16);
    }

    &:hover {
      box-shadow: 3px 3px 24px rgba(#d9e6bd, 0.9);
    }
  }
}

.Narrative {
  @apply mx-auto mt-100px mb-0 max-w-1000px;

  @screen lt-xl {
    @apply py-0 px-20px;
  }

  @screen lt-tb {
    @apply mt-50px;
  }
}

.Narrative__heading {
  @apply m-0;
  font-size: em(24, 16);
  font-weight: var(--FONT_WEIGHT_BASE_DEMIBOLD);
  color: var(--COLOR_MAIN);

  @screen lt-tb {
    font-size: em(17, 16);
  }
}

.Narrative__text {
  @apply mx-0 mt-36px mb-0;
  font-size: em(15, 16);
  font-weight: var(--FONT_WEIGHT_BASE_DEMIBOLD);
  line-height: 1.73;

  @screen lt-tb {
    @apply mt-20px;
    font-size: em(14, 16);
    line-height: 1.64;
  }
}
</style>
