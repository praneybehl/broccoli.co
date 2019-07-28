import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from "../../components/Hero";

const InvitePageStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	margin-top: 62px;
	text-align: center;
`;

const InvitePage = (props) => {
	return (
		<InvitePageStyled {...props}>
			<Hero/>
		</InvitePageStyled>
	)
};

InvitePage.propTypes = {
	logoText: PropTypes.string,
};

InvitePage.defaultProps = {
	logoText: 'Broccoli & Co.',
};

export default InvitePage;
