<template>
  <div class="container mx-auto px-4 2xl:px-0 py-16">
    <div class="text-center">
      <h1
        class="text-5xl leading-none font-bold text-center text-white text-opacity-90 tracking-tight mb-4"
      >
        Lịch chiếu phim
      </h1>
      <p class="text-white text-opacity-50 text-2xl tracking-tight mb-10">
        Lịch chiếu phim tại cụm rạp Galaxy Linh Trung
      </p>
    </div>

    <lazy-common-movies
      :busy="fetchState.pending"
      :data="movies && movies.currentMovies ? movies.currentMovies : []"
    />

    <div class="text-center mt-8 md:mt-16">
      <h1
        class="text-3xl font-bold text-center text-white text-opacity-90 tracking-tight mb-3"
      >
        Phim chuẩn bị công chiếu
      </h1>
      <p class="text-white text-opacity-50 text-lg tracking-tight mb-10">
        Tất cả phim chuẩn bị công chiếu tại Galaxy Cinema
      </p>
    </div>
    <lazy-common-movies
      :busy="fetchState.pending"
      :data="movies && movies.upComingMovies ? movies.upComingMovies : []"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useFetch } from '@nuxtjs/composition-api'
import { galaxyCine } from '~/services/MovieAPI'

export default defineComponent({
  name: 'HerCinemas',

  setup() {
    const movies = reactive({
      currentMovies: [],
      upComingMovies: [],
    })

    const { fetchState } = useFetch(async () => {
      const upComingMovies = await galaxyCine.getUpComingMovies()
      movies.currentMovies = await galaxyCine.getCurrentMovies()
      movies.upComingMovies = upComingMovies?.movieCommingSoon
    })

    return { movies, fetchState }
  },
})
</script>
