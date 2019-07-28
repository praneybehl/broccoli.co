import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {GlobalStyles} from './theme/global';
import Header from "./components/Header";
import ScreenReaderOnly from "./components/ScreenReaderOnly";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<ScreenReaderOnly href="#mainContent">
					Skip to main content
				</ScreenReaderOnly>
				<Header />
				<main id="mainContent">
				</main>
				<GlobalStyles />
			</>
		</ThemeProvider>
	);
};

export default App;
