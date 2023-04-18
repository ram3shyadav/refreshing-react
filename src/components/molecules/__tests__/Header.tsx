import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import Header from './../Header';
import { MemoryRouter, Router } from 'react-router-dom';

const createRouterWrapper = (history: MemoryHistory<unknown>): React.ComponentType<any> => ({ children }) => (
	<Router history={history}>{children}</Router>
);

test('renders menu links', () => {
	const { container } = render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);
	expect(container.querySelectorAll('nav a').length).toBe(2);
});

test('check first link to home', () => {
	const { container } = render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);
	expect(container.querySelectorAll('nav a')[0]).toHaveAttribute('href', '/');
});

test('navigation to about page', async () => {
	const history = createMemoryHistory();
	const { container } = render(
		<Header />,
		{ wrapper: createRouterWrapper(history) }
	);
	fireEvent.click(container.querySelectorAll('nav a')[1]);
	await waitFor(() => {
		expect(history.location.pathname).toBe('/about');
	});

});
