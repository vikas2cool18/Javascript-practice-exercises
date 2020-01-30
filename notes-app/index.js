const express = require('express')
const routes = require('./config/routes')
const setupDB = require('./config/database')
const app = express() 
const PORT = 3033 

// express to read json data 
app.use(express.json())
app.use('/', routes)

// connect to db 
setupDB()

app.get('/', (req, res) => {
    res.json({ text: 'welcome to the website'})
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})