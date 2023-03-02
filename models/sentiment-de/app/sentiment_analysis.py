import torch
from transformers import pipeline

from app.api import Input, Output


def get_generator():
    # load model
    model = torch.load("model/bert.pt")
    tokenizer = torch.load("model/bert-tokenizer.pt")
    return pipeline('sentiment-analysis', model=model,tokenizer=tokenizer)


def predict_sentiment_request(input: Input, generator) -> Output:
    output = generator(input.text)
    return Output(sentiment =  output[0]["label"])