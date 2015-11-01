export class TodoList implements ng.IDirective {
  scope = {
    todos: '=',
    statusFilter: '='
  };
  templateUrl: string = 'components/TodoList/TodoList.template.html';
  controllerAs: string = 'list';
  bindToController: boolean = true;
  controller: Function = ($scope) => {
    const editTodo: Function = (todoItem: TodoItem) => {
      $scope.list.editedTodo = todoItem;
    };
    
    const removeTodo: Function = (todo: TodoItem) => {
      $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1);
    };
    
    const doneEditing: Function = (todoItem: TodoItem) => {
      $scope.list.editedTodo = null;
			todoItem.title = todoItem.title.trim();
			if (!todoItem.title) {
				removeTodo(todoItem);
      }
    };
    
    return {
      editedTodo: {},
      editTodo: editTodo,
      removeTodo: removeTodo,
      doneEditing: doneEditing
    };
  };
}
