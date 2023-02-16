from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import Input, Output, get_api_key
from app.language_detection import handle_detect_language_request

app = FastAPI(dependencies=[Depends(get_api_key)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def detect_language(input: Input) -> Output:
    return handle_detect_language_request(input)
