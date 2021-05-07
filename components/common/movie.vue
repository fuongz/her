<template>
  <div v-if="data" class="relative pb-16">
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
          class="text-white bg-transparent opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 hover:transition transition w-14 fill-current absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
    <h5 class="font-medium tracking-tight text-lg pt-4">
      {{ data.name }}
    </h5>
    <div v-if="data.duration">
      <span class="text-gray-400 text-xs"> {{ data.duration }} phút </span>
    </div>

    <template
      v-if="schedule && schedule.bundles && schedule.bundles.length > 0"
    >
      <common-schedules :data="schedule.bundles[0].sessions" variant="light" />
    </template>

    <div class="absolute bottom-0 w-full">
      <button
        class="cursor-pointer block mt-4 w-full focus:outline-none outline-none bg-gray-400 bg-opacity-8 hover:bg-opacity-10 transition hover:transition text-white text-opacity-80 hover:text-opacity-100 rounded-sm text-sm font-medium px-4 py-2"
        @click.prevent="$emit('get-schedules')"
      >
        Lịch chiếu phim
      </button>
    </div>
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

  setup(props) {
    const currentDateSchedules =
      props?.data?.dates && props?.data?.dates.length > 0
        ? props?.data?.dates[0]
        : null

    return {
      schedule: currentDateSchedules,
    }
  },
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
