<template>
  <div class="back-to-top-sticky hide-for-print"
    data-sticky-container>
    <SvgBackToTop />
    <footer id="footer"
      class="footer">
      <div class="flex flex-wrap px-1.5 justify-center">
        <nav class="w-full px-2.5 md:w-1/2 lg:w-4/12">
          <ul>
            <template v-for="item in social"
              :key="item.index">
              <li>
                <a :href=" item.link "
                  target="_blank"><i :class=" item.classes " /></a>
              </li>
            </template>
          </ul>
        </nav>
      </div>
      <div class="text-center cell copyright small-shrink">
        <Copyright />
      </div>
    </footer>
  </div>
</template>

<script>
const social = [
  {
    name: "instagram",
    link: "https://www.instagram.com/muraie_jin/",
    classes: "fa fa-instagram fa-2x",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jin-muraie",
    classes: "fa fa-linkedin-square fa-2x",
  },
  {
    name: "github",
    link: "https://github.com/annrie",
    classes: "fa fa-github fa-2x",
  },
  {
    name: "twitter",
    link: "https://twitter.com/muraie_jin",
    classes: "fa fa-twitter-square fa-2x",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/muraiejin",
    classes: "fa fa-facebook-official fa-2x",
  },
]
export default {
  name: "TheFooter",
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
  data ()
  {
    return {
      social,
    }
  },
  mounted ()
  {
    const hash = this.$route.hash
    if ( hash && hash.match( /^#.+$/ ) )
    {
      this.$scrollTo( hash )
    }
  },
}
</script>
<style lang="scss">
.font-awesome-size {
  @apply text-3xl text-hex-696969;
    // font-size: 30px;
    // color: #696969;
}

.font-awesome-size-solid {
  @apply text-3xl text-hex-f83979;
  // font-size: 30px;
  // color: #f83979;
}
</style>
