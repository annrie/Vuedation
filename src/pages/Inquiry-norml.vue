<template>
  <!-- https://qiita.com/taka_1156/items/c65700208072b1f30337 -->
  <PageBreadcrumbs label="Inquiry" />
  <h1>About</h1>
  <base-errors :errors="state.errors" />
  <div class="about">
    <form-box @send-result="sendResult"
      @send-errors="sendErrors" />
    <div class="result">
      <p>Result</p>
      <template v-for="(result,index) in state.results"
        :key="`result_${index}`">
        <p>{{ result}}</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive} from 'vue';
import PageBreadcrumbs from "@/components/pages/PageBreadcrumbs.vue";
import BaseErrors from '@/components/forms/BaseErrors.vue';
import FormBox from '@/components/FormBox.vue';

export default defineComponent({
  name: 'Inquiry',
  components: {
    'base-errors': BaseErrors,
    'form-box': FormBox,
    PageBreadcrumbs
  },
  setup() {
    const state=reactive<ResultState>({
      results: null,
      errors: []
    });

    const sendResult=(result: InputState) => {
      state.results={...result};
    };

    const sendErrors=(errors: ValidateError[]) => {
      state.errors=errors;
    };

    return {state,sendResult,sendErrors};
  }
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  width: 80%;
}

.result {
  border: 2px dotted #42b983;
  width: 50%;
}
</style>
