<template>
  <form class="form-box"
    @submit.prevent>
    <p>Form</p>
    <fieldset class="form-box__fieldset">
      <legend>inputフォーム</legend>
      <!-- input text -->
      <div class="form-box__input">
        <base-label id="sample-name">name</base-label>
        <base-input id="sample-name"
          name="sample-name"
          type="text"
          placeholder="name"
          v-model:value="state.sampleName" />
      </div>
      <!-- input email -->
      <div class="form-box__input">
        <base-label id="sample-email">email</base-label>
        <base-input id="sample-email"
          name="sample-email"
          type="email"
          placeholder="sample@hoge.com"
          v-model:value="state.sampleEmail" />
      </div>
      <!-- input password -->
      <div class="form-box__input">
        <base-label id="sample-password">password</base-label>
        <base-input id="sample-password"
          name="sample-password"
          type="password"
          placeholder="password"
          v-model:value="state.samplePassword" />
      </div>
      <!-- input textarea -->
      <div class="form-box__input">
        <base-label id="sample-textarea">テキスエリア</base-label>
        <base-text-area id="sample-textarea"
          name="sample-textarea"
          :rows="3"
          :cols="50"
          placeholder="テキストエリア"
          v-model:value="state.sampleTextarea" />
      </div>
    </fieldset>
    <!-- radio -->
    <fieldset class="form-box__fieldset">
      <legend>使ったことのあるフレームワークは?</legend>
      <base-radio name="frontend-used"
        :options="radios"
        v-model:value="state.sampleRadio" />
    </fieldset>
    <!-- checkbox -->
    <fieldset class="form-box__fieldset">
      <legend>使ったことのあるバックエンド系言語は?</legend>
      <base-check-box name="backend-used"
        :options="checkboxes"
        v-model:value="state.sampleCheck" />
    </fieldset>
    <!-- select box -->
    <fieldset class="form-box__fieldset">
      <base-label id="future-learning">Future Learning</base-label>
      <legend>今後学びたい言語は?</legend>
      <base-select id="future-learning"
        name="future-learning"
        :options="selects"
        v-model:value="state.sampleSelect" />
    </fieldset>
    <div class="form-box__input">
      <input type="submit"
        value="確定"
        @click="sendResult" />
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent,reactive,SetupContext,computed} from 'vue';
import BaseLabel from './forms/BaseLabel.vue';
import BaseCheckBox from './forms/BaseCheckBox.vue';
import BaseInput from './forms/BaseInput.vue';
import BaseRadio from './forms/BaseRadio.vue';
import BaseSelect from './forms/BaseSelect.vue';
import BaseTextArea from './forms/BaseTextArea.vue';
import {selects,radios,checkboxes} from '@/constants/index';
// https://vuelidate-next.netlify.app/
import {useVuelidate} from '@vuelidate/core';
import {helpers,email,required} from '@vuelidate/validators';

export default defineComponent({
  name: 'FormBox',
  components: {
    'base-label': BaseLabel,
    'base-input': BaseInput,
    'base-text-area': BaseTextArea,
    'base-check-box': BaseCheckBox,
    'base-radio': BaseRadio,
    'base-select': BaseSelect
  },
  setup(props,context: SetupContext) {
    const state=reactive<InputState>({
      sampleName: '',
      sampleEmail: '',
      samplePassword: '',
      sampleTextarea: '',
      sampleRadio: '',
      sampleCheck: [],
      sampleSelect: ''
    });

    const rules={
      sampleName: {
        required: helpers.withMessage('nameは必須入力です。',required)
      },
      sampleEmail: {
        required: helpers.withMessage('emailは必須入力です。',required),
        email: helpers.withMessage(
          'メールアドレスの形式が正しくありません。',
          email
        )
      },
      samplePassword: {
        required: helpers.withMessage('passwordは必須入力です。',required)
      },
      sampleTextarea: {
        required: helpers.withMessage(
          'テキストエリアは必須入力です。',
          required
        )
      },
      sampleRadio: {
        required: helpers.withMessage(
          'フレームワークの質問は必須入力です。',
          required
        )
      },
      sampleCheck: {
        required: helpers.withMessage(
          'バックエンド系言語の質問は必須入力です。',
          required
        )
      },
      sampleSelect: {
        required: helpers.withMessage(
          '今後学びたい言語の質問は必須入力です。',
          required
        )
      }
    };

    const validator=useVuelidate(rules,state,{$lazy: true});

    const canSubmit=computed(() => {
      return !validator.value.$invalid&&validator.value.$dirty;
    });

    const sendResult=async () => {
      await validator.value.$validate();
      if(canSubmit.value) {
        context.emit('send-result',state);
      }
      context.emit('send-errors',validator.value.$errors);
    };
    const v$=useVuelidate(rules,state,{$lazy: true})
    return {
      state,
      v$,
      sendResult,
      selects,
      radios,
      checkboxes
    };
  }
});
</script>

<style lang="scss" scoped>
.form-box {
  width: 50%;
  border: 2px dotted #2c3e50;
}

.form-box__fieldset {
  margin: 5px auto;
  width: 80%;
}

.form-box__input {
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  width: 80%;
}
</style>
