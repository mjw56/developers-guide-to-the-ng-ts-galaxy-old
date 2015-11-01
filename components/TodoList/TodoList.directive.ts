export class TodoList implements ng.IDirective {
  scope = {
    todos: '='
  };
  templateUrl: string = 'components/TodoList/TodoList.template.html';
  controllerAs: string = 'list';
  bindToController: boolean = true;
  controller: Function = ($scope) => {
    return {
      editedTodo: {},
      editTodo: <Function>(todo) => {
        console.log('edit todo', todo)
      },
      removeTodo: <Function>(todo) => {
        $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1);
      },
      doneEditing: <Function>(todo) => {
        console.log('done editing', todo)
      }
    }
  };
}
