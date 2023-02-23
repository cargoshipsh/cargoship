from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# load and save bert model
model = AutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
torch.save(model, "model/roberta.pt")

# load and save bert tokenizer
tokenizer = AutoTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
torch.save(tokenizer, "model/roberta-tokenizer.pt")