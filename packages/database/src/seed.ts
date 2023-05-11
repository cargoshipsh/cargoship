import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const apis = [
  {
    id: "language-detection",
    name: "Language Detection",
    description: "Automatically detect the language of an input text.",
    endpointUrl: "https://language-detection.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  "text": "Hello World!"
}`,
      response: `{
  "language": "en"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"Hello, World!"}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/language-detection",
    },
  },
  {
    id: "sentiment",
    name: "Sentiment Detection",
    description: "Automatically detect the sentiment of an input text.",
    endpointUrl: "https://sentiment-en.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  "text": "I like you"
}`,
      response: `{
  "sentiment": "positive"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"I like you!"}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/sentiment-analysis-en",
    },
  },
  {
    id: "summarization",
    name: "Summarization",
    description: "Automatically summarize a text.",
    endpointUrl: "https://summarization-en.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  "text": "When it comes to machine learning, everyone says it's going to make our lives easier - and it's true! But that's not true for most developers out there. ML has the potential to automate and revolutionise the way we work and live. However, developing machine learning models can be time consuming and resource intensive, requiring a significant amount of domain knowledge, data processing skills and technical expertise."
}`,
      response: `{
  "text": "Developing machine learning models can be time consuming and resource intensive. It requires domain knowledge, data processing skills and technical expertise for most developers."
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"A very long text..."}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/summarization-en",
    },
  },
  {
    id: "image-captioning",
    name: "Image Captioning",
    description: "Automatically generates a caption describing a given input image.",
    endpointUrl: "https://image-captioning.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  "imageUrl": "https://images.unsplash.com/photo-1677496891133-f81cc7a4e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
}`,
      response: `{
  "caption": "a person riding a surfboard on top of a wave in the ocean"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-captioning",
    },
  },
  {
    id: "image-classification",
    name: "Image Classification",
    description: "Automatically generates a caption describing a given input image.",
    endpointUrl: "https://image-classification.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  "imageUrl": "https://images.unsplash.com/photo-1677496891133-f81cc7a4e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
}`,
      response: `{
  "prediction": "seashore, coast, seacoast, sea-coast"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-classification",
    },
  },
  {
    id: "text-generation",
    name: "Text Generation",
    description: "Automatically generates text by completing a given input text (GTP-2).",
    endpointUrl: "https://text-generation-en.models.cargoship.sh",
    cost: 1,
    instructions: {
      request: `{
  Person A: Hi, where are you from?
  Person B: Gemany and you?
  Person A:
}`,
      response: `{
  "prediction": "seashore, coast, seacoast, sea-coast"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-classification",
    },
  },
];
async function main() {
  for (const api of apis) {
    await prisma.api.upsert({
      where: {
        id: api.id,
      },
      update: {
        ...api,
      },
      create: {
        ...api,
      },
    });
  }
  console.log("created or updated apis");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
