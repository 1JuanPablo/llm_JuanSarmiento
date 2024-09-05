function request () {
    var prompt = document.forms.datos.prompt.value;

    var datos = {
        "model": "tinyllama",
        "prompt": "Why is the sky blue?",
        "stream": False
    };

    var url = "http://localhost:11434/api/generate"
    alert("Hola");
};