<script setup lang="ts">
import PageBreadcrumbs from "@/components/pages/PageBreadcrumbs.vue";
import { FormKitIcon } from "@formkit/vue";
</script>

<template :nowPage="nowPage">
  <PageBreadcrumbs label="FormKit" />
  <section class="form">
    <FormKit type="form"
      :config="{ validationVisibility: 'submit' }"
      submit-label="送信"
      form-class="selection:bg-pink-200 my-8 mx-auto w-full max-w-2xl bg-white border-2 border-green-400 p-6 shadow-lg rounded-lg"
      :submit-attrs="{
        'input-class': 'bg-sky-500 py-2 px-4 mt-4 rounded-md text-white',
      }">
      <FormKit label="御社名"
        type="text"
        :classes="{
          outer: 'mb-4 mr-2 w-full',
          input:
            'shadow border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
          label: 'company name',
        }"
        placeholder="株式会社〇〇" />
      <div class="double">
        <FormKit label="お名前（姓）"
          prefix-icon="text"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'my-windi-label',
          }"
          validation="required"
          validation-visibility="live"
          placeholder="" />
        <FormKit label="お名前（名）"
          prefix-icon="text"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'my-windi-label',
          }"
          validation="required"
          validation-visibility="live"
          placeholder="" />
      </div>
      <div class="double">
        <FormKit label="メール"
          type="email"
          name="email"
          prefix-icon="email"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'email',
          }"
          validation="required|email"
          validation-visibility="live"
          placeholder="xxx@xxx.xxx" />
        <FormKit label="メール(確認)"
          type="email"
          name="email_confirm"
          prefix-icon="email"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'confirm email',
          }"
          validation="required|confirm"
          validation-visibility="live"
          placeholder="xxx@xxx.xxx" />
      </div>
      <div class="double">
        <FormKit type="password"
          name="password"
          label="Password"
          prefix-icon="password"
          suffix-icon="eyeClosed"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'password',
          }"
          validation="required|length:6"
          validation-visibility="live" />
        <FormKit type="password"
          name="password_confirm"
          label="Confirm password"
          prefix-icon="password"
          suffix-icon="eyeClosed"
          :classes="{
            outer: 'mb-4 mr-2 w-1/2',
            inner:
              'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
            prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
            input:
              'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
            label: 'confirm password',
          }"
          validation="required|confirm"
          validation-visibility="live"
          validation-label="Password confirmation" />
      </div>
      <FormKit label="ご要望"
        type="textarea"
        :classes="{
          input:
            'shadow border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
          label: '要望',
        }"
        placeholder="I like the really long class lists." />
    </FormKit>
  </section>
</template>

<style lang="scss" scoped>
.form {
  @apply mx-auto mt-20px mb-0 max-w-1000px;
}

.double {
  @apply flex max-w-full justify-between;
}

.formkit-suffix-icon:hover {
  @apply text-indigo-300;
  // color: var(--fk-color-primary);
}
</style>
