import styled from 'styled-components';

const ScreenReaderOnly = styled.a`
	border: 0;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	padding: 0;
	overflow: hidden;
	position: absolute;
	width: 1px;
	white-space: nowrap;
	
	&:active,
	&:focus {
		position: static;
		width: auto;
		height: auto;
		overflow: visible;
		clip: auto;
		white-space: normal;
		outline: none;
	}
`;

export default ScreenReaderOnly;
