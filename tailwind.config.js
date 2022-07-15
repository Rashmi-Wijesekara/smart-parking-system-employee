/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'alto': '#D6D6D6',
				'cornflower-blue': '#696CFF',
				'dusty-gray': '#999999',
				'dove-gray': '#666666',
			},
			height: {
				'abc': '600px',
			},
			width : {
				'abc': '431px',
			},
		},
	},
	plugins: [],
};
