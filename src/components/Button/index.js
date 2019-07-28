import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

// parse and define custom button size properties;
const buttonSizes = ({size, theme}) => {
	if (size) {
		const sizes = theme.buttonSizes;
		return sizes[size] && sizes[size];
	}
	return theme.buttonSizes.default;
};

// make the button full width
const expanded = ({expanded}) =>
	expanded && {width: '100%'};

const ButtonStyled = styled.button`
	-webkit-font-smoothing: antialiased;
	background-color: ${({theme}) => theme.colors.white};
	color: ${({theme}) => theme.colors.grey900};
	cursor: pointer;
	display: block;
	font-weight: ${({theme}) => theme.fontWeights.bold};
	border: 2px solid ${({theme}) => theme.colors.grey400};
	position: relative;
	vertical-align: middle;
	text-align: center;
	text-decoration: none;
	transition: all 0.2s;
	
	&:focus {
		outline: 2px dotted ${({theme}) => theme.colors.grey700};
		outline-offset: 3px;
	}
	
	&:hover,
	&:active {
		background-color: ${({ theme }) => theme.colors.grey900};
		border-color: ${({ theme }) => theme.colors.grey900};
		color: ${({ theme }) => theme.colors.white};
	}

	&:disabled {
		background-color: ${({theme}) => theme.colors.grey900};
		color: ${({theme}) => theme.colors.white};
		cursor: auto;
	
		&:hover {
			background-color: ${({ theme }) => theme.colors.grey900};
			color: ${({ theme }) => theme.colors.white};
		}
	}
	${expanded}
	${buttonSizes}
`;

const Button = ({children, ...props}) => {
	return (
		<ButtonStyled {...props}>
			{children}
		</ButtonStyled>
	);
};

Button.propTypes = {
	expanded: PropTypes.bool,
	size: PropTypes.string,
};

Button.defaultProps = {
	role: 'button',
};

export default Button;
