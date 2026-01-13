const express = require('express');
const router = express.Router();
const axios = require('axios');

// This route will get data from the external discogs API
router.get("/musicData", async (req, res) => {

    const { q = 'nier' } = req.query;

    
    try {
        const result = await axios.get("https://api.discogs.com/database/search", {
            
            params: {
                q: q,
                type: "release"
            },
            headers: {
                Authorization: `Discogs token=${process.env.API_KEY}`,
            }
        });

        console.log(result.data.results);
        return res.json(result.data.results);

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Failed to fetch data from Discogs" });
    }
});

module.exports = router;