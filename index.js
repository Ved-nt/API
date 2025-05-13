import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2";
const RAPIDAPI_KEY = "f308760dc0msh6c9667f3cd31944p11e3e9jsn273b1a3058cf";
const RAPIDAPI_HOST = "bhagavad-gita3.p.rapidapi.com";

app.use(express.static("public"));

const config = {
    headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
    },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});


app.post("/chap", async (req, res) => {
    const searchId = req.body.id;
    try {
        const response = await axios.get(API_URL + "/chapters/" + searchId + "/", config);
        
        // Log the API response to understand its structure
        console.log("API Response:", response.data);

        // Filter out specific properties from the chapter object
        const { name_transliterated,id,chapter_summary_hindi, slug, ...filteredChapter } = response.data;

        res.render("index.ejs", { content: JSON.stringify(filteredChapter) });
        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(404).send(error.message);
    }
});

// app.post("/chap", async (req, res) => {
//     const searchId = req.body.id;
//     try {
//         const response = await axios.get(API_URL + "/chapters/" + searchId + "/", config);
        
//         // Log the API response to understand its structure
//         console.log("API Response:", response.data);

//         // Filter out specific properties from the chapter object
//         const { name_transliterated, name_translated,name, slug, ...filteredChapter } = response.data;

//         // Construct a string with each property and its value on a separate line
//         let content = " ";
//         for (const [key, value] of Object.entries(filteredChapter)) {
//             content += ` ${key}:${value} `;
//         }

//         res.render("index.ejs", { content });
        
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(404).send(error.message);
//     }
// });



app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/history",(req,res)=>{
    res.render("history.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/',
//   headers: {
//     'X-RapidAPI-Key': '1420254f5emshfae6f13373a4f48p1a93a6jsn908f2e75b18e',
//     'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
