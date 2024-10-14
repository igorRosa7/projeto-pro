export default {
    root: "./",
    build: {
        outOutDir: true,
        rollupOptions: {
            input: {
                index: "index.html",
                cadastro: "cadastro.html",
            },
        },
    },
};