/*global angular*/
(function () {
  'use strict';

  angular.module('greyForms.directiveFormatMoney', [])
    .directive('formatMoney', ['$filter', function ($filter) {
      return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
          if (!ctrl) {
            return;
          }
          ctrl.$parsers.unshift(function (value) {
            elem.maskMoney();
            return elem[0].value;
          });
          ctrl.$formatters.unshift(function (value) {
            elem.maskMoney();
            return elem[0].value;
          });
        }
      };
    }]);
}());