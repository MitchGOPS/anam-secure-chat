export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.anam.ai/v1/auth/session-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ANAM_API_KEY}`,
        },
        body: JSON.stringify({
          personaConfig: {
            name: "Cara",
            avatarId: "30fa96d0-26c4-4e55-94a0-517025942e18",
            voiceId: "6bfbe25a-979d-40f3-a92b-5394170af54b",
            llmId: "a7cf662c-2ace-4de1-a21e-ef0fbf144bb7",
            systemPrompt:
              "You are Cara, a helpful AI assistant.",
          },
        }),
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to create session token" });
  }
}