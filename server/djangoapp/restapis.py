import requests
import os
from dotenv import load_dotenv

load_dotenv()

backend_url = os.getenv("backend_url", "http://127.0.0.1:3030")
sentiment_analyzer_url = os.getenv(
    "sentiment_analyzer_url",
    "http://127.0.0.1:5050/"
)

def get_request(endpoint, **kwargs):
    try:
        response = requests.get(
            f"{backend_url}/{endpoint}",
            params=kwargs,
            timeout=10
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as error:
        print(error)
        return []
