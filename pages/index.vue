<template>
  <div class="container mx-auto px-4 2xl:px-0">
    <h1 class="text-3xl font-semibold tracking-tight py-4 text-white">
      Galaxy Linh Trung
    </h1>

    <template v-if="!busy">
      <div
        class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-24"
      >
        <common-movie v-for="movie in movies" :key="movie.id" :data="movie" />
      </div>
    </template>

    <elements-overlay class="h-40" :busy="busy" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const busy = ref(true)
    const movies = useAsync(async () => {
      const res = await $axios.get(
        'https://www.galaxycine.vn/api/session/cinema/1020'
      )
      return res.data
    })
    busy.value = false
    return { movies, busy }
  },
})
</script>
