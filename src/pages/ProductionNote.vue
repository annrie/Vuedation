<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
// import PageBreadcrumbs from "@/components/pages/PageBreadcrumbs.vue";
import firebase from "firebase/compat/app";
import { FirebaseAuth } from "@/firebase/auth";

export default defineComponent({
  name: "ProductionNote",
  components: {
    // PageBreadcrumbs,
  },
  setup() {
    const state = reactive({
      loginStatus: false,
    });
    onMounted(() => {
      FirebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          console.log("ログインしています。");
          state.loginStatus = true;
        } else {
          console.log("ログインしていません。");
          state.loginStatus = false;
        }
      });
    });
    const onSignInGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      FirebaseAuth.signInWithPopup(provider)
        .then(() => {
          console.log("ログインしました。");
          state.loginStatus = true;
        })
        .catch((error) => {
          const signinError = `
        サインインエラー
        エラーメッセージ： ${error.message}
        エラーコード: ${error.code}
        `;
          console.log(signinError);
        });
    };
    const onSignInFacebook = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      FirebaseAuth.signInWithPopup(provider)
        .then(() => {
          console.log("ログインしました。");
          state.loginStatus = true;
        })
        .catch((error) => {
          const signinError = `
        サインインエラー
        エラーメッセージ： ${error.message}
        エラーコード: ${error.code}
        `;
          console.log(signinError);
        });
    };
    const onSignInTwitter = () => {
      const provider = new firebase.auth.TwitterAuthProvider();
      FirebaseAuth.signInWithPopup(provider)
        .then((result) => {
          state.loginStatus = true;
          const user = result.user;
          console.log(">>onSignInTwitter | ログインしました。user", user);
        })
        .catch((error) => {
          const signinError = `
      サインインエラー
      エラーメッセージ： ${error.message}
      エラーコード: ${error.code}
      `;
          console.log(signinError);
        });
    };
    const onSignOut = () => {
      FirebaseAuth.onAuthStateChanged((user) => {
        FirebaseAuth.signOut()
          .then(() => {
            console.log("ログアウトしました");
            state.loginStatus = false;
            console.log(user);
            location.reload();
          })
          .catch((error) => {
            console.log(`ログアウト時にエラーが発生しました (${error})`);
          });
      });
    };
    return {
      onSignInGoogle,
      onSignInFacebook,
      onSignInTwitter,
      onSignOut,
      ...toRefs(state),
    };
  },
});
</script>

<template>
<AmBreadcrumbs
    :showCurrentCrumb="true"
