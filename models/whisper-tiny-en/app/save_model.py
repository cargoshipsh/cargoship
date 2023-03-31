from transformers import AutoProcessor, AutoModelForSpeechSeq2Seq
import torch

# load and save the tokenizer
processor = AutoProcessor.from_pretrained("openai/whisper-tiny.en")
model = AutoModelForSpeechSeq2Seq.from_pretrained("openai/whisper-tiny.en")

torch.save(processor, "model/processor.pt")
torch.save(model, "model/model.pt")