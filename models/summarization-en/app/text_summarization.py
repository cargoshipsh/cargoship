import torch
from transformers import pipeline

from app.api import Input, Output


def get_generator():
    # load model
    model = torch.load("model/bart.pt")
    tokenizer = torch.load("model/bart-tokenizer.pt")
    return pipeline('summarization', model=model,tokenizer=tokenizer)


def summarize(input: Input, generator) -> Output:
    output = generator(input.text, max_length=100, min_length=30, do_sample=False)
    print(output[0])
    return Output(text = output[0]['summary_text'])