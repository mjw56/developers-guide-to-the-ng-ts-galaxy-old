export class TodoFooter implements ng.IDirective {
  scope = {
    todos: '=',
    doneCount: '=',
    remainingCount: '='
  };
  templateUrl: string = 'components/TodoFooter/TodoFooter.template.html';
  controllerAs: string = 'footer';
  bindToController: boolean = true;
  controller: Function = ($scope, $location) => {
    $scope.footer.location = $location;
    console.log($scope.footer.location);
    
    const clearDoneTodos: Function = () => {
      $scope.footer.todos = $scope.footer.todos = 
      $scope.footer.todos.filter(todoItem => !todoItem.completed);
    };
    
    $scope.$watch('footer.location', location => $scope.footer.location = location);
    
    return {
      clearDoneTodos: clearDoneTodos
    };
  };
}
