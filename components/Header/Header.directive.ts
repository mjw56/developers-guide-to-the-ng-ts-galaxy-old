export class Header implements ng.IDirective {
  scope = {
    onSubmit: '&'
  }
  templateUrl: string = 'components/Header/Header.template.html';
  controllerAs: string = 'header';
  bindToController: boolean = true;
  controller: Function = ($scope) => {
    return {
      newTodo: '',
      submit: () => {
        $scope.header.onSubmit({ newTodo: $scope.header.newTodo });
        $scope.header.newTodo = '';
      }
    }
  };
  
  static factory(): ng.IDirectiveFactory {
		const directive: ng.IDirectiveFactory =
			(...args) => new (Header.bind.apply(Header, [null].concat(args)));
			
		directive.$inject = [];
		
		return directive;
	}
}
