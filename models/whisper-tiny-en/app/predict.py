import torch
from transformers import pipeline

from app.api import Input, Output

def get_generator():
    # load model
    model = torch.load("model/model.pt")
    processor = torch.load("model/processor.pt")
    return (processor, model)


def predict(input, processor, model) -> Output:
    input_features = processor(input["array"], sampling_rate = input["sampling_rate"], return_tensors="pt").input_features 
    predicted_ids = model.generate(input_features)
    transcription = processor.batch_decode(predicted_ids, skip_special_tokens = True)
    return Output(caption = transcription)