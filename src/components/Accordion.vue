<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <ul id="accordion" class="accordion" data-accordion>
          <li class="accordion-item is-active" data-accordion-item>
            <a href="#" class="accordion-title">Accordion 1</a>
            <div class="accordion-content" data-tab-content>
              If you init Foundation in the component, this will work fine.
            </div>
          </li>
          <li class="accordion-item" data-accordion-item>
            <a href="#" class="accordion-title">Accordion 2</a>
            <div class="accordion-content" data-tab-content>
              I need to be clicked, in order to show up.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // import Foundation from '~/plugins/foundation'
  export default {
    name: 'Accordion',
    data() {
      return {
        msg: 'Accordion',
      }
    },
    computed: {
      page() {
        return this.$store.state.pages.page
      },
    },
    mounted() {
      this.accordion = new Foundation.Accordion($('#accordion'), {
        // These options can be declarative using the data attributes
        slideSpeed: 500,
        multiExpand: true,
      })
    },
    destroyed() {
      this.accordion.destroy()
    },
  }
</script>
