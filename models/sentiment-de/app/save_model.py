from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# load and save bert model
model = AutoModelForSequenceClassification.from_pretrained("oliverguhr/german-sentiment-bert")
torch.save(model, "model/bert.pt")

# load and save bert tokenizer
tokenizer = AutoTokenizer.from_pretrained("oliverguhr/german-sentiment-bert")
torch.save(tokenizer, "model/bert-tokenizer.pt")