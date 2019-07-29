import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from "../../blocks/Hero";
import {useModal} from '../../utils/hooks/useModal';
import InvitationForm from "../../blocks/InvitationForm";

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
	const [Modal, openModal] = useModal();

	return (
		<InvitePageStyled {...props}>
			<Hero onCtaClick={openModal}/>
			<Modal>
				<InvitationForm />
			</Modal>
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
