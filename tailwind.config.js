/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            'sans': ["inter", "ui-sans-serif", "system-ui", 'sans-serif'],
            'mono': ["fira", "ui-monospace", "SFMono-Regular", 'monospace'],
        },
        extend: {
          spacing: {
            '112': '28rem',
            '128': '32rem'
          }
        },
    },
    plugins: [],
};
