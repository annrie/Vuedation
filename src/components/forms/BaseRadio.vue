<template>
  <template v-for="option in options" :key="option.id">
    <base-label :id="option.id">
      <input
        type="radio"
        :id="option.id"
        :name="name"
        :value="option.value"
        @change="updateValue"
      />{{ option.label }}
    </base-label>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';
import BaseLabel from './BaseLabel.vue';

export default defineComponent({
  name: 'BaseRadio',
  components: {
    'base-label': BaseLabel
  },
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    },
    options: {
      type: Array as PropType<InputItem[]>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const updateValue = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        context.emit('update:value', e.target.value);
      }
    };

    return {
      props,
      updateValue
    };
  }
});
</script>

<style scoped></style>
