export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            task: task,
            completed: false
        });
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
        }
    }

    listTasks() {
        this.tasks.forEach((task, index) => {
            console.log(
                `${index + 1}. ${task.task} - ${task.completed ? "Completed" : "Not completed"}`
            );
        });
    }
}