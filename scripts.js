const url = "https://catfact.ninja/fact";


async function fetchRandomFact() {
    await fetch(url)
        .then(response => 
            response.json())
        .then(json => 
            document.getElementById('fact').innerHTML = json.fact);
}