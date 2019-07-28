// App theme

// Colors Palette
const white = '#ffffff';
const grey50 = '#fafafa';
const grey100 = '#f5f5f5';
const grey200 = '#eeeeee';
const grey300 = '#e0e0e0';
const grey400 = '#bdbdbd';
const grey500 = '#9e9e9e';
const grey600 = '#757575';
const grey700 = '#616161';
const grey800 = '#424242';
const grey900 = '#212121';
const black = '#000000';
const bodyBg = white;
const bodyColor = grey900;

// Responsive breakpoints and media-queries (mobile first).
const breakpoints = [ '576px', '768px', '992px', '1200px'];

const fonts = {
	base: `'Montserrat', sans-serif`,
	caveat: `'Caveat', cursive`,
};

const fontWeights = {
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700
};

const headingFontFamily = fonts.base;

const fontSizes = [
	'1.2rem', '1.6rem', '2rem', '2.4rem',
	'3.2rem', '4.8rem', '6.4rem'
];

const typeSizes = {
	h1: fontSizes[5],
	h2: fontSizes[4],
	h3: fontSizes[3],
	h4: fontSizes[2],
	h5: fontSizes[1],
	h6: fontSizes[1],
	small: fontSizes[0]
};

const bodyText = fontSizes[1];
const headingWeight = fontWeights.bold;
const headingLineHeight = 1.4;

const theme = {
	breakpoints,
	mediaQueries: {
		sm: `@media screen and (min-width: ${breakpoints[0]})`,
		md: `@media screen and (min-width: ${breakpoints[1]})`,
		lg: `@media screen and (min-width: ${breakpoints[2]})`,
		xl: `@media screen and (min-width: ${breakpoints[3]})`,
	},
	colors: {
		white,
		grey50,
		grey100,
		grey200,
		grey300,
		grey400,
		grey500,
		grey600,
		grey700,
		grey800,
		grey900,
		black,
		bodyBg,
		bodyColor,
	},
	space: [
		0, 4, 8, 16, 32, 64, 128, 256
	],
	fonts,
	fontSizes,
	bodyText,
	fontWeights,
	headingWeight,
	headingLineHeight,
	headingFontFamily,
	typeSizes,
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	maxContainerWidth: '992px'
};

export default theme;
