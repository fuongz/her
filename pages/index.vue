<template>
  <div class="container mx-auto px-4 2xl:px-0">
    <h1 class="text-3xl font-semibold tracking-tight py-4 text-gray-900">
      Galaxy Linh Trung
    </h1>

    <template v-if="!busy">
      <div
        class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-24"
      >
        <common-movie
          v-for="movie in movies"
          :key="movie.id"
          :data="movie"
          @get-schedules="getSchedule(movie)"
        />
      </div>
    </template>

    <elements-overlay v-if="busy" class="h-40" :busy="busy" />

    <elements-modal :show="show" @close="onClose">
      <h4 class="font-medium text-lg">Lịch chiếu</h4>

      <template v-if="movieSeleted.value">
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
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HerCinemas',

  setup() {
    const { $axios } = useContext()
    const busy = ref(true)
    const show = ref(false)
    const movieSeleted = reactive({})

    const movies = useAsync(async () => {
      const res = await $axios.get(
        'https://www.galaxycine.vn/api/session/cinema/1020'
      )
      busy.value = false
      return res.data
    })

    const getSchedule = (movie) => {
      if (movie) {
        show.value = true
        movieSeleted.value = movie
      }
    }

    const onClose = () => (show.value = false)

    return { movies, movieSeleted, busy, show, getSchedule, onClose }
  },
})
</script>