/>
  <!-- <PageBreadcrumbs label="Production note" /> -->
  <section class="ProductionNote">
    <h2 v-if="!loginStatus" class="ProductionNote__heading">
      <span>Production Noteを⾒るには</span>
      <span>ログインが必要です。</span>
    </h2>
    <div class="ProductionNote__inner">
      <ul class="ProductionNote__buttons">
        <li class="ProductionNote__buttonItem">
          <button
            v-if="!loginStatus"
            type="button"
            class="ProductionNote__button"
            @click="onSignInFacebook"
          >
            <span class="-facebook">Facebook ID</span> でLogin
          </button>
          <button
            v-if="loginStatus"
            type="button"
            class="ProductionNote__button"
            @click="onSignOut"
          >
            ログアウト
          </button>
        </li>
        <li v-if="!loginStatus" class="ProductionNote__buttonItem">
          <button type="button" class="ProductionNote__button" @click="onSignInTwitter">
            <span class="-twitter">Twitter ID</span> でLogin
          </button>
        </li>
        <li v-if="!loginStatus" class="ProductionNote__buttonItem">
          <button type="button" class="ProductionNote__button" @click="onSignInGoogle">
            Google ID でLogin
          </button>
        </li>
      </ul>
    </div>
  </section>
  <section v-if="loginStatus" class="Talk">
    <h2 class="Talk__title">本書籍を出版するあたって</h2>
    <p class="Talk__paragraph">
      Phantomoon がなぜVue.jsの書籍を出版したのか。
      書籍出版に至るまでの制作裏話を、語っていただきました。
    </p>
    <section class="Talk__interviewee">
      <h3 class="Talk__intervieweeHead">インタビュー参加者プロフィール</h3>
      <dl class="Talk__intervieweeList">
        <dt class="Talk__intervieweeName prototype">ABC</dt>
        <dd class="Talk__intervieweeBio prototype">
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of souls like
          mine.
        </dd>
        <dt class="Talk__intervieweeName prototype">VVV</dt>
        <dd class="Talk__intervieweeBio prototype">
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of souls like
          mine.
        </dd>
        <dt class="Talk__intervieweeName prototype">CCC</dt>
        <dd class="Talk__intervieweeBio prototype">
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of souls like
          mine.
        </dd>
        <dt class="Talk__intervieweeName prototype">YYY</dt>
        <dd class="Talk__intervieweeBio prototype">
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of souls like
          mine.
        </dd>
      </dl>
    </section>
    <section class="Talk__section prototype">
      <h3 class="Talk__heading">
        The Big Oxmox advised her not to do so, because there were
      </h3>
      <h4 class="Talk__subHeading">because there were</h4>
      <p class="Talk__paragraph">
        <b>ABC</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
        among the tall grass by the trickling stream; and, as I lie close to the earth, a
        thousand unknown plants are noticed by me: when I hear the buzz of the little
        world among the stalks, and grow familiar with the countless indescribable forms
        of the insects and flies, then I feel the presence of the Almighty, who formed us
        in his own image, and the breath
      </p>
      <p class="Talk__paragraph">
        <b>VVV</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
      </p>
      <h4 class="Talk__subHeading">
        The Big Oxmox advised her not to do so, because there were
      </h4>
      <p class="Talk__paragraph">
        <b>ABC</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
        among the tall grass by the trickling stream; and, as I lie close to the earth, a
        thousand unknown plants are noticed by me:
      </p>
      <p class="Talk__paragraph">
        <b>VVV</b> 一When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
        among the tall grass by the trickling stream; and, as I lie close to the earth, a
        thousand unknown plants are noticed by me: when I hear the buzz of the little
        world among the stalks, and grow familiar with the countless indescribable forms
        of the insects and flies, then I feel the presence of the Almighty, who formed us
        in his own image, and the breath
      </p>
      <h4 class="Talk__subHeading">because there were</h4>
      <p class="Talk__paragraph">
        <b>VVV</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
      </p>
      <p class="Talk__paragraph">
        <b>CCC</b> when I hear the buzz of the little world among the stalks, and grow
        familiar with the countless indescribable forms of the insects and flies, then I
        feel the presence of the Almighty, who formed us in his own image, and the breath
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
      </p>
      <h3 class="Talk__heading">
        The Big Oxmox advised her not to do so, because there were
      </h3>
      <h4 class="Talk__subHeading">The Big Oxmox advised her not to do so,</h4>
      <p class="Talk__paragraph">
        <b>VVV</b> WWhen, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the
      </p>
      <p class="Talk__paragraph">
        <b>CCC</b> 確When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
        among the tall grass by the trickling stream; and, as I lie close to the earth, a
        thousand unknown plants are noticed by me: when I hear the buzz of the little
        world among the stalks, and grow familiar with the countless indescribable forms
        of the insects and flies, then I feel the presence of the Almighty, who formed us
        in his own image, and the breath
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw myself down
        among
      </p>
      <h4 class="Talk__subHeading">The Big Oxmox advised</h4>
      <p class="Talk__paragraph"><b>VVV</b> When, while the lovely valley teems</p>
      <p class="Talk__paragraph">
        <b>CCC</b> and but a few stray gleams steal into the inner sanctuary, I throw
        myself down among the tall grass by the trickling stream; and, as I lie close to
        the earth,
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> When, while the lovely valley teems with vapour around me, and the
        meridian sun strikes the upper surface of the impenetrable
      </p>
      <h3 class="Talk__heading">
        The Big Oxmox advised her not to do so, because there were
      </h3>
      <h4 class="Talk__subHeading">ed for the bliss of souls</h4>
      <p class="Talk__paragraph">
        <b>VVV</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>
      <p class="Talk__paragraph">
        <b>CCC</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it is an
      </p>
      <h4 class="Talk__subHeading">
        The Big Oxmox advised her not to do so, because there were
      </h4>
      <p class="Talk__paragraph">
        <b>VVV</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>
      <p class="Talk__paragraph">
        <b>CCC</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
      </p>
      <p class="Talk__paragraph"><b>ABC</b> It is a paradisematic country,</p>
      <h4 class="Talk__subHeading">
        The Big Oxmox advised her not to do so, because there were
      </h4>
      <p class="Talk__paragraph">
        <b>ABC</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>
      <p class="Talk__paragraph">
        <b>VVV</b> It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the blind
        texts it
      </p>
      <p class="Talk__paragraph">
        <b>CCC</b> The Big Oxmox advised her not to do so, because there were
      </p>
      <p class="Talk__paragraph">
        <b>YYY</b> Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
        right at the coast of the Semantics, a large language ocean. A small river named
        Duden flows by their place and supplies it with the necessary regelialia.
      </p>
      <h3 class="Talk__heading">of souls</h3>
      <p class="Talk__paragraph">
        Far far away, behind the word mountains, far from the countries Vokalia and
        Consonantia, there live the blind texts.
      </p>
      <p class="Talk__paragraph">
        <a href="#" target="_blank"> 本書を購入する </a>
      </p>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.ProductionNote {
  @apply mt-[36px];
  // margin-top: 36px;
}

