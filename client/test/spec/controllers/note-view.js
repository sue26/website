'use strict';

describe('Controller: NoteViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NoteViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteViewCtrl = $controller('NoteViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoteViewCtrl.awesomeThings.length).toBe(3);
  });
});
