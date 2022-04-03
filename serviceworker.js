const assets = ["/","styles.css", "app.js", "sw-register.js","https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"]   // Array of URLs

self.addEventListener("install",event => {
    caches.open("assets").then(cahce => {
        cahce.addAll(assets)
    })
})