from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, Output, get_api_key
from app.predict import get_generator, predict
from app.image import getImage
import torch

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
(tokenizer, feature_extractor, model) = get_generator() # load model

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

@app.post("/")
async def make_prediction(input: Input) -> Output:
    image = getImage(input)
    if image.mode != "RGB":
      image = image.convert(mode="RGB")
    return predict(image, tokenizer, model, feature_extractor, device)