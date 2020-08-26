export const allTasks = {
    userA: {
        tasks: [
            {
                title: '',
                details: '',
                date: Date(),
                completed: false,
                id: ''
            }
        ]
    }
}

export interface User {
    username: String;
    tasks: Task[];
}

export interface Task {
    title: String;
    details: String;
    date: Date;
    completed: boolean,
    id: string
}

export class User {
    constructor (username) {
        this.username = username
        this.tasks = []
    }
}

export class Task {
    constructor (title, description, date, completed = false, id) {
        this.title = title
        this.details = description
        this.date = new Date(date)
        this.completed = completed
        this.id = id
    }
}

// export interface db {
//     users: string
// }