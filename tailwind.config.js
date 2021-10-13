module.exports = {
    mode: 'jit',
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
//        './**/*.{vue,js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['responsive', 'hover', 'focus', 'active'],
            borderWidth: ['responsive', 'hover', 'focus', 'active'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
