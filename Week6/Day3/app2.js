import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Study JavaScript");
myTodoList.addTask("Learn Node.js");
myTodoList.addTask("Practice modules");

myTodoList.completeTask(0);

myTodoList.listTasks();