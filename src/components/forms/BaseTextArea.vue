<template>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    :value="value"
    @input="updateValue"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue';

export default defineComponent({
  name: 'BaseTextArea',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    name: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    },
    rows: {
      type: Number as PropType<number>,
      required: true
    },
    cols: {
      type: Number as PropType<number>,
      required: true
    },
    placeholder: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const updateValue = (e: Event): void => {
      if (e.target instanceof HTMLTextAreaElement) {
        context.emit('update:value', e.target.value);
      }
    };
    return { props, updateValue };
  }
});
</script>

<style scoped>
textarea {
  resize: none;
  width: 100%;
}
</style>
