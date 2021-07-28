/**
 * ref: https://developers.google.com/analytics/devguides/collection/gtagjs/events
 *
 * event {
 *   action: 'button_click',
 *   category: '[pagename]-[blockname]-[componentname]',
 * }
 * if you need to send label or value, you should add to event parameters.
 */

const PAGE_NAMES = ['Home', 'About', 'Service'] as const
const BLOCK_NAMES = ['Actions']

type PageName = typeof PAGE_NAMES[number]
type BlockName = typeof BLOCK_NAMES[number]

type CustomEventAction = 'button_click'

export type AnalyticsEvent = {
  category: `${PageName}-${BlockName}-${string}`
  action: CustomEventAction
  label?: string
  value?: number
}

type AnalyticsEventSchema = {
  [pageName in PageName]: {
    [blockName in BlockName]: {
      [componentName in string]: AnalyticsEvent | undefined
    }
  }
}

/* prettier-ignore */
const AnalyticsEvents: AnalyticsEventSchema = {
	/* Home */
	Home: {
		Actions: {
			Action1: {
				category: 'Home-Actions-Action1',
				action: 'button_click',
			},
			Action2: {
				category: 'Home-Actions-Action2',
				action: 'button_click',
			},
			Action3: {
				category: 'Home-Actions-Action3',
				action: 'button_click',
			},
		},
	},
	About: {
		Actions: {
			Action1: {
				category: 'About-Actions-Action1',
				action: 'button_click',
			},
			Action2: {
				category: 'About-Actions-Action2',
				action: 'button_click',
			},
			Action3: {
				category: 'About-Actions-Action3',
				action: 'button_click',
			}
		},
	},
	Service: {
		Actions: {
			Action1: {
				category: 'Service-Actions-Action1',
				action: 'button_click',
			},
			Action2: {
				category: 'Service-Actions-Action2',
				action: 'button_click',
			},
			Action3: {
				category: 'Service-Actions-Action3',
				action: 'button_click',
			}
		},
	},
}

export default AnalyticsEvents
