from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import torch

# load and save the tokenizer

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

torch.save(processor, "model/processor.pt")
torch.save(model, "model/model.pt")