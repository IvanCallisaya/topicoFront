console.log('Hello, world')

const URL = 'https://2fbe-177-222-97-181.ngrok.io/api/personas';

fetch(URL, {
    mode: "no-cors"
})
    
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        //img.src = data[0].url;
        console.log(data)
    });