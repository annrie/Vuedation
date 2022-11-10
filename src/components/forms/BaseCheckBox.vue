<template>
  <template v-for="option in options" :key="option.id">
    <base-label :id="option.id">
      <input
        type="checkbox"
        :id="option.id"
        :name="name"
        :value="option.value"
        @change="updateValue"
      />{{ option.label }}
    </base-label>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, SetupContext } from 'vue';
import BaseLabel from './BaseLabel.vue';

type CheckboxState = {
  values: string[];
};

export default defineComponent({
  name: 'BaseCheckBox',
  components: {
    'base-label': BaseLabel
  },
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    options: {
      type: Array as PropType<InputItem[]>,
      required: true
    },
    value: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const state = reactive<CheckboxState>({
      values: []
    });

    const updateValue = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        const value = e.target.value;
        if (e.target.checked) {
          state.values = [...state.values, value];
        } else {
          state.values = state.values.filter(v => v !== value);
        }
        context.emit('update:value', state.values);
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
