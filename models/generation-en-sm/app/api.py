import os

from fastapi import Depends, HTTPException
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from starlette import status

class Input(BaseModel):
    text: str

class Output(BaseModel):
    text: str

api_key_header_auth = APIKeyHeader(name="X-API-Key", auto_error=True)

if (not os.environ.get('API_KEY')):
    raise Exception("API_KEY not set")


def get_api_key(api_key_header: str = Depends(api_key_header_auth)):
    if api_key_header != os.environ.get('API_KEY'):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API Key",
        )