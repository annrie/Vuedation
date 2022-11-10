<template>
  <label :for="id">
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseLabel',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>

<style scoped></style>
