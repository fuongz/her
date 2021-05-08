<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      class="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
          aria-hidden="true"
        />

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block bg-gray-800 align-bottom rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="px-4 pt-4 pb-4 sm:p-4 sm:pb-4">
              <div class="text-left">
                <slot />
              </div>
            </div>
            <div class="px-4 py-3 sm:px-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg- text-base font-medium bg-gray-400 bg-opacity-8 hover:bg-opacity-10 transition hover:transition text-white text-opacity-80 hover:text-opacity-100 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click.prevent="$emit('close')"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
