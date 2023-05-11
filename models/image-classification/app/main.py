from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, Output, get_api_key
from app.predict import get_generator, predict
from app.image import getImage

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
(extractor, model) = get_generator() # load model

@app.post("/")
async def make_prediction(input: Input) -> Output:
    try:
       image = getImage(input)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    return predict(image, extractor, model)