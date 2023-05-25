import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const apis = [
  {
    id: "language-detection",
    name: "Language Detection",
    description: "Automatically detect the language of an input text.",
    cost: 1,
    models: [
      {
        id: "fast",
        name: "Fast",
        description: "Fast Language Detection Model",
        endpointUrl: "https://language-detection.models.cargoship.sh",
        default: true,
      },
    ],
    instructions: {
      request: `{
  "text": "Hello World!"
}`,
      response: `{
  "language": "en"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"Hello, World!"}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/language-detection",
      playground: {
        type: "text",
        defaults: {
          input: "Hello, what's up?",
          output: "en",
        },
        outputKey: "language",
      },
    },
  },
  {
    id: "sentiment",
    name: "Sentiment Detection",
    description: "Automatically detect the sentiment of an input text.",
    cost: 1,
    models: [
      {
        id: "en",
        name: "English",
        description: "Sentiment Detection Model for English",
        endpointUrl: "https://sentiment-en.models.cargoship.sh",
        default: true,
      },
      {
        id: "de",
        name: "German",
        description: "Sentiment Detection Model for German",
        endpointUrl: "https://sentiment-de.models.cargoship.sh",
      },
    ],
    instructions: {
      request: `{
  "text": "I like you"
}`,
      response: `{
  "sentiment": "positive"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"I like you!"}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/sentiment-analysis-en",
      playground: {
        type: "text",
        defaults: {
          input: "I like you",
          output: "positive",
        },
        outputKey: "sentiment",
      },
    },
  },
  {
    id: "summarization",
    name: "Summarization",
    description: "Automatically summarize a text.",
    cost: 1,
    models: [
      {
        id: "en",
        name: "English",
        description: "Summarization Model for English",
        endpointUrl: "https://summarization-en.models.cargoship.sh",
        default: true,
      },
    ],
    instructions: {
      request: `{
  "text": "When it comes to machine learning, everyone says it's going to make our lives easier - and it's true! But that's not true for most developers out there. ML has the potential to automate and revolutionise the way we work and live. However, developing machine learning models can be time consuming and resource intensive, requiring a significant amount of domain knowledge, data processing skills and technical expertise."
}`,
      response: `{
  "text": "Developing machine learning models can be time consuming and resource intensive. It requires domain knowledge, data processing skills and technical expertise for most developers."
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"text":"A very long text..."}'`,
      docsUrl: "https://cargoship.sh/collections/text-processing/summarization-en",
      playground: {
        type: "text",
        defaults: {
          input:
            "When it comes to machine learning, everyone says it's going to make our lives easier - and it's true! But that's not true for most developers out there. ML has the potential to automate and revolutionise the way we work and live. However, developing machine learning models can be time consuming and resource intensive, requiring a significant amount of domain knowledge, data processing skills and technical expertise.",
          output:
            "Developing machine learning models can be time consuming and resource intensive. It requires domain knowledge, data processing skills and technical expertise for most developers.",
        },
        outputKey: "text",
      },
    },
  },
  {
    id: "image-captioning",
    name: "Image Captioning",
    description: "Automatically generates a caption describing a given input image.",
    cost: 1,
    models: [
      {
        id: "en",
        name: "English",
        description: "Image Captioning Model for English",
        endpointUrl: "https://image-captioning.models.cargoship.sh",
        default: true,
      },
    ],
    instructions: {
      request: `{
  "imageUrl": "https://images.unsplash.com/photo-1677496891133-f81cc7a4e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
}`,
      response: `{
  "caption": "a person riding a surfboard on top of a wave in the ocean"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-captioning",
      playground: {
        type: "image",
        defaults: {
          output: `a person riding a surfboard on top of a wave in the ocean`,
        },
        outputKey: "caption",
      },
    },
  },
  {
    id: "image-classification",
    name: "Image Classification",
    description: "Automatically generates a caption describing a given input image.",
    cost: 1,
    models: [
      {
        id: "en",
        name: "English",
        description: "Image Classification Model for English",
        endpointUrl: "https://image-classification.models.cargoship.sh",
        default: true,
      },
    ],
    instructions: {
      request: `{
  "imageUrl": "https://images.unsplash.com/photo-1677496891133-f81cc7a4e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
}`,
      response: `{
  "prediction": "seashore, coast, seacoast, sea-coast"
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-classification",
      playground: {
        type: "image",
        defaults: {
          output: `seashore, coast, seacoast, sea-coast`,
        },
        outputKey: "prediction",
      },
    },
  },
  {
    id: "text-generation",
    name: "Text Generation",
    description: "Automatically generates text by completing a given input text (GTP-2).",
    cost: 1,
    models: [
      {
        id: "en",
        name: "English",
        description: "Text Generation Model for English",
        endpointUrl: "https://text-generation-en.models.cargoship.sh",
        default: true,
      },
    ],
    instructions: {
      request: `{
  "text": "Person A: Hi, where are you from? Person B: Gemany and you? Person A:"
}`,
      response: `{
  "text": "Person A: Hi, where are you from? Person B: Gemany and you? Person A: Well, my father and mother, and the lady that goes by Miss Rose. I'm glad I stayed to be more honest.
}`,
      curl: `curl -X POST -H 'Content-type: application/json' -H 'X-API-Key: CHANGE_ME' --data '{"url":"bit.ly/3BeQtgL"}'`,
      docsUrl: "https://cargoship.sh/collections/image-recognition/image-classification",
      playground: {
        type: "text",
        defaults: {
          input: `Person A: Hi, where are you from?
            Person B: Gemany and you?
            Person A:`,
          output: `Person A: Hi, where are you from?
            Person B: Gemany and you?
            Person A: Well, my father and mother, and the lady that goes by Miss Rose. I'm glad I stayed to be more honest.`,
        },
        outputKey: "text",
      },
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
