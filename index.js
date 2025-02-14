/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': theme('colors.cu-black[800]'),
              '--tw-prose-headings': theme('colors.cu-black[700]'),
              '--tw-prose-links': theme('colors.cu-red[DEFAULT]'),
              '--tw-prose-bold': theme('colors.cu-black[900]'),
              '--tw-prose-bullets': theme('colors.cu-black[600]'),
              '--tw-prose-quotes': theme('colors.cu-red[100]'),
              '--tw-prose-quote-borders': theme('colors.cu-red[DEFAULT]'),
            },
            {
              a: {
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              },
              h1: {
                fontWeight: '600',
              },
              h2: {
                fontWeight: '600',
                marginBottom: '1rem',
              },
              h3: {
                fontWeight: '600',
                marginBottom: '0.75rem',
              },
              h4: {
                fontWeight: '600',
                marginBottom: '0.5rem',
              },
              'h5, h6': {
                fontWeight: '600',
              },
              'ul ul, ol ol': {
                'margin-left': '0',
              },
              'ol li li': {
                'list-style-type': 'lower-alpha',
              },
              'ol li li li': {
                'list-style-type': 'lower-roman',
              },
            },
          ],
        },
        light: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.cu-red[DEFAULT]'),
            '--tw-prose-bold': theme('colors.cu-black[100]'),
            '--tw-prose-bullets': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.cu-red[200]'),
            '--tw-prose-quote-borders': theme('colors.red[400]'),
          },
        },
      }),
      colors: {
        'cu-red': {
          DEFAULT: '#E91C24',
          25: '#FEF4F4',
          50: '#FDE9E9',
          100: '#FBD6D7',
          200: '#F7B1B4',
          300: '#F48C90',
          400: '#F0666C',
          500: '#ED4148',
          600: '#E91C24',
          700: '#BB1219',
          800: '#880D12',
          900: '#55080B',
        },
        'cu-black': {
          DEFAULT: '#000000',
          25: '#F9F9F9',
          50: '#F2F2F2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#191919',
        },
      },
      gridTemplateColumns: {
        'left-260': '260px auto',
      },
      backgroundImage: {
        'cu-quote-white': 'url("https://cdn.carleton.ca/rds/assets/graphics/quote-white.svg")',
        'cu-quote-red-10': 'url("https://cdn.carleton.ca/rds/assets/graphics/quote-red-10.svg")',
        'cu-ravens-logo-white': 'url("https://cdn.carleton.ca/rds/assets/graphics/cu-ravens-logo-white.svg")',
        'cu-waves-footer-red': "url('https://cdn.carleton.ca/rds/assets/graphics/cu-waves-footer-red.svg')",
        'cu-waves-hard-edge-black': "url('https://cdn.carleton.ca/rds/assets/graphics/cu-waves-hard-edge-black.svg')",
        'cu-waves-hard-edge-red': "url('https://cdn.carleton.ca/rds/assets/graphics/cu-waves-hard-edge-red.svg')",
        'cu-waves-repeating-bottom-red':
          "url('https://cdn.carleton.ca/rds/assets/graphics/cu-waves-repeating-bottom-red.svg')",
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
        'lower-roman': 'lower-roman',
      },
      margin: {
        'offset-center': 'calc(-50vw + 50%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};