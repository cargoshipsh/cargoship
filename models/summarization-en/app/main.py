from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, Output, get_api_key
from app.text_summarization import get_generator, summarize

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

generator = get_generator() # load model

@app.post("/")
async def detect_language(input: Input) -> Output:
    return summarize(input, generator)