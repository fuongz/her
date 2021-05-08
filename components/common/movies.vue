<template>
  <elements-overlay :busy="busy">
    <div
      v-if="data && data.length > 0"
      class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-24 mt-8"
    >
      <common-movie
        v-for="movie in data"
        :key="`${keyPrefix}-${movie.id}`"
        :data="movie"
        @get-schedules="getSchedule(movie)"
      />
    </div>

    <common-cinema-closed v-else />

    <!-- Modal single movie -->
    <elements-modal :show="show" @close="onClose">
      <h4 class="font-medium text-lg">Lịch chiếu</h4>

      <template
        v-if="
          movieSeleted.value &&
          movieSeleted.value.dates &&
          movieSeleted.value.dates.length > 0
        "
      >
        <div
          v-for="curDate in movieSeleted.value.dates"
          :key="curDate.showDate"
          class="mt-6"
        >
          <h5 class="text-gray-700 font-medium">
            {{ curDate.dayOfWeekLabel }} - {{ curDate.showDate }}
          </h5>

          <common-schedules
            :data="curDate.bundles[0].sessions"
            variant="light"
          />
        </div>
      </template>
    </elements-modal>
  </elements-overlay>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: [Array, Object],
      default: undefined,
      required: true,
    },

    busy: {
      type: Boolean,
      default: false,
    },

    keyPrefix: {
      type: String,
      default: 'movie',
    },
  },

  setup() {
    const show = ref(false)
    const movieSeleted = reactive<any>({})

    const getSchedule = (movie: any) => {
      if (movie) {
        show.value = true
        movieSeleted.value = movie
      }
    }

    const onClose = () => (show.value = false)

    return { movieSeleted, show, getSchedule, onClose }
  },
})
</script>
