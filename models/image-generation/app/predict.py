from diffusers import StableDiffusionPipeline, EulerDiscreteScheduler
import torch
from fastapi import Response
from io import BytesIO

model_id = "stabilityai/stable-diffusion-2-1-base"

def get_diffuser():
    model = torch.load("model/model.pt")
    return(model)

def predict(prompt: str, neg_prompt: str, model) -> Response:
    image = model(prompt = prompt, negative_prompt= neg_prompt).images[0]

    img_byte_arr = BytesIO()
    image.save(img_byte_arr, format='PNG')
    return Response(content = img_byte_arr.getvalue(), media_type="image/png")
