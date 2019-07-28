

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
const bodyColor = grey800;

const theme = {
	breakpoints: ['40em', '52em', '64em'],
	fontSizes: [
		12, 14, 16, 20, 24, 32, 48, 64
	],
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
	fonts: {
		base: '\'Montserrat\', sans-serif',
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	}
};

export default theme;
