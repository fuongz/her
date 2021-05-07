<template>
  <div class="container mx-auto px-4 2xl:px-0 py-16">
    <common-movies :busy="busy.movies" :data="movies ? movies : []" />
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HerCinemas',

  setup() {
    const { $axios } = useContext()
    const busy = reactive({
      movies: false,
      upcoming: false,
    })

    const movies = useAsync(async () => {
      const res = await $axios.get(
        'https://www.galaxycine.vn/api/session/cinema/1020'
      )
      busy.movies = false
      return res.data
    })

    return { movies, busy }
  },
})
</script>
