require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.7,
          max_tokens: 2000,
          messages: [
            {
              role: "system",
              content:
                "You are Ascension System AI. Respond ONLY with valid JSON, no markdown fences, no explanation.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      console.error("Groq error:", JSON.stringify(data));
      return res
        .status(500)
        .json({ error: "No response from Groq", details: data });
    }

    const text = data.choices[0].message.content
      .replace(/```json|```/g, "")
      .trim();

    res.json({ result: text });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`),
);
