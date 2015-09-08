/*global angular,GREY_DATA*/
(function () {
  'use strict';

  angular.module('greyForms', [
    'ngMessages',
    'ui.bootstrap',
    'greyForms.controllerMain',
    'greyForms.serviceFileModel',
    'greyForms.serviceSaveFile',
    'greyForms.directiveFormatMoney'
  ]);

  angular.module('greyForms.controllerMain', [])
    .controller('MainController', ['$scope', 'fileModel', 'saveFile',
      function ($scope, fileModel, saveFile) {
        $scope.model = null;
        $scope.requestDateOpen = false;
        $scope.authOneDateOpen = false;
        $scope.authTwoDateOpen = false;
        $scope.errorBoxVisible = false;
        $scope.errorMessages = [];

        function init(data) {
          // offices and jobs are data returned from the server
          // It is use in the typeahead (autocomplete) fields
          $scope.jobs = data.source.jobs;
          $scope.offices = data.source.offices;
          $scope.model = fileModel.init(data);
        }

        function wiredFormSubmit() {
          $scope.errorBoxVisible = false;
          $scope.errorMessages = [];
          // The use of 'else if' is to avoid producing ternary expressions
          // that were causing errors with the gulp uglify task
          if ($scope.wiredForm.$invalid) {
            $scope.errorBoxVisible = true;
            if ($scope.wiredForm.$error.required) {
              $scope.errorMessages.push('One or more required fields are missing');
            }
            if ($scope.wiredForm.$error.pattern) {
              $scope.errorMessages.push('One or more fields do not match its pattern');
            }
            if ($scope.wiredForm.$error.maxlength) {
              $scope.errorMessages.push('One or more fields are too long');
            }
            if ($scope.wiredForm.$error.date) {
              $scope.errorMessages.push('One or more fields are not valid dates');
            }
          } else if (!fileModel.valid()) {
            $scope.errorBoxVisible = true;
            $scope.errorMessages = fileModel.getErrorMessages();
          } else {
            saveFile.toPdf($scope.model);
          }
        }

        $scope.wiredFormSubmit = wiredFormSubmit;
        $scope.addExtraInfoLine = fileModel.addExtraInfoLine;
        init(GREY_DATA);
      }]);
}());