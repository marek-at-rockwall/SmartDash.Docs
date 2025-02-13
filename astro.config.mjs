// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: "https://marek-at-rockwall.github.com",
	base: "/SmartDash.Docs",
	integrations: [
		starlight({
			title: "docs",
			description: "The user and report developer documentation for the SmartDash.app providing advanced financial dashboards that give you clear and in-depth relevant information regarding your business financial standing.",
			logo: {
				alt: "SmartDash",
				light: './src/assets/SmartDash-50plus10-height-black.png',
				dark: './src/assets/SmartDash-50plus10-height-white.png'
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4
			},
			editLink: {
				baseUrl: 'https://github.com/marek-at-rockwall/SmartDash.Docs/edit/main/',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			expressiveCode: {
				// Replace the default themes with a custom set of bundled themes:
				// "dracula" (a dark theme) and "solarized-light"
				themes: ['slack-dark', 'light-plus'],
			},
			customCss: ['./src/css/custom-overrides.css'],
			sidebar: [
				// {
				// 	label: 'User guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{
				// 			label: 'User guides',
				// 			autogenerate: { directory: 'user' }
				// 		},
				// 	],
				// },
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Get started',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'User guide',
					collapsed: true,
					autogenerate: { directory: 'user' },
				},
				{
					label: 'Report developer guide',
					collapsed: true,
					autogenerate: { directory: 'developer' },
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{
							label: 'Report slicers',
							collapsed: true,
							items: [
								{
									label: 'Object properties',
									link: 'reference/report-slicers/object-properties'
								},
								{
									label: 'Allowed functions',
									link: 'reference/report-slicers/allowed-functions'
								},
								{
									label: 'Full example',
									link: 'reference/report-slicers/full-example'
								}
							]
						},
						{
							label: 'Documentation reference',
							link: 'reference/documentation-reference',
							attrs: { style: 'font-style: italic'}
						}
					],
				},
			],
		}),
		icon()

	],
});