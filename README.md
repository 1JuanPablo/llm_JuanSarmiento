# LLM Repositorio de Prueba
Repositorio de trabajo con modelos de lenguaje largo usando ollama

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

# Notas (Comandos para guardar)
````bash
git add .
git commit -m "UPDATE README.md"
git push -u origin main
````

````bash
-o nombre_archivo.md
````

