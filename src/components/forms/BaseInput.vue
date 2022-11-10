<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';

type InputAttr =
  | 'text'
  | 'number'
  | 'email'
  | 'url'
  | 'password'
  | 'tel'
  | 'date'
  | 'time';

export default defineComponent({
  name: 'BaseInput',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    name: {
      type: String as PropType<string>,
      required: true
    },
    type: {
      type: String as PropType<InputAttr>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    },
    placeholder: {
      type: String as PropType<string>,
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

<style scoped>
input {
  width: 100%;
}
</style>