.ProductionNote__heading {
  @apply mx-auto my-0 max-w-1000px text-3xl text-hex-42b883;
  // max-width: 1000px;
  // margin: 0 auto;
  // font-size: em(30, 16);
  line-height: 1.73;

  // color: $COLOR_MAIN;
  @include lg(max) {
    @apply py-0 px-[20px];
    // padding: 0 20px;
  }

  @include md(max) {
    font-size: em(22, 16);
  }

  > span {
    @apply inline-block;
    // display: inline-block;
  }
}

.ProductionNote__inner {
  @apply mx-0 mt-[60px] py-[80px];
  // margin-top: 60px;
  // padding: 80px 0;
  // background-color: #fafdf5;
  box-shadow: 0 3px 6px rgba(#000, 0.06);

  @include md(max) {
    @apply mt-[30px] py-[40px] px-[20px];
    // margin-top: 30px;
    // padding: 40px 20px;
  }
}

.ProductionNote__buttons {
  @apply flex mx-auto my-0 max-w-[1000px] p-0 justify-center;

  // max-width: 1000px;
  // margin: 0 auto;
  // padding: 0;
  // display: flex;
  // justify-content: center;
  @include md(max) {
    @apply block;
    // display: block;
  }
}

.ProductionNote__buttonItem {
  @apply list-none;
  // list-style-type: none;
  width: calc((100% - 40px) / 3);

  @include md(max) {
    @apply w-full;
    // width: 100%;
  }

  &:not(:first-child) {
    @include md(min) {
      @apply ml-20px;
      // margin-left: 20px;
    }

    @include md(max) {
      @apply mt-15px;
      // margin-top: 15px;
    }
  }
}

.ProductionNote__button {
  @apply bg-transparent border-none cursor-pointer border-0 rounded-[40px] w-full py-[24px] px-0 block dark: bg-teal-400;
  // width: 100%;
  // padding: 24px 0;
  // display: block;
  font-size: em(20, 16);
  line-height: 1.6;
  // background-color: transparent;
  // border: 0 none;
  // border-radius: 40px;
  box-shadow: $SHADOW_BASE;

  // cursor: pointer;
  @include md(max) {
    @apply py-13px px-0;
    // padding: 13px 0;
    font-size: em(15, 16);
  }

  > span {
    &.-facebook {
      @apply text-hex-1877f2;
      // color: #1877f2;
    }

    &.-twitter {
      @apply text-hex-1da1f2;
      // color: #1da1f2;
    }
  }
}

.Talk {
  @apply mx-auto mt-[70px] mb-0 max-w-[800px];

  // max-width: 800px;
  // margin: 70px auto 0;
  @include lg(max) {
    @apply py-0 px-20px;
    // padding: 0 20px;
  }
}

.Talk__title {
  @apply border-solid font-normal border-b-2 border-b-hex-42b883 m-0 pb-4px text-2xl;
  // margin: 0;
  // padding-bottom: 4px;
  // font-size: em(24, 16);
  // font-weight: $FONT_WEIGHT_BASE_NORMAL;
  line-height: 1.6;
  // border-bottom: 2px solid $COLOR_MAIN;
}

.Talk__paragraph {
  margin: em(20, 15) 0 0;
  font-size: em(15, 16);
  line-height: 1.73;

  a {
    @apply text-hex-42b883 underline;
    // color: $COLOR_MAIN;
    // text-decoration: underline;

    &:hover {
      @apply no-underline;
      // text-decoration: none;
    }
  }

  b {
    @apply font-semibold mr-4;
    // margin-right: 1em;
    // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  }

  em {
    @apply bg-hex-f2ffc9 not-italic;
    // font-style: normal;
    // background-color: #f2ffc9;
  }
}

.Talk__interviewee {
  @apply flex mt-[40px];

  // margin-top: 40px;
  // display: flex;
  @include md(max) {
    @apply block;
    // display: block;
  }
}

.Talk__intervieweeHead {
  @apply flex-shrink-0;
  margin: 0 em(32, 16) 0 0;

  // flex-shrink: 0;
  font-size: em(16, 16);

  @include md(max) {
    @apply m-0;
    // margin: 0;
  }
}

.Talk__intervieweeList {
  @apply m-0;

  // margin: 0;
  @include md(max) {
    @apply mt-[20px];
    // margin-top: 20px;
  }
}

.Talk__intervieweeName {
  @apply font-bold mb-6px;
  // margin-bottom: 6px;
  font-size: em(10, 16);
  line-height: 1.4;
  // font-weight: $FONT_WEIGHT_BASE_BOLD;

  &:not(:first-child) {
    @apply mt-[24px];
    // margin-top: 24px;
  }
}

.Talk__intervieweeBio {
  @apply m-0;
  // margin: 0;
  font-size: em(12, 16);
}

.Talk__section {
  @apply mt-[72px];
  // margin-top: 72px;
}

.Talk__heading {
  @apply m-0;
  // margin: 0;
  font-size: em(20, 16);
  font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  color: $COLOR_MAIN;

  &:not(:first-child) {
    @apply mt-[50px];
    // margin-top: 50px;
  }
}

.Talk__subHeading {
  @apply font-semibold m-0 pl-[16px] relative;
  // position: relative;
  // margin: 0;
  // padding-left: 16px;
  font-size: em(16, 16);
  line-height: 1.625;
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;

  &::before {
    @apply bg-hex-42b883 top-[5px] bottom-[5px] left-0 w-[4px] absolute;
    // content: "";
    // position: absolute;
    // top: 5px;
    // left: 0;
    // bottom: 5px;
    // width: 4px;
    // background-color: $COLOR_MAIN;
  }

  &:not(:first-child) {
    @apply mt-[36px];
    // margin-top: 36px;
  }
}

.Talk__image {
  @apply my-[40px] mx-0;
  // margin: 40px 0;
}
</style>
