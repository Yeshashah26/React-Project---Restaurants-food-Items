// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
const PORT = 5000;

(async () => { 
  const hashedPassword = await bcrypt.hash("123456",10);
    
  const USER = {
      emailid: "yeshashah@gmail.com", 
      password: hashedPassword,
    }

    app.use(
      cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
      })
    );

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", async (req, res) => {
      try{
        const { lat = "23.0225", lng = "72.5714" } = req.query;
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`;
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

    app.post("/login",async (req, res) => {
      const { emailId, password } = req.body;

      if(!emailId || !password)
      {
        return res.status(400).send({ error: "All fields are required "});
      }

      const isMatch = await bcrypt.compare( password, USER.password );
      
      if(emailId === USER.emailid && isMatch) {
        res.status(200).send({ message: "Login successful!" });
      } else {
        res.status(403).send({ error: "Invalid EmailId or password" });
    }
    });

    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})(); // here () -> call the function immediatelty (Immediately Invoked Function Expression (IIFE))