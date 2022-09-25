self.addEventListener('install', (event) => {
    console.log('SW: install')
});



self.addEventListener('fetch', (event) => {

    if (event.request.url.includes('style.css')) {
        console.log(event.request.url);


        const response = new Response(
            `    
        body{
            color: white;
            background-color: blue;
        }`,
            {
                headers: {
                    'Content-type': 'text/css',
                },
            }

        );


        event.respondWith(response);
    } else if (event.request.url.includes('img1.png')) {
        const foto = fetch('images/img2.png')
        event.respondWith(foto)
    }
});




