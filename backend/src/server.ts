// declare var require: any

const express = require('express')
const app = express()
const bodyParser = require ('body-parser')

const port = 3000

app.use(bodyParser.json())

const { User, Task, allTasks } = require ('./models/tasks')


app.post('/api/v1/tasks/:username/create', (req, res) => {
    // req.body - task name, description, date
    let { username } = req.params
    let { title, details, date } = req.body
    let id = uuidv4()
    let task = new Task(title, details, date,  false, id)

    if (allTasks[username]){
        allTasks[username].tasks.push(task)
    } else {
        let user = new User(username) 
        user.tasks.push(task)
        allTasks[username] = user
    }
    console.log(allTasks[username].tasks)

    // 201 (Created) response
    res.sendStatus(201)

    
})

app.get('/api/v1/tasks/:username/all', (req, res) => {
    let { username } = req.params

    if (allTasks[username]) {
        let tasks = allTasks[username].tasks
        res.send(tasks)
    } else {
        // 204 not found
        res.sendStatus(204)
    }
    
})


app.put('/api/v1/tasks/:username/:id', (req, res) => {
    // toggle completion endpoint
    let { username } = req.params
    let { id } = req.params

    if (allTasks[username]) {
        let tasks = allTasks[username].tasks
        for (let task of tasks) {
            if (task.id === id) {
                task.completed = !task.completed

                // 200 (OK)
                res.sendStatus(200)
                return
            }
        }
    }
    res.sendStatus(204)
})

app.delete('/api/v1/tasks/:username/:id', (req, res) => {
    let { username } = req.params
    let { id } = req.params

    if (allTasks[username]) {
        let tasks = allTasks[username].tasks
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks.splice(i, 1)
                res.sendStatus(200)
                return
            }
        }
    }
    res.sendStatus(204)
})

app.get('/api/create', (req, res) => {

})

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})