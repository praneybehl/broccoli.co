import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from "../../components/Input";

const InvitationFormStyled = styled.form`
	padding: 3rem 2.4rem;
`;

const FormTitle = styled.h2`
	display: block;
	color: ${({theme}) => theme.colors.grey900};
	font-size: ${({theme}) => theme.fontSizes[2]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
	line-height: 1.31;
	margin-bottom: 3.6rem;
	position: relative;
	
	&::after {
	background-color: ${({theme}) => theme.colors.grey400};
		bottom: -6px;
		content: ' ';
		height: 2px;
		left: calc(50% - 30px);
		position: absolute;
		width: 60px;
	}
`;

const InvitationForm = ({formTitle, ...props}) => {
	const formRef = useRef(null);
	return (
		<InvitationFormStyled ref={formRef} {...props}>
			<FormTitle>{formTitle}</FormTitle>
			<Input
				id="fullName"
				name="fullName"
				aria-label="Enter full name"
				placeholder="Full Name"
			/>
			<Input
				id="email"
				name="email"
				aria-label="Enter email address"
				placeholder="Email"
			/>
			<Input
				id="confirmEmail"
				name="confirmEmail"
				aria-label="Confirm email address"
				placeholder="Confirm email"
			/>
		</InvitationFormStyled>
	)
};

InvitationForm.propTypes = {
	formTitle: PropTypes.string,
};

InvitationForm.defaultProps = {
	formTitle: 'Request an invite'
};

export default InvitationForm;
