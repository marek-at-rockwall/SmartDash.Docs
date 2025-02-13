import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  defaultProps: {
    // Change the default style of collapsible sections
    collapseStyle: 'collapsible-auto',
    showLineNumbers: false,
    wrap: true
  },
}