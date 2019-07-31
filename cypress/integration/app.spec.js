// End-to-end application tests

// Element selectors
const APP = '[class*="app__AppStyled-"]';
const HEADER = 'header';
const LOGO = '[class*="Header__HeaderLogo-"]';
const INVITE_PAGE = '[class*="InvitePage__InvitePageStyled-"]';
const HERO = '[class*="Hero__HeroStyled-"]';
const HERO_TITLE = '[class*="Hero__HeroTitle-"]';
const HERO_SUBTITLE = '[class*="Hero__HeroSubTitle-"]';
const REQUEST_INVITE_BTN = '[class*="Hero__HeroStyled-"] [class*="Button__ButtonStyled-"]';
const MODAL_OVERLAY = '[class*="useModal__ModalOverlay-"]';
const MODAL_CONTAINER = '[class*="useModal__ModalStyled-"]';
const MODAL_CLOSE = '[class*="useModal__ModalCloseBtn-"]';
const INVITATION_FORM = '[class*="InvitationForm__InvitationFormStyled-"]';
const INVITATION_FORM_TITLE = '[class*="InvitationForm__FormTitle-"]';
const FULL_NAME = 'Enter full name';
const EMAIL = 'Enter email address';
const CONFIRM_EMAIL = 'Confirm email address';
const SEND_BTN = 'button[type="submit"]';
const ERROR_CONTAINER = '[class*="InvitationForm__ErrorContainer-"]';
const INVITATION_SENT = '[class*="InvitationSent__InvitationSentStyled-"]';
const INVITATION_SENT_TITLE = '[class*="InvitationSent__Title-"]';
const INVITATION_SENT_MSG = '[class*="InvitationSent__MessageText-"]';
const INVITATION_SENT_BTN = '[class*="InvitationSent__InvitationSentStyled-"] [class*="Button__ButtonStyled-"]';


describe('App', () => {

	// Navigation to page
	before(() => cy
		.visit('/')
		.wait(500)
	);

	it('exists', () => {
		cy.get(APP)
			.should('exist');
	});

	it('takes full height of device', () => {
		cy.get(APP)
			.should('have.css', 'height', '720px')
	});

	// Header block
	describe('Header block', () => {
		it('renders a \'header\' element', () => {
			cy.get(HEADER)
				.should('exist')
		});
		it('renders with a height of 60px', () => {
			cy.get(HEADER)
				.should('have.css', 'height', '60px')
		});
		it('renders Logo', () => {
			cy.get(LOGO)
				.should('exist')
				.should('contain', 'Broccoli & Co.')
		});
	});

	// Invite page
	describe('Invite Page', () => {

		it('exists', () => {
			cy.get(INVITE_PAGE)
				.should('exist')
		});

		it('renders children absolutely centered', () => {
			cy.get(INVITE_PAGE)
				.should('have.css', 'display', 'flex')
				.should('have.css', 'align-items', 'center')
				.should('have.css', 'justify-content', 'center')
		});

		// Hero block
		describe('Hero Block', () => {

			it('renders Hero block', () => {
				cy.get(HERO)
					.should('exist')
			});

			it('renders title', () => {
				cy.get(HERO_TITLE)
					.should('exist')
					.should('contain', 'A better way\n to enjoy every day.')
			});

			it('renders sub title', () => {
				cy.get(HERO_SUBTITLE)
					.should('exist')
					.should('contain', 'Be the first to know when we launch.')
			});

			it('renders `Request invite` button', () => {
				cy.get(REQUEST_INVITE_BTN)
					.should('exist')
			});

			it('opens the Modal when `Request invite` button is clicked', () => {
				cy.get(REQUEST_INVITE_BTN)
					.click()
					.get(MODAL_OVERLAY)
					.should('exist');
			});

		});

		// Modal
		describe('Modal', () => {

			it('renders Modal overlay', () => {
				// Make sure Modal is open
				cy.get(MODAL_OVERLAY)
					.should('exist')
			});

			it('renders Modal container', () => {
				cy.get(MODAL_CONTAINER)
					.should('exist')
			});

			it('renders close modal button', () => {
				cy.get(MODAL_CLOSE)
					.should('exist')
			});

			it('should close the modal, when clicked on close modal button', () => {
				cy.get(MODAL_CLOSE)
					.click()
					.get(MODAL_CONTAINER)
					.should('not.exist')
			});

			it('should close the modal when clicked outside Modal container', () => {
				cy.get(REQUEST_INVITE_BTN)
					.click()
					.get(MODAL_OVERLAY)
					.click(50,50)
					.get(MODAL_CONTAINER)
					.should('not.exist')
			});

			it('should close the modal when pressed `ESC` key', () => {
				cy.get(REQUEST_INVITE_BTN)
					.click()
					.getByLabelText(FULL_NAME)
					.type('{esc}')
					.get(MODAL_CONTAINER)
					.should('not.exist')
			});

		});


	});
});
