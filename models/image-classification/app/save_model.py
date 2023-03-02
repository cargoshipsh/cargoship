from transformers import AutoFeatureExtractor, AutoModelForImageClassification
import torch

# load and save the extractor
extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
torch.save(extractor, "model/extractor.pt")

# load and save the model
model = AutoModelForImageClassification.from_pretrained("google/vit-base-patch16-224")
torch.save(model, "model/model.pt")