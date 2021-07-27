import { AnalyticsEvent } from '../const/analyticsEvent'

export const sendEvent = (event?: AnalyticsEvent): void => {
  if (!window.gtag) return
  if (!event) {
    console.warn('Undefined analytics event')
    return
  }

  const { action, category, label, value } = event

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
