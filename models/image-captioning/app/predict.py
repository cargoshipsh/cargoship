import torch
from transformers import pipeline

from app.api import Input, Output

max_length = 16
num_beams = 4
gen_kwargs = {"max_length": max_length, "num_beams": num_beams}


def get_generator():
    # load model
    model = torch.load("model/model.pt")
    tokenizer = torch.load("model/tokenizer.pt")
    feature_extractor = torch.load("model/feature_extractor.pt")
    return (tokenizer, feature_extractor, model)


def predict(image, tokenizer, model, feature_extractor, device) -> Output:
    pixel_values = feature_extractor(images=[image], return_tensors="pt").pixel_values
    pixel_values = pixel_values.to(device)
    output_ids = model.generate(pixel_values, **gen_kwargs)
    preds = tokenizer.batch_decode(output_ids, skip_special_tokens=True)
    preds = [pred.strip() for pred in preds]
    return Output(caption = preds[0])