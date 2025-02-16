// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';
import starlightImageZoom from 'starlight-image-zoom';
import starlightHeadingBadges from 'starlight-heading-badges';
//import starlightSiteGraph from 'starlight-site-graph';
import starlightSidebarTopics from 'starlight-sidebar-topics';


// https://astro.build/config
export default defineConfig({
	site: "https://docs.vsechovsky.com",
	base: "/",
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
			plugins: [
				starlightLinksValidator(),
				//starlightBlog(),
				starlightImageZoom(),
				starlightHeadingBadges(),
				//starlightSiteGraph()
				starlightSidebarTopics(
[
	// A topic representing a guide section of your project.
	{
		label: 'End User Guides',
		icon: 'open-book',
		// The page to link to when the topic is clicked.
		link: '/user/',
		items: [
			'user', 'start'
		]
	},
	{
		label: 'Developer Docs',
		icon: 'puzzle',
		// The page to link to when the topic is clicked.
		link: '/developer/',
		// The sidebar configuration for the topic.
		items: [
			{
				label: 'Guide',
				items: [
					{
						label: 'Report slicers',
						collapsed: false,
						items: [
							{
								label: 'About slicers',
								link: 'developer/guide/report-slicers'
							},
							{
								label: 'Dynamic slicer data definition',
								link: 'developer/guide/report-slicers/dynamic-slicer-data-definitions'
							},
							{
								label: 'Slicer reference links',
								link: 'developer/guide/report-slicers/slicer-reference'
							}
						]
					},
					{
						label: 'Documentation reference',
						link: 'developer/documentation-reference',
						attrs: { style: 'font-style: italic'}
					}
				]
			},
			{
				label: 'Reference',
				items: [
					{
						label: 'Report slicers',
						collapsed: false,
						items: [
							{
								label: 'Object properties',
								link: 'developer/reference/report-slicers/object-properties'
							},
							{
								label: 'Allowed functions',
								link: 'developer/reference/report-slicers/allowed-functions'
							},
							{
								label: 'Full example',
								link: 'developer/reference/report-slicers/full-example'
							}
						]
					},
					{
						label: 'Documentation reference',
						link: 'developer/documentation-reference',
						attrs: { style: 'font-style: italic'}
					}
				]
			}
		]
	},
	{
		label: 'Blogs',
		icon: 'pen',
		link: '/blog/',
		items: [
			{
				label: 'Featured',
				items: [

				]
			},
			{
				label: 'Recent',
				items: [

				]
			},
			{
				label: 'All',
				items: [

				]
			},
		]
	}
]
				)
			],
		}),
		icon()

	],
});