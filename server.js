import http from "http";

const fetchFact = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch("https://catfact.ninja/fact?max_length=100", { signal: controller.signal });
    if (!response.ok) throw new Error("Failed to fetch cat fact");
    const data = await response.json();
    return data.fact;
  } catch (error) {
    console.error("Cat Facts API error:", error.message);
    return "Dacts are unavailable!";
  } finally {
    clearTimeout(timeout);
  }
};

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/me") {
    const fact = await fetchFact();

    const responseData = {
      status: "success",
      user: {
        email: "asukuhamza1@gmail.com",
        name: "Asuku Hamza",
        stack: "MERN"
      },
      timestamp: new Date().toISOString(),
      fact: fact
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "error", message: "Page not found" }));
  }
});

const PORT = 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
