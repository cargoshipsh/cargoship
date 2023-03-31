from app.api import Input
from PIL import Image
import requests
from io import BytesIO
import base64

def getImage(input: Input) -> Image:
    if (input.imageUrl):
        url = input.imageUrl
        return Image.open(requests.get(url, stream=True).raw)
    elif (input.base64):
        base64Image = input.base64
        return Image.open(BytesIO(base64.b64decode(base64Image)))
    else:
        raise Exception("No image provided")