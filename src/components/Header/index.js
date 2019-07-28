import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from "../Container";

const HeaderStyled = styled.header`
	align-items: center;
	border-bottom: 2px solid ${({theme}) => theme.colors.grey200};
	display: flex;
	height: 60px;
`;

const HeaderLogo = styled.div`
	color: ${({theme}) => theme.colors.grey800};
	font-size: ${({theme}) => theme.fontSizes[2]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
`;

const Header = ({logoText}) => (
	<HeaderStyled>
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
