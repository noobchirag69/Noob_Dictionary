window.onload = () => {
    document.querySelector('input').value = '';
}

let query = document.querySelector("input");
let meaning = document.querySelector("#meaning");
let toggle = document.querySelector(".toggle");

query.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        dictionary();
    }
});

function dictionary() {
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query.value}`;

    if (query.value == '') {
        alert('Please input a word!');
        window.location.reload();
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.title == 'No Definitions Found') {
                toggle.style.display = 'block';
                meaning.innerHTML = `${data.message} ${data.resolution}`;
                query.value = '';
            } else {
                toggle.style.display = 'block';
                meaning.innerHTML = `<strong>${query.value.charAt(0).toUpperCase() + query.value.slice(1)
                    }:</strong> ${data[0].meanings[0].definitions[0].definition}`;
                query.value = '';
            }
        })
        .catch((err) => console.log(err));
}
