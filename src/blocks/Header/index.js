import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Container from "../../components/Container";

const HeaderStyled = styled.header`
	align-items: center;
	border-bottom: 2px solid ${({theme}) => theme.colors.grey200};
	display: flex;
	height: 60px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
`;

const HeaderLogo = styled.div`
	color: ${({theme}) => theme.colors.grey800};
	font-size: ${({theme}) => theme.fontSizes[2]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
	text-align: center;
	${({theme}) => css`${theme.mediaQueries.md} {
		text-align: left;
		font-size: ${theme.fontSizes[3]};
	}`}
`;

const Header = ({logoText, ...props}) => (
	<HeaderStyled{...props}>
		<Container>
			<HeaderLogo>{logoText}</HeaderLogo>
		</Container>
	</HeaderStyled>
);

Header.propTypes = {
	logoText: PropTypes.string,
};

Header.defaultProps = {
	logoText: 'Broccoli & Co.',
};

export default Header;
