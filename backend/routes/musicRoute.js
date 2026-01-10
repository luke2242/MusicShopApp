const express = require('express');
const router = express.Router();
const axios = require('axios');

// This route will get data from the external discogs API
router.get("/musicData", async (req, res) => {
    await axios.get('https://api.discogs.com/database/search', {
        params: {
            // These parameters will be changed at a later time
            q: "Kraftwerk", type: "release"
        },
        // Ensures API key is protected
        headers: {
            Authorization: `Discogs token=${process.env.API_KEY}`,
        }
    })
        // Returns the result if we have a sucessful response, in json format
        .then(result => {
            res.json(result.data.results);
            console.log(result.data.results);
        })
        // Otherwise we log an error message
        .catch(error => {
            console.log(error.message);
        })

})

module.exports = router;