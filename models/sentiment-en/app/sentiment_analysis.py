import torch
from transformers import pipeline

from app.api import Input, Output


def get_generator():
    # load model
    model = torch.load("model/roberta.pt")
    tokenizer = torch.load("model/roberta-tokenizer.pt")
    return pipeline('sentiment-analysis', model=model,tokenizer=tokenizer)


def predict_sentiment_request(input: Input, generator) -> Output:
    labels=['negative', 'neutral', 'positive']
    output = generator(input.text)
    labelIdx = int(output[0]['label'][-1])
    return Output(sentiment = labels[labelIdx])