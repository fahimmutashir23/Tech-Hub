/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary : 'white',
        bg_secondary : '#F5F5F5',
        bg_state : '#E0F5D7',
        text_primary : 'black',
        text_secondary : '#00964A',
        text_gray : '#4b5563',
        color_blue: '#29439A'
      },
      margin: {
        ml_primary : '6px',
        mr_primary : '6px',
        mt_primary : '6px',
        mb_primary : '6px',
        mt_medium : '12px',
        mt_large : '20px',
        ml_secondary : '40px',
        mr_secondary : '40px',
        mt_secondary : '40px',
        mb_secondary : '40px',
      },
      gap: {
        gap_primary : '12px',
        gap_secondary : '24px'
      },
      fontSize: {
        text_sm : '14px',
        text_md : '16px',
        text_lg : '20px',
        text_xl : '24px',
        text_xxl : '34px',
        text_xxxl : '50px',
      },
      padding: {
        pl_primary : '6px',
        pr_primary : '6px',
        pt_primary : '6px',
        pb_primary : '6px',
        pl_secondary : '20px',
        pr_secondary : '20px',
        pt_secondary : '20px',
        pb_secondary : '20px',
      },
      borderRadius : {
        rounded_primary: '6px',
        rounded_secondary: '10px',
      }
    },
  },
  plugins: [require('daisyui'),],
}

