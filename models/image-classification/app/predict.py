import torch
from transformers import pipeline

from app.api import Input, Output


def get_generator():
    # load model
    model = torch.load("model/model.pt")
    extractor = torch.load("model/extractor.pt")
    return (extractor, model)


def predict(image, extractor, model) -> Output:
    inputs = extractor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    logits = outputs.logits
    # model predicts one of the 1000 ImageNet classes
    predicted_class_idx = logits.argmax(-1).item()
    return Output(prediction = model.config.id2label[predicted_class_idx])