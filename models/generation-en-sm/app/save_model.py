import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# load and save bert model
tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

torch.save(model, "model/model.pt")
torch.save(tokenizer, "model/tokenizer.pt")