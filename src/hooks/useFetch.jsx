import { useState, useEffect, useCallback } from 'react'

// Hook qui charge un JSON depuis une URL et renvoie data, isLoading et error.
// retry() permet de relancer la requête après une erreur.
function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  // Quand retry() change ce compteur, le useEffect se relance
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    // Pour annuler la requête si le composant est démonté
    const controller = new AbortController()

    async function fetchData() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url, { signal: controller.signal })

        // fetch ne plante pas sur une 404 ou 500, donc on teste response.ok
        if (!response.ok) {
          throw new Error(`code ${response.status}`)
        }

        setData(await response.json())
      } catch (err) {
        if (controller.signal.aborted) return
        setError(`Impossible de charger les données (${err.message}).`)
      }

      if (!controller.signal.aborted) {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url, attempt])

  const retry = useCallback(() => {
    setAttempt((previous) => previous + 1)
  }, [])

  return { data, isLoading, error, retry }
}

export default useFetch
