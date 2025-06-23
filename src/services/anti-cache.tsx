import { useEffect } from "react"

/**
 * Prevent the browser from loading a cached version of the page causing issues if the user presses the back button.
 */
export default function AntiCacheService() {
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload()
      }
    }

    window.addEventListener("pageshow", handlePageShow)
    return () => window.removeEventListener("pageshow", handlePageShow)
  }, [])

  return null
}