// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { lat = "23.0225", lng = "72.5714" } = req.query;
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&retaurantId=${restaurantId}`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
