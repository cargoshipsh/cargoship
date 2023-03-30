import torch
from transformers import pipeline

from app.api import Input, Output

max_length = 16
num_beams = 4
gen_kwargs = {"max_length": max_length, "num_beams": num_beams}


def get_generator():
    # load model
    model = torch.load("model/model.pt")
    processor = torch.load("model/processor.pt")
    return (processor, model)


def predict(image, processor, model, device) -> Output:
    pixel_values = processor(image, return_tensors="pt").pixel_values
    generated_ids = model.generate(pixel_values)
    generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
    return Output(caption = generated_text)