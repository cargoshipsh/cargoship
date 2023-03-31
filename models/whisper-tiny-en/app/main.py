from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, Output, get_api_key
from app.predict import get_generator, predict
import torch

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
(processor, model) = get_generator() # load model

@app.post("/")
async def make_prediction(input: Input) -> Output:
    return predict(input, processor, model)