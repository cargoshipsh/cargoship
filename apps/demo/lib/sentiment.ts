export const getSentiment = async (text: string): Promise<string> => {
  const response = await fetch("/api/sentiment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw Error("Sentiment API error");
  }
  const { sentiment } = await response.json();
  return sentiment;
};
