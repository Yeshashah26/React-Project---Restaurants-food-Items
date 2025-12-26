// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import mock_menu_data from "./mock_menu_data.json" with {type : "json"}

const app = express();
const PORT = 5000;

(async () => { 
const SECRET_KEY = "Privatekey";

  const hashedPassword = await bcrypt.hash("123456",10); // hash(): secures hash passwords:-> hash("Password", salt )
    
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
        // Fetching Restaurant Data
        let { lat = "23.0225", lng = "72.5714" } = req.query;
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`;
        const response = await axios.get(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json",
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
      console.log(isMatch)
      
      if(emailId === USER.emailid && isMatch) {
        //creates Token
        const token = jwt.sign({ emailId }, SECRET_KEY, {expiresIn: "1h"});
        res.status(200).json({ message: "Login successful!", token});
      } else {
        res.status(403).json({ error: "Invalid EmailId or password" });
      }
    });

    app.get("/restaurant/:resId", async(req, res) => {
      try{
        const { resId } = req.params;
        // const { lat = "22.3147695", lng = "70.8022415" } = req.query;
        // const MenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`
        // const response = await axios.get(MenuUrl, {
        //   headers: {
        //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        //     "Accept": "application/json",
        //     "Referer": "www.swiggy.com",
        //   },
        // });

        if(resId == mock_menu_data.id){
          return res.status(200).json(mock_menu_data) 
        }else{
          return res.status(400).json({error: "Menu data is not fetched"})
        }
        // console.log("Menu Data: ",response)  
        // if(!response.ok)
        // {
        //   return res.status(500).json({error: "Opps....., Issue in Rendering"})
        // }
        // const data = await response.json();
        // return res.status(200).json(data);
      }catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to fetch restaurant data" });
      }
    })

    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})(); // here () -> call the function immediatelty (Immediately Invoked Function Expression (IIFE))