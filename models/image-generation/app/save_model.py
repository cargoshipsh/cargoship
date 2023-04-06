from diffusers import StableDiffusionPipeline, EulerDiscreteScheduler
import torch

scheduler = EulerDiscreteScheduler.from_pretrained("stabilityai/stable-diffusion-2-1-base", subfolder="scheduler")
model = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1-base", scheduler=scheduler, torch_dtype=torch.float16
)
torch.save(model, "model/model.pt")