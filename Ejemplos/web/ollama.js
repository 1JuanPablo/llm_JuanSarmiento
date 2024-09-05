function request () {
    var prompt = document.forms.datos.prompt.value;

    var datos = {
        "model": "tinyllama",
        "prompt": "Why is the sky blue?",
        "stream": False
    };

    var url = "http://localhost:11434/api/generate"

    var request = new XMLHttpRequest();

    request.open('POST', URL, true);

    request.setRequestHeader("Accept", "aplication/json")
    request.setRequestHeader("Content-type", "aplication/json")
    request.setRequestHeader("Acces-Control-Allow-Origin", 'http://localhost:8080');

    request.send(JSON.stringify(datos));

    request.onload = () => {
        if (request.status == 200){
            alert("RESPONSE");
        }else{
            alert("ERROR");
        }
    };

};