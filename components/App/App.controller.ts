export class App {	
	todos: Array<any> = [
		{ title: 'hack the planet', completed: true }, 
		{ title: 'get motor oil', completed: false },
		{ title: 'go to kutztown!', completed: true }
	];
	
	onSubmit(newTodo) {
		console.log('wuttt', newTodo)
	}
}