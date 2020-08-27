const path = require('path')
const express = require('express')
const app = express()
const port = 3001

const axios = require('axios');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

app.get('/api/v1/tasks/:username/all', (req, res) => {
    
    let { username } = req.params
    axios.get(`http://localhost:8080/api/v1/tasks/${username}/all`)
        .then((response)=>{
            res.send(response.data)
        })
})

app.listen(port, () => console.log(`Example app listening at ${port}`))