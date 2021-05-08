<template>
  <div v-if="data" class="grid grid-cols-4 gap-2 mt-4">
    <span
      v-for="session in data"
      :key="session.id"
      class="text-sm font-medium cursor-pointer px-3 py-2 border border-gray-500 text-center hover:transition transtion"
      :class="{
        'text-gray-300 hover:bg-white hover:text-gray-900': variant === 'dark',
        'text-gray-700 hover:bg-violet-50 hover:border-violet-700 hover:text-violet-700':
          variant === 'light',
      }"
    >
      {{ session.showTime }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },

    variant: {
      type: String,
      default: 'dark',
    },
  },
})
</script>
