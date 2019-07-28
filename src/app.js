import React from 'react';
import styled from 'styled-components';

const AppStyled = styled.main`
	display: block;
`;

const App = () => {
	return (
		<AppStyled className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</AppStyled>
	);
}

export default App;
