from transformers import VisionEncoderDecoderModel, ViTImageProcessor, AutoTokenizer
import torch

# load and save the tokenizer
tokenizer = AutoTokenizer.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
torch.save(tokenizer, "model/tokenizer.pt")

# load and save feature extractor
feature_extractor = ViTImageProcessor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
torch.save(feature_extractor, "model/feature_extractor.pt")

# load and save the model
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
torch.save(model, "model/model.pt")