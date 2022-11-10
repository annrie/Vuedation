<template>
  <select :id="id" :name="name" @change="updateValue">
    <option disabled selected value>選択してください</option>
    <template v-for="option in options" :key="option.id">
      <option :value="option.value">
        {{ option.label }}
      </option>
    </template>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';

export default defineComponent({
  name: 'BaseSelect',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    name: {
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
      if (e.target instanceof HTMLSelectElement) {
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
select {
  width: 130px;
}
</style>
