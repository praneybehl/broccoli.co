import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import Header from "./index";

describe('<Header/> block', () => {
	afterEach(cleanup);

	it('renders a \'header\' HTML element', () => {
		const { container } = render(<Header />);
		expect(container.querySelectorAll('header')).toHaveLength(1);
	});

	it('renders HeaderLogo correctly', () => {
		const logoText = 'Broccoli & Co.';
		const { container } = render(<Header />);
		expect(container.querySelector('a').textContent).toMatch(logoText);
	});

	it('renders HeaderLogo link to be \'/\'', () => {
		const { container } = render(<Header />);
		expect(container.querySelector('a').href).toMatch('/');
	});
});
