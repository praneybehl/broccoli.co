import React from 'react';
import { cleanup, render, fireEvent } from '../../utils/test-utils';
import Hero from "./index";

describe('<Hero/> block', () => {
	afterEach(cleanup);

	it('renders the Hero heading', () => {
		const heading = 'A better way\n' +
			' to enjoy every day.';
		const { container } = render(<Hero />);
		expect(container.textContent).toMatch(heading);
	});

	it('renders the Hero sub-heading', () => {
		const subHeading = 'Be the first to know when we launch.';
		const { container } = render(<Hero />);
		expect(container.textContent).toMatch(subHeading);
	});

	it('renders the Request invite button', () => {
		const { container } = render(<Hero />);
		const button = container.querySelector('button');
		expect(button.textContent).toMatch('Request an invite');
	});

	it('clicking Request invite button calls onCtaClick function', () => {
		const mockOnCtaClick = jest.fn();
		const { container } = render(<Hero onCtaClick={mockOnCtaClick}/>);
		const button = container.querySelector('button');
		fireEvent.click(button);
		expect(mockOnCtaClick.mock.calls.length).toEqual(1);
	});
});
