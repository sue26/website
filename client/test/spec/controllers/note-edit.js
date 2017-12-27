'use strict';

describe('Controller: NoteEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NoteEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoteEditCtrl = $controller('NoteEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoteEditCtrl.awesomeThings.length).toBe(3);
  });
});
