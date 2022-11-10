<template>
  <div v-if="errors.length !== 0">
    <p
      class="base-errors"
      v-for="(error, index) in errors"
      :key="`error_${index}`"
    >
      {{ error.$message }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseErrors',
  props: {
    errors: {
      type: Array as PropType<ValidateError[]>,
      default: () => []
    }
  }
});
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.base-errors {
  color: red;
}
</style>
