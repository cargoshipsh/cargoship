# language-detection

API for creating images  of an input text. Get more details on [cargoship.sh](https://cargoship.sh).

## How to setup

Create a new venv (virtual environment):

```bash
python3 -m venv .venv
```

Activate new environment:

For Mac/Linux:

```bash
source .venv/bin/activate
```

For Windows:

```bash
source .venv/Scripts/activate
```

Install packages:

For Mac/Linux:

```bash
pip install -r requirements.txt
```

For Windows:

```bash
pip install -r requirements_windows.txt --index-url https://download.pytorch.org/whl/cu117
```

---

## Run the server

```bash
API_KEY=CHANGE_ME uvicorn app.main:app --reload
```

The server is running on [http://localhost:8000](http://127.0.0.1:8000/).You can change the `API_KEY` if you like. Swagger documentation can be accessed at [http://localhost:8000/docs](http://127.0.0.1:8000/docs).

To send a request via your terminal, paste & run the following command:

```bash
curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"prompt":"A cat playing with yarn"}' http://localhost:8000
```

---

## How to build & run the Docker Image

```bash
docker build -t image-generation-sd-api .
```

Run the Docker Image with:

```bash
docker run -d --rm -p 8000:80 --env API_KEY=CHANGE_ME --name image-generation-sd-api image-generation-sd-api
```

You can now access the api at [http://localhost:8000](http://127.0.0.1:8000/). Swagger documentation are available at [http://localhost:8000/docs](http://127.0.0.1:8000/docs).

<br/>

To view the logs of the container run:

```bash
docker logs image-generation-sd-api
```

To stop the container run:

```bash
docker stop image-generation-sd-api
```

---

## How to use docker compose

You can spin up the setup using docker compose and benefit e.g. from automatic server restarts. Before running the setup, please change the environment variable in the `docker-compose.yml` file. Then run:

```bash
docker compose up -d
```

To stop the setup you can run

```
docker compopse down
```

To rebuild the docker image run

```
docker compose build
```

Logs can be accessed with

```
docker compose logs
```
