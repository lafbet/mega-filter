import forEach from 'lodash/forEach'
import { Inertia } from '@inertiajs/inertia'

let compiledSearchParams = null

export default {
  methods: {
    /**
     * Update the given query string values.
     */
    updateQueryString(value) {
      let searchParams = new URLSearchParams(window.location.search)
      let currentUrl =`${window.location.pathname}?${searchParams}`

      console.log('searchParams', searchParams, value)

      forEach(value, (v, i) => {
        searchParams.set(i, v || '')
      })

      if (compiledSearchParams !== searchParams.toString()) {
        let targetUrl = `${window.location.pathname}?${searchParams}`
        if (currentUrl !== targetUrl) {
          window.history.pushState(
            {url: targetUrl},
            '',
            `${window.location.pathname}?${searchParams}`
          )
        }

        compiledSearchParams = searchParams.toString()
      }

      Nova.$emit('query-string-changed', searchParams)
    },
  },
}
