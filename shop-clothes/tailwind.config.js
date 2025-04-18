/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // تأكد من تغطية كل الملفات في المجلد src
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 2s ease-out forwards', // الأنيميشن الخاص بـ fadeInDown
        fadeIn: 'fadeIn 2s ease-in-out', // أنيميشن fadeIn بأبطأ وقت
      },
    },
  },
  plugins: [],
}