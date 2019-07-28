import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from './theme';
import {GlobalStyles} from './theme/global';
import Header from "./components/Header";
import ScreenReaderOnly from "./components/ScreenReaderOnly";
import Footer from "./components/Footer";
import InvitePage from "./pages/InvitePage";

const AppStyled = styled.div`
	display: flex;
    flex-direction: column;
    height: 100vh;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AppStyled>
				<ScreenReaderOnly href="#mainContent">
					Skip to main content
				</ScreenReaderOnly>
				<Header />
				<InvitePage id="mainContent" />
				<Footer/>
				<GlobalStyles />
			</AppStyled>
		</ThemeProvider>
	);
};

export default App;
