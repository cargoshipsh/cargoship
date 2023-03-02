from app.api import Input
from PIL import Image
import requests
from io import BytesIO
import base64

def getImage(input: Input) -> Image:
    if (input.url):
        return Image.open(requests.get(input.url, stream=True).raw)
    elif (input.base64):
        return Image.open(BytesIO(base64.b64decode(input.base64)))
    else:
        raise Exception("No image provided")