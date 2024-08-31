# LLM Repositorio de Prueba
Repositorio de trabajo con modelos de lenguaje largo usando ollama, realizado por Juan Pablo Sarmiento Arévalo

## 1. Instalación de Ollama
Para instalar ollama accedemos a la pagina de [ollama](https://ollama.com/download/linux), en una terminal se ejecuta el siguiente comando 

````bash
$ curl -fsSL https://ollama.com/install.sh | sh
````

## 2. Ejecutar el servidor
Una vez instalado se ejecuta el servidor ollama con el siguiente comando

````bash
$ ollama serve
````

## 3. Descargar algún modelo
En la página de [modelos](https://ollama.com/library) de ollama se busca el modelo deseado y se descargar con el siguiente comando:

````bash
$ ollama pull tinyllama
````

## 4. Prueba de request a la API REST
Para realizar una petición básica a a API de OLLAMA se sigue la siguiente estructura

````bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?"
}'
````
## 4.1 Prueba de request a la API REST pero en NO STREAMING
Para realizar una petición básica a a API de OLLAMA, sin streaming

````bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
````

## 5. Realizar request a groq
````bash
curl "https://api.groq.com/openai/v1/chat/completions" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${GROQ_API_KEY}" \
  -d '{
         "messages": [
           {
             "role": "user",
             "content": "¿Porqué el cielo es azul?"
           }
         ],
         "model": "gemma-7b-it",
         "temperature": 1,
         "max_tokens": 1024,
         "top_p": 1,
         "stream": false
       }'
````

## 6. Exportar mi Api Key
````bash
export OPENAI_API_KEY=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
````

## 7. Guardar mi Api Key
````bash
echo $GROQ_API_KEY
````

## 8. Import Request con Python
````bash
import requests
x = requests.get('https://w3schools.com/python/demopage.htm')
print(x.text)
````

## 9. Hacer request con Python
````bash
import requests

url = 'https://www.w3schools.com/python/demopage.php'
myobj = {'somekey': 'somevalue'}

x = requests.post(url, json = myobj)

print(x.text)
````

# Notas MUY Importantes

## Guardar
````bash
git add .
git commit -m "UPDATE README.md"
git push -u origin main
````

## Guardar info en un archivo .txt
````bash
-o nombre_archivo.md
````