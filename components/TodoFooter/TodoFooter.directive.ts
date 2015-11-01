export class TodoFooter implements ng.IDirective {
  scope = {
    todos: '='
  };
  templateUrl: string = 'components/TodoFooter/TodoFooter.template.html';
  controllerAs: string = 'footer';
  bindToController: boolean = true;
  controller: Function = ($scope) => {
    return {
		
    }
  };
}
