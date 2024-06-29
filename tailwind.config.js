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
        color_blue: '#29439A',
        primary: '#F3F4F6',
        secondary: '#0771BA',
        _nut: "#F9FAFB",
        _button: "#0771BA",
        _white: "#FFFFFF",
        text_gray: "#D1D5DB",
        bg_selected: "#06284B",
        text_color: "#111827",
        text_sidebar: "#9CA3AF",
        bg_green:"#16A34A",
        text_gray_6b:"#6B7280",
        bg_slate:"#374151",
        bg_lightSlate: "#D1D5DB",
        bg_yellow:"#FEF3C7",
        dark: '#041E41',
      },
      margin: {
        ml_primary : '6px',
        mr_primary : '6px',
        mb_primary : '6px',
        mt_medium : '12px',
        mt_large : '20px',
        ml_secondary : '40px',
        mr_secondary : '40px',
        mt_secondary : '40px',
        mb_secondary : '40px',
        mt_4px:'4px',
        mt_primary: '6px',
        mt_8px: '8px',
        mt_16px: '16px',
        mt_24px: '24px',
      },
      gap: {
        gap_primary : '12px',
        gap_secondary : '24px',
        gap_6px: '6px',
        gap_8px: '8px',
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
        pl_3px: '3px',
        pr_3px: '3px',
        pt_3px: '3px',
        pb_3px: '3px',
        p_4px: '4px',
        pt_8px: '8px',
        pl_10px: '10px',
        pr_10px: '10px',
        pt_10px: '10px',
        pb_10px: '10px',
        p_12px: '12px',
        pl_16px: '16px',
        pr_16px: '16px',
        pt_16px: '16px',
        pb_16px: '16px',
        pl_primary2: '18px',
        pr_primary2: '18px',
        pt_primary2: '18px',
        pb_primary2: '18px',
        p_28px: '28px',
      },
      borderRadius : {
        rounded_primary: '6px',
        rounded_secondary: '10px',
      }
    },
  },
  plugins: [require('daisyui'),],
}

