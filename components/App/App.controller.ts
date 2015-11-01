export class App {	
	todos: Array<any> = [
		{ title: 'complete todomvc app', completed: false }, 
		{ title: 'write blog post', completed: false },
		{ title: 'make tutorial video', completed: false }
	];
	
	onSubmit(newTodo) {
		this.todos.push({ title: newTodo, completed: false });
	}
}