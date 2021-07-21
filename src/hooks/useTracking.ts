import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Load gtag.js & setup gtag config on window.
 */
const initializeGA = (measurementId: string): void => {
  // load gtag.js:  https://developers.google.com/analytics/devguides/collection/gtagjs
  const loadScript = document.createElement('script')
  loadScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  loadScript.async = true
  document.body.appendChild(loadScript)

  // setup gtag
  const setupScript = document.createElement('script')
  setupScript.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `
  document.body.appendChild(setupScript)
}

/**
 * Custom Hooks for tracking page view.
 * @param trackingId
 */
const useTracking = (
  trackingId: string | undefined = process.env.REACT_APP_GA_MEASUREMENT_ID, // if you are not using create-react-app, it doesn't need `REACT_APP` prefix.
): void => {
  const location = useLocation()

  useEffect(() => {
    if (!trackingId) {
      console.warn(
        'Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`.',
      )
      return
    }

    initializeGA(trackingId)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!window.gtag || !trackingId) return
    window.gtag('config', trackingId, { page_path: location.pathname })
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useTracking
