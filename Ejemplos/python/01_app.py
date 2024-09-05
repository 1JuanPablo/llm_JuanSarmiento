"""curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
"""

import requests # tiene funciones similares a CURL
import json # permite convertir de texto a JSON

url = 'http://localhost:11434/api/generate'

while True:
  prompt = input("PROMP:")
  datos = {
  "model": "tinyllama",
  "prompt": prompt,
  "stream": False
}

response = requests.post(url, json = datos)
response = json.loads(response.text)

print(response["response"])
