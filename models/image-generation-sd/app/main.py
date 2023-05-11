from fastapi import Depends, FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, get_api_key
from app.predict import get_diffuser, predict
import torch

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = get_diffuser() # load model

model.to("cuda")

@app.post("/", responses = {200: {"content" : {"image/png": {}}}}, response_class = Response)
async def make_prediction(input: Input) -> Response:
    return predict(input.prompt, input.neg_prompt, model)