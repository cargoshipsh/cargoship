import os
import re

import fasttext
from fasttext import tokenize

from app.api import Input, Output


white_space_pattern = re.compile(r"\s")

fasttext_language_model = fasttext.load_model(os.path.join("model", "lid.176.ftz"))

def preprocess_text_for_language_detection(text: str):
    """
    Cleans the text as per fasttext requirements.
    The requirements can be found here: https://pypi.org/project/fasttext/
    
    :text: str: text to clean
    :returns: str: cleaned text
    """
    # fastText assumes UTF-8 encoded text
    text = str(text)
    
    # fastText is not aware of UTF-8 whitespace
    # Replace all white space with space
    text = white_space_pattern.sub(text, " ")
    
    # Tokenize text, per fastext function and rejoin
    tokens = tokenize(text)
    text = " ".join(tokens)
    
    # Remove white space char as it affects the model accuracy
    text = text.replace("</s>", "")
    
    return text.lower()


def handle_detect_language_request(input: Input) -> Output:
    """
    Detects the language of the input text.
    :input: Input: input text
    :returns: Output: output language
    """
    text = preprocess_text_for_language_detection(input.text)
    language = fasttext_language_model.predict(text, k=1)[0][0].replace("__label__", "")
    return Output(language=language)