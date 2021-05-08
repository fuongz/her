const API_GALAXY_CINE = 'https://www.galaxycine.vn/api'

const fetch = async (url: string) => {
  const response = await window.fetch(url)
  return await response.json()
}

export const galaxyCine = {
  getCurrentMovies() {
    return fetch(`${API_GALAXY_CINE}/session/cinema/1020`)
  },

  getUpComingMovies() {
    return fetch(`${API_GALAXY_CINE}/movie/showAndComming`)
  },
}
