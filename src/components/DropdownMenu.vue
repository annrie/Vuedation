<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
          <li>
            <a>Item 1</a>
            <ul class="menu">
              <li><a>Item 1A</a></li>
              <!-- ... -->
            </ul>
          </li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownMenu',
    data() {
      return {
        msg: 'Dropdown Menu',
      }
    },
    mounted() {
      this.dropdownMenu = new Foundation.DropdownMenu($('#dropdown-menu'), {
        // These options can be declarative using the data attributes
        hoverDelay: 300,
      })
    },
    destroyed() {
      this.dropdownMenu.destroy()
    },
  }
</script>
<style lang="scss">
  #dropdown-menu {
    .is-dropdown-submenu-parent.opens-right {
      &.is-active {
        a {
          color: $white;
          background-color: rgba ($primary-color, 0.7);
          &:hover {
            color: $white;
            background-color: $vapor;
          }
        }
        .is-dropdown-submenu {
          & > .is-submenu-item {
            background-color: rgba ($primary-color, 0.9);
          }
          &.js-dropdown-active {
            a {
              color: $white;
              background-color: $white-smoke;
              &:hover {
                color: get-color(primary);
                background-color: lighten($primary-color, 40%);
              }
            }
          }
        }
      }
    }
  }
</style>
