from transformers import AutoTokenizer, BartForConditionalGeneration
import torch

# load and save bert model
model = BartForConditionalGeneration.from_pretrained("philschmid/bart-large-cnn-samsum")
torch.save(model, "model/bart.pt")

# load and save bert tokenizer
tokenizer = AutoTokenizer.from_pretrained("philschmid/bart-large-cnn-samsum")
torch.save(tokenizer, "model/bart-tokenizer.pt")