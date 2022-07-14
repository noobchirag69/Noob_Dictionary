let query = document.querySelector("input");
let btn = document.querySelector("button");
let word = document.querySelector("#word");
let meaning = document.querySelector("#meaning");
let usage = document.querySelector("#usage");

btn.addEventListener("click", dictionary);

function dictionary() {
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query.value}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            word.innerHTML = `<strong>Word:</strong> ${query.value.charAt(0).toUpperCase() + query.value.slice(1)
                }`;
            meaning.innerHTML = `<strong>Meaning:</strong> ${data[0].meanings[0].definitions[0].definition}`;
            query.value = '';
        })
        .catch((err) => console.log(err));
}
