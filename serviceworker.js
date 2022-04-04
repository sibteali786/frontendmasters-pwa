const assets = ["/","styles.css", "app.js", "sw-register.js","https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"]   // Array of URLs

self.addEventListener("install",event => {
    event.waitUntil(
        caches.open("assets").then(cahce => {
            cahce.addAll(assets)
        })
    );
})

self.addEventListener("fetch",event => {
    if (event.reuqest.url == "http://localhost:3000/fake"){
        const response = new Response(`Hello, I am a response ${event.request.url}`);
        event.respondWith(response); 
    }else {
        // we want to try and see if the request is cached
        event.respondWith(
            caches.open("assets").then(cache=>{
                cache.match(event.request).then(cachedResponse => {
                    if (cachedResponse){
                        // Its a cache HIT
                        return cachedResponse
                    }else {
                        // Its a cache MISS
                        return fetch(event.request)
                    }
                })
            })
        )
    }
})