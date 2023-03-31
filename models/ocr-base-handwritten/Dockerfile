FROM python:3.10-slim-bullseye

WORKDIR /code

RUN apt update && apt install build-essential -y

COPY . .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

RUN python -m app.save_model

EXPOSE 80

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]