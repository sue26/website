'use strict';

describe('Controller: NoteCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NoteCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteCreateCtrl = $controller('NoteCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoteCreateCtrl.awesomeThings.length).toBe(3);
  });
});
