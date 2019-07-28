import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const errorStyles = ({error, theme}) => error && ({
	borderColor: theme.colors.error,
	color: theme.colors.error
});

const InputStyled = styled.input`
	appearance: none;
	background-color: ${({theme}) => theme.colors.grey50};
	border: 1px solid ${({theme}) => theme.colors.grey700};
	border-radius: 0;
	box-shadow: none;
	color: ${({theme}) => theme.colors.grey900};
	display: block;
	fontSize: 1.6rem;
	height: 48px;
	padding: 1.2rem 1.6rem;
	width: 100%;

	'&:focus': {
		outline: 2px dotted ${({theme}) => theme.colors.grey700};
		outline-offset: 3px;
	},

	'&::placeholder': {
		color: ${({theme}) => theme.colors.grey500};
	}
	${errorStyles}
`;

const Input = (props) => (
	<InputStyled {...props}/>
);

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'search']),
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.bool
};

Input.defaultProps = {
	type: 'text',
	value: '',
	error: false,
	onChange: () => {},
};
