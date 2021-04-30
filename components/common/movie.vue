<template>
  <div v-if="data" class="relative">
    <div class="relative w-full movie__thumbnail">
      <img
        class="w-full h-full object-fit shadow"
        :src="thumbnail"
        :alt="data.id"
      />

      <div
        class="absolute top-0 left-0 bg-gray-900 bg-opacity-50 h-full w-full movie__thumbnail-overlay"
      >
        <play-icon
          title="Watch trailer"
          class="text-white opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 hover:transition transition w-14 fill-current absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
    <h5 class="font-medium tracking-tight text-lg pt-2 text-white">
      {{ data.name }}
    </h5>
    <div>
      <span class="text-gray-400 text-xs"> {{ data.duration }} MIN </span>
    </div>

    <button
      class="cursor-pointer block mt-4 w-full focus:outline-none outline-none border-none bg-gray-800 hover:bg-gray-700 transition hover:transition text-white rounded-sm text-sm font-medium px-4 py-2"
    >
      Lịch chiếu phim
    </button>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import PlayIcon from '~/assets/svg/play-button.svg?inline'

export default defineComponent({
  components: { PlayIcon },

  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  computed: {
    thumbnail() {
      const imageUri = 'https://www.galaxycine.vn'
      return `${imageUri}${this.data.imagePortrait}`
    },
  },

  setup(props) {},
})
</script>

<style lang="postcss" scoped>
.movie__thumbnail-overlay {
  @apply opacity-0 transition duration-300;
}

.movie__thumbnail:hover > .movie__thumbnail-overlay {
  @apply opacity-100 transition duration-300;
}
</style>
