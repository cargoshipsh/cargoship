import torch
from transformers import pipeline

from app.api import Input, Output


def get_generator():
    # load model
    model = torch.load("model/model.pt")
    tokenizer = torch.load("model/tokenizer.pt")
    return pipeline('text-generation', model=model,tokenizer=tokenizer)


def text_generation_request(input: Input, generator) -> Output:
    output = generator(input.text)
    return Output(text = output[0]["generated_text"])