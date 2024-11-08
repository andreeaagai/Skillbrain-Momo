
const speak = (joke) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: joke,
        hl: 'en-us',
        v: 'Mike',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const speakOnClick = () => {
    const joke = document.getElementById('speak-text').value;

    speak(joke);
}

const functionWhenDOMLoaded = () => {
    const el = document.getElementById('speak-button');
    el.onclick = () => speakOnClick();

    document.getElementById('joke-button').onclick = () => tellMeAJoke();
}

const tellMeAJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let text = '';
        let jokeId = '';
        if (data.type === 'single') {
            text = data.joke;  
            jokeId = data.id;   
        } else {
            const question = data.setup;
            const answer = data.delivery;
            text = question + "\n\n" + answer;  
            jokeId = data.id;
        }   
        const el = document.getElementById('speak-text');
        el.value = `JOKE #${jokeId} \n\n "${text}"`;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);

