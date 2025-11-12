// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const app = express();
const PORT = 5000;

(async () => { 
const SECRET_KEY = "Privatekey";

  const hashedPassword = await bcrypt.hash("123456",10);
    
  const USER = {
      emailid: "yeshashah@gmail.com", 
      password: hashedPassword,
    }

    app.use(cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
      })
    );

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    function authenticationToken(req, res, next){
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1]; 

      if(!token)
        return res.status(401).send({ error : "Token Missing" });
      
      // Verify the validity of token (Signature + Expiry Time)
      jwt.verify(token, SECRET_KEY, (err, user) => {
          if(err) return res.status(403).send({ error : "Token Invalid" });
          req.user = user;
          next();
      });
    }

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

    app.get("/profile", authenticationToken, (req, res) => {
      res.status(200).send({ message : `Welcome, ${req.user.emailId}` })
    });

    app.post("/login",async (req, res) => {
      const { emailId, password } = req.body;

      if(!emailId || !password)
      {
        return res.status(400).send({ error: "All fields are required "});
      }

      const isMatch = await bcrypt.compare( password, USER.password );
      
      if(emailId === USER.emailid && isMatch) {
        //creates Token
        const token = jwt.sign({ emailId }, SECRET_KEY, {expiresIn: "1h"});
        console.log("token: ",token);
        res.status(200).json({ message: "Login successful!", token});
      } else {
        res.status(403).json({ error: "Invalid EmailId or password" });
      }
    });

    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})(); // here () -> call the function immediatelty (Immediately Invoked Function Expression (IIFE))