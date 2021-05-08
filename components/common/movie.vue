<template>
  <div v-if="data" class="relative pb-16">
    <div class="relative w-full movie__thumbnail">
      <img
        class="w-full h-full object-fit shadow"
        :src="thumbnail"
        :alt="data.id"
      />

      <div
        v-if="data.trailer"
        class="absolute top-0 left-0 bg-gray-900 bg-opacity-50 h-full w-full movie__thumbnail-overlay"
      >
        <a
          :href="data.trailer"
          target="_blank"
          class="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 block"
        >
          <icon-play
            title="Watch trailer"
            class="text-white bg-transparent opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 hover:transition transition w-14 fill-current"
          />
        </a>
      </div>
    </div>

    <h5 class="font-medium tracking-tight text-lg pt-4">
      {{ data.name }}
    </h5>

    <template v-if="data.startdate && data.enddate">
      <p class="text-opacity-50 text-white text-sm mt-2">
        Công chiếu từ
        <span class="text-opacity-80 text-white">
          {{ humanDate(data.startdate) }}
        </span>
        &rightarrow;
        <span class="text-opacity-80 text-white">
          {{ humanDate(data.enddate) }}
        </span>
      </p>
    </template>

    <template v-if="data.duration">
      <span class="text-gray-400 text-xs"> {{ data.duration }} phút </span>
    </template>

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
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import IconPlay from '~/assets/svg/play-button.svg?inline'

export default defineComponent({
  components: { IconPlay },

  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  computed: {
    thumbnail(): string {
      const imageUri = 'https://www.galaxycine.vn'
      return `${imageUri}${this.data.imagePortrait}`
    },
  },

  setup(props) {
    const { $dayjs } = useContext()
    const currentDateSchedules =
      props?.data?.dates && props?.data?.dates.length > 0
        ? props?.data?.dates[0]
        : null

    const humanDate = (timeString: string) =>
      $dayjs(timeString).format('DD/MM/YYYY')

    return {
      schedule: currentDateSchedules,
      humanDate,
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
