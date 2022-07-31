/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'alto': '#F5F5F9',
				'cornflower-blue': '#696CFF',
				'dusty-gray': '#999999',
				'dove-gray': '#666666',
				'navy-blue': '#1E0094',
				'mine-shaft': '#3F3F3F',
				'apricot': '#EB9481',
			},
			height: {
				'abc': '600px',
			},
			width : {
				'abc': '431px',
			},
			boxShadow: {
				'wrapper': '0px 4px 4px rgba(0, 0, 0, 0.25)',
				'inners': 'inset 0px 3px 3px rgba(0, 0, 0, 0.25)',
			},
			spacing: {
				'full-nav': 'calc(100% - 70px)',
				'full-con': 'calc(100% - 10px)',
				'full-img': 'calc(100% - 80px)',
			},
		},
		fontFamily: {
			main: ["Montserrat", "sans-serif"],
			second: ["Inter", "sans-serif"],
			logoText: ["Public Sans", "sans-serif"],
			navbarText: ["Manrope", "sans-serif"],
		},
		borderRadius: {
			'5/2xl': '20px',
			'lg': '10px',
		},
		fontSize: {
			'ssx': '10px',
			'sxm': '15px',
		},
	},
	plugins: [],
};
