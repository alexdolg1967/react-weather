export function changeCssRootVariables(theme: string) {
	const root = document.querySelector(':root') as HTMLElement;

	const comps =[
		'body-bg',
		'components-bg',
		'card-bg',
		'card-shadow',
		'text-color'
	]

	comps.forEach(compItem => {
		root.style.setProperty(
			`--${compItem}-default`,
			`var(--${compItem}-${theme})`
		)
	})
}
