/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()
const PORT = 8000
import express, { json } from 'express'
import cors from 'cors'
const app = express()

app.use(json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const OPEN_API_KEY = process.env.OPEN_API_KEY

app.post('/completions', async (req, res) => {

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPEN_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model : 'gpt-4',
            messages: [{role: "user", content: "How are you?"}],
            max_tokens: 150,

        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
