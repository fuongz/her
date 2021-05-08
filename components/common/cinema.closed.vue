<template>
  <div
    class="p-8 rounded-sm md:text-left text-center bg-gray-400 bg-opacity-5 rounded-md"
  >
    <div class="block md:flex gap-4 items-center justify-center">
      <icon-popcorns class="w-40 h-40" />
      <div>
        <h1 class="font-serif font-semibold my-4 md:mt-0 text-4xl">Oops!</h1>
        <p class="font-light">
          <span class="font-semibold">Galaxy Linh Trung</span>
          <span class="opacity-80">
            hiện đang đóng cửa do ảnh hưởng bởi COVID-19.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IconPopcorns from '~/assets/svg/popcorns.svg?inline'

export default defineComponent({
  components: { IconPopcorns },

  setup() {},
})
</script>
