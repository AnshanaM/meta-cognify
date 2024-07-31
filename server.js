const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = 'api71-api-73483e6f-7027-4a44-836c-6d63a3ad44c2'

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "tiiuae/falcon-180b-chat",
            messages: [{role: "user", content: req.body.message}],
            max_tokens: 100,

        })
    }
    try{
        const response = await fetch('https://api.ai71.ai/v1/chat/completions', options)
        if (!response.ok) {
            // Handle non-200 status codes
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData });
        }
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))