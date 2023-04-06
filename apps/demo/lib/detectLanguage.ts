export const detectLanguage = async (text: string): Promise<string> => {
  const response = await fetch("/api/detect-language", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw Error("Detect Language API error");
  }
  const { language } = await response.json();
  return language;
};
