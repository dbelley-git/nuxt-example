// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "title",
            meta: [],
            link: [
                {
                    rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'

                }
            ],
            script: [
                {
                    src: '//cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'
                }
            ]
        }
    }
})